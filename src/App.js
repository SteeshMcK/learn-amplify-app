import React from 'react'
import GenericGreeting from './components/Generic-greeting/GenericGreeting'
import Question from './components/Question/Question'
import './App.css'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <GenericGreeting />
        <Question />
      </header>
    </div>
  );
}

export default App;
