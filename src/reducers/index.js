//reducers
import { combineReducers } from 'redux';
import musicalReducer from './reducer-musicals';

const rootReducer = combineReducers({
  musicals:musicalReducer // this is key
});

export default rootReducer;
