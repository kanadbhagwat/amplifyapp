import React from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
	<h1>Hello from KB</h1>
        <p>
          This is a trial app by KB
        </p>
        <a
          className="App-link"
          href="https://www.indiannavy.nic.in/content/directorate-quality-assurance-naval"
          target="_blank"
          rel="noopener noreferrer"
        >
          Go to DQA(N) Website
        </a>
      </header>
    </div>
  );
}

export default App;
