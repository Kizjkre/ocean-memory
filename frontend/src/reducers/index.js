import {
  UPLOAD_FILE,
  ADD_TRACK,
  ADJUST_SETTINGS,
  ADJUST_GLOBAL_SETTINGS
} from '../constants/action-types';

const initialState = {
  files: [],
  tracks: [],
  settings: [],
  globalSettings: {
    bpm: 120,
    key: 'C'
  }
};

const initialSettings = {
  mute: false,
  volume: 50,
  pan: 0
};

const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case UPLOAD_FILE:
      return Object.assign({}, state, {
        files: [...state.files, action.payload]
      });
    case ADD_TRACK:
      return Object.assign({}, state, {
        tracks: [...state.tracks, action.payload],
        settings: [...state.settings, { i: state.settings.length, settings: { ...initialSettings } }]
      });
    case ADJUST_SETTINGS:
      return Object.assign({}, state, {
        settings: state.settings.map(({ i, settings }) => {
          if (action.payload.i === i) {
            return ({
              i,
              settings: action.payload.settings
            });
          }
          return ({ i, settings });
        })
      });
    case ADJUST_GLOBAL_SETTINGS:
      return Object.assign({}, state, {
        globalSettings: action.payload
      });
    default:
      return state;
  }
};

export default rootReducer;