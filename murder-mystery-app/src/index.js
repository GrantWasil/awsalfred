import React from 'react';
import * as ReactDOMClient from 'react-dom/client';
import { ChakraProvider } from "@chakra-ui/react";
import { Amplify } from 'aws-amplify';
import config from './aws-exports';
import App from './App';

Amplify.configure(config);

const container = document.getElementById('root');

const root = ReactDOMClient.createRoot(container);

root.render(
  <React.StrictMode>
    <ChakraProvider>
      <App />
    </ChakraProvider>
  </React.StrictMode>,
);
