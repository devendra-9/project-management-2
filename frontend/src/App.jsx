import {Route, Routes} from 'react-router-dom'
import Loginform from './pages/login'
import Auth from './authentication/auth'
import Home from './pages/home'
import Project from './pages/project'

function App() {

  return (
    <div>
      <Routes>
        <Route path ='/' element={< Loginform />}/>
        <Route element={<  Auth />}>
          <Route path='/home' element={< Home />}/>
          <Route path='/project:id' element={< Project />}/>
        </Route>
      </Routes>
    </div>
  )
}

export default App
