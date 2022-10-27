import React from 'react';
import ReactDOM from 'react-dom/client';
import { ChakraProvider } from '@chakra-ui/react';
import { Provider } from 'react-redux';
// Styles
import './index.scss';
import './sass/_nullstyle.scss';
import { theme } from './theme';
// Components
import App from './App';
//Store
import { store } from './redux/reduxStore';
const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement,
);
root.render(
  <ChakraProvider theme={theme}>
    <Provider store={store}>
      <App />
    </Provider>
  </ChakraProvider>,
);
