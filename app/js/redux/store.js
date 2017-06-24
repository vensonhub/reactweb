import { createStore,applyMiddleware } from 'redux';
import { createLogger } from 'redux-logger';
import loggerMiddleware from './loggerMiddleware';
import counter from './reducer';


//第一种用法
let store = createStore(counter,applyMiddleware(loggerMiddleware));
//第二种用法
// const finalCreateStore = applyMiddleware(createLogger())(createStore);
// const store = finalCreateStore(counter);

export default store;
