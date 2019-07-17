import React from 'react';
import ReactDOM from 'react-dom';

import { App } from './App';
import './index.css';
import * as serviceWorker from './serviceWorker';

ReactDOM.render(<App />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.register({
  onSuccess: () => {
    const update = document.createElement('div');
    update.innerText = '已激活 service-worker';
    document.body.appendChild(update);
  },
  onUpdate: () => {
    const update = document.createElement('div');
    update.innerText = '已由 service-worker 更新完毕资源';
    document.body.appendChild(update);
  },
});
