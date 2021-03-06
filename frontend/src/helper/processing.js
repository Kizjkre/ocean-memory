import * as d3 from 'd3';

export const chunkify = (data, size) => {
  if (size < 1) {
    return data;
  }

  const temp = [];
  data.forEach(d => {
    for (let i = 0; i < d.length - size; i += size) {
      temp.push(d.substr(i, size));
    }
  });
  return temp;
};

export const isNumerical = data => data.every(d => typeof d === 'number');

export const scale = (data, type, max, min, center) => {
  if (!isNumerical(data)) {
    return null;
  }
  return data.map(d => {
    switch (type) {
      case 'logistic':
        return (max - min) / (1 + Math.E ** (-1 * (d - center))) + min;
      case 'tanh':
        return (max - min) * Math.tanh(d - center) + (max + min) / 2;
      case 'arctan':
        return (max - min) * 2 / Math.PI * Math.atan(d - center) + (max + min) / 2;
      case 'sign':
        return (max - min) * Math.sign(d - center) + (max + min) / 2;
      default:
        return d;
    }
  });
};

export const removeOutliers = data => {
  const first = d3.quantile(data, 0.25);
  const third = d3.quantile(data, 0.75);
  return data.filter(d => !(d < first -  1.5 * (third - first) || d > third + 1.5 * (third - first)));
};

export const formatCSV = raw => {
  let lines = raw.split(/\n/g);
  const columns = lines[lines.length / 2].split(',').length;
  lines = lines.filter(line => line.split(',').length === columns);
  return lines.join('\n');
};

export const typeify = data => {
  // TODO: more data types
  data.forEach(row => {
    Object.keys(row).forEach(col => {
      if (!isNaN(row[col])) {
        row[col] = parseFloat(row[col]);
      }
    });
  });

  return data;
};

export const average = data => data.reduce((acc, curr) => acc + curr) / data.length;

export const isOutlier = (datum, q1, q3) => !(datum < q1 -  1.5 * (q3 - q1) || datum > q3 + 1.5 * (q3 - q1));

export const numerizeToNumber = data => data.map(d => {
  let sum = 0;
  for (let i = 0; i < d.length; i++) {
    sum += d.charCodeAt(i);
  }
  return sum / d.length;
});

// export const numerizeToArray = data => {
//   data = data.map(d => {
//     const values = [];
//     for (let i = 0; i < d.length; i++) {
//       values.push(d.charCodeAt(i));
//     }
//     return values;
//   });
//
//   const q1 = d3.quantile(data.flat(), 0.25);
//   const q3 = d3.quantile(data.flat(), 0.75);
//
//   return data.map(d => isOutlier(d, q1, q3) ? d - (q3 + 1.5 * (q3 - q1)) : d);
// };

export const numerizeToArray = data => data.map(d => {
  const values = [];
  for (let i = 0; i < d.length; i++) {
    values.push(d.charCodeAt(i));
  }
  return values;
});

export const deepClone = obj => JSON.parse(JSON.stringify(obj));
