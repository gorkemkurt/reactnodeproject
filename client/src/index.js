import 'materialize-css/dist/css/materialize.min.css';
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import reduxThunk from 'redux-thunk';
import App from './components/App';
import reducers from './reducers';
import Question from './components/Question';
import registerServiceWorker from './registerServiceWorker';
import './index.css';
// import { BrowserRouter, Route } from 'react-router-dom'

const store = createStore(reducers, {}, applyMiddleware(reduxThunk));

ReactDOM.render(
    <Provider store={store}><App /></Provider>,
    document.querySelector('#root')
);
// ReactDOM.render((
//     <BrowserRouter>
//         <div>
//             <Route exact path="/" component={App} />
//             <Route path="/index" component={Question} />
//         </div>
//     </BrowserRouter>
// ), 
// document.getElementById('root'))
// registerServiceWorker();
