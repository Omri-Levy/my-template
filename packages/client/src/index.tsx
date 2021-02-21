import React, { StrictMode } from 'react';
import { render } from 'react-dom';
import reportWebVitals from './reportWebVitals';
import App from './components/App';
import Providers from './components/Providers';
import Layout from './components/Layout';

render(
  <StrictMode>
    <Providers>
      <Layout>
    <App />
      </Layout>
    </Providers>
  </StrictMode>,
  document.getElementById(`root`)
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
