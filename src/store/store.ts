
import { createStore } from 'redux';
import objectReducer from './reducer';

const store = createStore(objectReducer);

export default store;
