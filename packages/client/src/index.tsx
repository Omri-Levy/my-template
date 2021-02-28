import { StrictMode } from 'react';
import { render } from 'react-dom';
import { ColorModeScript, CSSReset } from '@chakra-ui/react';
import { BrowserRouter as Router } from 'react-router-dom';
import reportWebVitals from './reportWebVitals';
import App from './components/App';
import Providers from './components/globals/Providers';
import Layout from './components/globals/Layout';
import RedirectHandler from './components/globals/RedirectHandler';
import theme from './components/globals/Providers/theme';

render(
  <StrictMode>
    <Providers>
      <Router>
        <RedirectHandler />
        <CSSReset />
        <ColorModeScript initialColorMode={theme.config.initialColorMode} />
        <Layout>
          <App />
        </Layout>
      </Router>
    </Providers>
  </StrictMode>,
  document.getElementById(`root`)
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
