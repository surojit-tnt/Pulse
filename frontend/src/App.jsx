import React from 'react'
import {BrowserRouter as Router, Routes,Route} from 'react-router-dom'
import CreatePosts from './Pages/createPosts'
import Feed from './Pages/Feed'

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path='/create-post' element={<CreatePosts/>}></Route>
        <Route path='/feed' element={<Feed/>}/>
      </Routes>
    </Router>
  )
}

export default App
