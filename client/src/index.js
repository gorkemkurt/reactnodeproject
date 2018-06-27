import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { BrowserRouter, Route } from 'react-router-dom'
import App from './components/App';
import Question from './components/Question';
import registerServiceWorker from './registerServiceWorker';
import 'materialize-css/dist/css/materialize.min.css';

ReactDOM.render((
    <BrowserRouter>
        <div>
            <Route exact path="/" component={App} />
            <Route path="/index" component={Question} />
        </div>
    </BrowserRouter>
), document.getElementById('root'))
// ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
