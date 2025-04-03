import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <main className="min-h-screen bg-gradient-to-br from-orange-500 via-amber-400 to-yellow-300">
        <div className="mx-auto max-w-4xl">
          <App />
        </div>
      </main>
  </StrictMode>,
)
