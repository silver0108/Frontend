import { QueryClient, QueryClientProvider } from "react-query";

import App from './App.tsx'
import { CookiesProvider } from "react-cookie";
import React from 'react'
import ReactDOM from 'react-dom/client'

const queryClient = new QueryClient();

ReactDOM.createRoot(document.getElementById('root')!).render(
  <CookiesProvider>
    <QueryClientProvider client={queryClient}>
      <App />
    </QueryClientProvider>
  </CookiesProvider>,
)
