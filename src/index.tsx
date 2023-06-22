import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.scss';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';

import { Provider } from 'react-redux';
import { store } from './redux/store';

let api_S = process.env.REACT_APP_BASE_API;
let api: string = `${api_S}:${window.location?.port}`;
const { fetch: originalFetch } = window;
window.fetch = async (...args) => {
  let [resource, config]: any = args;
  let Url = api + '/' + resource;
  const response = await originalFetch(Url, config);
  return response;
};


const root = ReactDOM.createRoot(
  (document.getElementById('root') as HTMLElement) ||
    (document.createElement('div') as HTMLDivElement)
);
function renderf() {
  return root.render(
    <React.StrictMode>
      <Provider store={store}>
        <BrowserRouter>
      <App/>
        </BrowserRouter>
      </Provider>
    </React.StrictMode>
  );
}
renderf();
store.subscribe(renderf);
// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
