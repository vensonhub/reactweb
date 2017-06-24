import { createStore } from 'redux';
import counter from './reducer';

let store = createStore(counter);

export default store;
