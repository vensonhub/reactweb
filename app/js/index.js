import React from 'react';
import ReactDOM from 'react-dom';
import {Provider,connect} from 'react-redux';
import Counter from './components/Counter';
import store from './redux/store';
import RootApp from './containers/RootApp';




ReactDOM.render(
  <Provider store={store}>
    <RootApp />
  </Provider>
  , document.getElementById('app'));
