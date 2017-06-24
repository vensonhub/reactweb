import { createStore,applyMiddleware ,compose} from 'redux';
import { createLogger } from 'redux-logger';
import loggerMiddleware from './loggerMiddleware';
import {counter} from '../components/Counter/CounterRedux';
import thunk from 'redux-thunk';
import DevTools from '../containers/DevTools';

const enhancer = compose(applyMiddleware(createLogger(),thunk),DevTools.instrument());
//第一种用法
let store = createStore(counter,enhancer);
//第二种用法
// const finalCreateStore = applyMiddleware(createLogger())(createStore);
// const store = finalCreateStore(counter);

export default store;
