import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.tsx';
import { StoreProvider } from './config/context.tsx';

ReactDOM.createRoot(document.getElementById('root')!).render(
    <StoreProvider>
    <App />
    </StoreProvider>,
)
