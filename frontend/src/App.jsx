import {BrowserRouter as Router, Routes,Route} from 'react-router-dom'
import CreatePosts from './Pages/createPosts'
import './App.css'
import Feed from './Pages/Feed'
import Navbar from './Pages/Navbar'

const App = () => {
  return (
    <Router >
     <Navbar/>
      <Routes>
        <Route path='/create-post' element={<CreatePosts/>}></Route>
        <Route path='/' element={<Feed/>}/>
        <Route path='/feed' element={<Feed/>}/>
      </Routes>
    </Router>
  )
}

export default App
