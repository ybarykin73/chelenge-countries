import React from 'react'
import { BrowserRouter, Routes, Route} from "react-router-dom";
import Header from '../header/Header'
import HomePage from '../page/HomePage';
import CountriePage from '../page/CountriePage';
import NotFoundPage from '../page/NotFoundPage'

import './style'

const App: React.FC = () => {
  return (
    <React.Fragment>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route index path='/' element={<HomePage />} />
          <Route path='/countries/:countrieName' element={<CountriePage />} />
          <Route path='*' element={<NotFoundPage />} />
        </Routes>
      </BrowserRouter>
    </React.Fragment>
  )
}

export default App