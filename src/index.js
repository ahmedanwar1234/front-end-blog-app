import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
import { Providers } from './store/provider';
import { QueryClientProvider,QueryClient } from '@tanstack/react-query';


const queryClient=new QueryClient()
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
<Providers>

  <BrowserRouter>
  <QueryClientProvider client={queryClient}>

    <App />
  </QueryClientProvider>
  </BrowserRouter>
</Providers>
);

