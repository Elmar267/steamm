import { createRoot } from 'react-dom/client'
import './style.css'
import { RouterProvider } from 'react-router'
import router from './provider/router'

createRoot(document.getElementById('root')).render(
    <RouterProvider router={router} />
)
