import React from 'react'
import { HashRouter, Route, Routes } from 'react-router'
import PageList from './pages/PageList'
import PageHero from './pages/PageHero'

const App = () => {
  return (
    <HashRouter>
      <div className='bg-white min-h-screen font-patsy'>
        <div className='w-full text-center py-3 bg-gray'>
          <h1 className='font-bold text-5xl text-white'>RICK AND MORTY API</h1>
        </div>
        <Routes>
          <Route path="/" element={<PageList/>}/>
          <Route path="/character/:id" element={<PageHero/>}/>
        </Routes>
      </div>
    </HashRouter>
  )
}

export default App
