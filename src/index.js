import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import PlotPage from './Components/PlotPage';
import * as serviceWorker from './serviceWorker';
import { HashRouter, Route } from 'react-router-dom'

// ReactDOM.render(<App />, document.getElementById('root'));

ReactDOM.render((
  <HashRouter>
    <div>
      <Route exact path="/" component={App} />
      <Route path="/plot" component={PlotPage} />
    </div>
  </HashRouter>
), document.getElementById('root'))

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
