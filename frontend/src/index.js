import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
<<<<<<< HEAD
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'; 
import App from './App';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <React.StrictMode>
      <App />
    </React.StrictMode>,
    document.getElementById('root')
  );
=======
import 'bootstrap/dist/css/bootstrap.min.css'; 
import App from './App';
import { BrowserRouter } from 'react-router-dom';  // <-- este import

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>  {/* <-- aquí */}
      <App />
    </BrowserRouter>
  </React.StrictMode>
);
>>>>>>> 4815882e3199dc3b47c96d9149d5af4c0b744d91
