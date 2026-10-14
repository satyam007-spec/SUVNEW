import { createRoot, hydrateRoot } from 'react-dom/client';
import App from './App.jsx';
import './index.css';

const rootElement = document.getElementById('root');

if (rootElement && rootElement.hasChildNodes()) {
  hydrateRoot(rootElement, <App />);
} else if (rootElement) {
  createRoot(rootElement).render(<App />);
}
