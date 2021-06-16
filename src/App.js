import React from 'react';
import logo from './logo1.jpg';
import './App.css';
import { withAuthenticator, AmplifySignOut } from '@aws-amplify/ui-react'

function App() {
  return (
    <div className="App">
      <header className="App-header">
	<img src={logo} alt="logo1" />
        <h1>QAint - QA Over Internet</h1>
        <p>
          A trial Web App by KB
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
      <AmplifySignOut />
    </div>
  );
}

export default withAuthenticator(App);
