import { legacy_createStore as createStore, combineReducers } from 'redux';
import { mainReducer } from '../redux/reducers';


const rootReducer = combineReducers({
  connected: mainReducer,
});


export const store = createStore(rootReducer);