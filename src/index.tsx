import { coverAttribute } from 'cssin'
import  'cssin/commonSheets'
import  'cssin/commonValues'
import React from 'react';
import ReactDOM from 'react-dom';

import { App } from './App';
import './index.css';
import * as serviceWorker from './serviceWorker';

coverAttribute();
ReactDOM.render(<App />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA

if (navigator && navigator.serviceWorker) {
  navigator.serviceWorker.getRegistrations().then(function(registrations) {
    for (const registration of registrations) {
      registration.unregister();
      const update = document.createElement('div');
      update.innerText = '已发现注册中的 service-worker，并且卸载';
      document.body.appendChild(update);
    }
  });
}

serviceWorker.register({
  onSuccess: () => {
    const update = document.createElement('div');
    update.innerText = '已激活 service-worker';
    document.body.appendChild(update);
  },
  onUpdate: () => {
    const update = document.createElement('div');

    const p = document.createElement('p');
    p.innerText = '有新的资源，并且更新完毕';
    update.appendChild(p);

    const button = document.createElement('button');
    button.innerText = '点击更新';
    button.onclick = () => {
      window.location.reload();
    };
    update.appendChild(button);

    document.body.appendChild(update);
  },
});
