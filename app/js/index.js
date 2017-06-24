import React from 'react';
import ReactDOM from 'react-dom';
import {Provider,connect} from 'react-redux';
import store from './redux/store';
import RootApp from './containers/RootApp';
import DevTools from './containers/DevTools';




ReactDOM.render(
  <Provider store={store}>
    <div>
      <DevTools/>
      <RootApp />
    </div>
  </Provider>
  , document.getElementById('app'));
