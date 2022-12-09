import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import UserData from './Context/UserData';
import reducer, { initialState } from './Reducers/Reducer';
import { BrowserRouter } from 'react-router-dom';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <UserData initialState={initialState} reducer={reducer}>
        <App />
      </UserData>
    </BrowserRouter>
  </React.StrictMode>
);