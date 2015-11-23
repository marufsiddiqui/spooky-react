import React from 'react'
import ReactDOM from 'react-dom'

class App extends React.Component {
  render() {
    return (
      <main>
        You have been spooked
      </main>
    )
  }
}

ReactDOM.render(<App />, document.getElementById('app'))
