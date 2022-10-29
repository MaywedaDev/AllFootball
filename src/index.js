import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { HashRouter } from 'react-router-dom';


const root = ReactDOM.createRoot(document.getElementById('root'));

/*const firebaseConfig = {
  apiKey: "AIzaSyBhhsjJ22kSYgAQkuk9YgmSjWp6EP_jHqM",
  authDomain: "allfootball-md.firebaseapp.com",
  projectId: "allfootball-md",
  storageBucket: "allfootball-md.appspot.com",
  messagingSenderId: "886608966936",
  appId: "1:886608966936:web:3a8ec7ab0ad4941f3c9a6d"
};*/

root.render(
    <React.StrictMode>
      <HashRouter>
        <App />
      </HashRouter>
  </React.StrictMode>
  );

