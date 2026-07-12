import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import "react-toastify/dist/ReactToastify.css";
import "./styles/global.css";
import App from './App.tsx'

const redirect = sessionStorage.redirect;

if (redirect) {
    sessionStorage.removeItem("redirect");

    window.history.replaceState(null, "", redirect);
}
createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
