import React from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Projeto disponível em
        </p>
        <a
          className="App-link"
          href="https://github.com/marco-souza/react-native-vs-pwa-demo/"
          target="_blank"
          rel="noopener noreferrer"
        >
          github.com/marco-souza/react-native-vs-pwa-demo/
        </a>
      </header>
    </div>
  );
}

export default App;
