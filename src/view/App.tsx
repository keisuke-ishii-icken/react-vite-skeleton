import React from 'react'
import { BrowserRouter, Link, Route, Routes } from 'react-router-dom'

import Dashboard from '@/view/Dashboard'
import Setting from '@/view/Setting'
import '@/view/App.css'

function App() {
  return (
    <div className="app">
      <BrowserRouter>
        <div className="menu">
          <div>
            <Link to={'dashboard'}>dashboard</Link>
          </div>
          <div>
            <Link to={'setting'}>setting</Link>
          </div>
        </div>
        <div className="content">

          <Routes>
            <Route path="/" element={<Dashboard />} />
            <Route path="dashboard/" element={<Dashboard />} />
            <Route path="setting/" element={<Setting />} />
            <Route
              path="*"
              element={
                <main style={{ padding: '1rem' }}>
                  <p>There is nothing here!</p>
                </main>
              }
            />
          </Routes>
        </div>

      </BrowserRouter>

    </div>
  )
}

export default App
