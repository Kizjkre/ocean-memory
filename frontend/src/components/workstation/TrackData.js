import { useState, useEffect, createRef } from 'react';
import * as d3 from 'd3';

const TrackData = ({ file, column }) => {
  const svg = createRef();
  const xAxis = createRef();
  const yAxis = createRef();

  const [state, setState] = useState({ line: '' });

  const data = file.map((row, i) => ([i, parseFloat(row[column])]));

  useEffect(() => {
    const width = getComputedStyle(svg.current).width;
    const height = getComputedStyle(svg.current).height;

    const x = d3.scaleLinear()
      .domain(d3.extent(data, datum => datum[0]))
      .range([0, parseFloat(width.slice(0, width.length - 2))]);
    const y = d3.scaleLinear()
      .domain(d3.extent(data, datum => datum[1]))
      .range([parseFloat(height.slice(0, height.length - 2)), 0]);

    const line = d3.line()
      .x(data => x(data[0]))
      .y(data => y(data[1]));

    const axes = [
      d3.axisBottom()
        .scale(x)
        .ticks(data.length / 5),
      d3.axisLeft()
        .scale(y)
        .ticks(20)
    ];

    d3.select(xAxis.current).call(axes[0]);
    d3.select(yAxis.current).call(axes[1]);

    setState({ ...state, line: line(data) });
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

  return (
    <svg className="track-graph" ref={ svg }>
      <g className="x" ref={ xAxis } />
      <g className="y" ref={ yAxis } />
      <g className="line">
        <path d={ state.line } fill="none" stroke="black" />
      </g>
    </svg>
  );
};

export default TrackData;