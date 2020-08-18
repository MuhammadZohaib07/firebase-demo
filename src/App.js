import React from 'react';
import './App.css';
import { initNotification } from './services/firebaseService';

function App() {
  return (
    <div className="App">
      <h1>HELLO</h1>
      <button onClick={ initNotification }> Configure Notifications </button>
    </div>
  );
}

export default App;
