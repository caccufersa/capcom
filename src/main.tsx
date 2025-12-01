import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { RouterProvider } from 'react-router-dom'
import { router } from './route'
import 'swiper/swiper-bundle.css'
import ReactGA from 'react-ga4'; // Importe a biblioteca
// Use Vite environment variable to store the measurement id securely
const MEASUREMENT_ID = import.meta.env.VITE_GA_MEASUREMENT_ID ?? '';
if (MEASUREMENT_ID) {
  ReactGA.initialize(MEASUREMENT_ID);
}

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
