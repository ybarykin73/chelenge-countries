import React from 'react'
import { BrowserRouter, Routes, Route} from "react-router-dom";
import Header from '../header/Header'
import HomePage from '../page/HomePage';
import CountriePage from '../page/countrie-page/CountriePage';
import NotFoundPage from '../page/NotFoundPage'

import './style'

const App: React.FC = () => {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route index path='/' element={<HomePage />} />
        <Route path='/countries/:countrieName' element={<CountriePage />} />
        <Route path='*' element={<NotFoundPage />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App