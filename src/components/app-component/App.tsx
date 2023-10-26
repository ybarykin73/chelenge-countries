import React from 'react'
import { BrowserRouter, Routes, Route} from "react-router-dom";
import Header from '../header/Header'
import Main from '../main/Main'
import CountriePage from '../page/CountriePage';
import NotFoundPage from '../page/NotFoundPage'

import './style'

const App: React.FC = () => {
  return (
    <React.Fragment>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path='/' element={<Main />} />
          <Route path='/countries/:countrieName' element={<CountriePage />} />
          <Route path='*' element={<NotFoundPage />} />
        </Routes>
      </BrowserRouter>
    </React.Fragment>
  )
}

export default App