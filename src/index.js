//entry point of app
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux'; // only imports what's in {} from react-redux
import { createStore, applyMiddleware } from 'redux';
import { Router, Route, IndexRoute, Link, hashHistory } from 'react-router'


import App from './components/app';
import Instructions from './components/instructions';
import MusicalPictures from './components/musicalpictures';



import reducers from './reducers';


const createStoreWithMiddleware = applyMiddleware()(createStore);

ReactDOM.render(
  <Provider store={createStoreWithMiddleware(reducers)}>
    <Router history={hashHistory}>
      <Route path="/" component={App}>
        <IndexRoute component={Instructions} />
        <Route path="musicalpictures" component={MusicalPictures} />
      </Route>
    </Router>
  </Provider>
  , document.querySelector('.container'));
