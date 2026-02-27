import { Routes,Route } from 'react-router-dom'
import CreatePost from './pages/CreatePost'
import Posts from './pages/Posts'
function App() {
  return (
    <Routes>
      <Route path='/' element={<CreatePost/>} />
      <Route path='posts' element={<Posts />}/>
    </Routes>
  )
}

export default App