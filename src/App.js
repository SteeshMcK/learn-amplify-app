import React from 'react'
import Question from './components/Question/Question'
import { withAuthenticator, AmplifySignOut } from '@aws-amplify/ui-react'

function App() {
  const pStyles = {
    fontSize: '3em',
    color: 'red'
  }

  return (
    <div className="App">
      <header className="App-header">
        <Question />
        <p style={ pStyles }>We now have Auth!</p>
      </header>
      <AmplifySignOut />
    </div>
  );
}

export default withAuthenticator(App)
