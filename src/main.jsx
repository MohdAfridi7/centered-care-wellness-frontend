import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter } from "react-router-dom"
import { Toaster } from "react-hot-toast"

import App from './App.jsx'
import './index.css'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <App />

      {/* 🔥 GLOBAL TOASTER */}
      <Toaster
        position="top-right"
        reverseOrder={false}
        toastOptions={{
          duration: 3000,
          style: {
            background: "#1f1b4b",
            color: "#fff",
            borderRadius: "10px",
            padding: "12px 16px",
          },
          success: {
            iconTheme: {
              primary: "#facc15",
              secondary: "#000",
            },
          },
        }}
      />

    </BrowserRouter>
  </StrictMode>
)