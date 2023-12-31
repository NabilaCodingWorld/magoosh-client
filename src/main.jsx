import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'

import {
  RouterProvider,
} from "react-router-dom";
import { router } from './Route/Route.jsx';
import { HelmetProvider } from 'react-helmet-async';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <div style={{fontFamily:"roboto"}}>
      <HelmetProvider> <RouterProvider router={router} /></HelmetProvider>
    </div>
  </React.StrictMode>,
)
