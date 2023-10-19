import React from 'react'
import Header from '../header/Header'
import Main from '../main/Main'
import './style'

const App: React.FC = () => {
  return (
    <React.Fragment>
      <Header />
      <Main />
    </React.Fragment>
  )
}

export default App