import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import FormComponent from './FormComponent'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <FormComponent ></FormComponent>
  </StrictMode>,
)
