import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { Toaster } from 'react-hot-toast';
import { AuthProvider } from './contexts/AuthContext.jsx';
import './index.css'
import App from './App.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <AuthProvider>
      <App />
      <Toaster 
        position="top-right"
        toastOptions={{
          // Define default options
          className: '',
          duration: 4000,
          removeDelay: 1000,
          style: {
            padding: '15px 30px'
          },
      
          // Default options for specific types
          success: {
            duration: 4000,
            iconTheme: {
              primary: 'green',
              secondary: 'white',
            },
          },
        }}
      />
    </AuthProvider>
  </StrictMode>
)
