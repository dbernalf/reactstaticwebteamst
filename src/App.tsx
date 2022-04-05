import * as React from 'react'
import * as msTeams from '@microsoft/teams-js';
import logo from './logo.svg';
import './App.css';
import {Home} from './pages/home';

function App() {
  msTeams.initialize();
  return (
    <div className="App">
      <body>
        <Home />
      </body>
    </div>
  );
}

export default App;
