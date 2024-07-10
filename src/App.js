import {HashRouter, Route, Routes} from 'react-router-dom'
import Register from './register/register';
import Login from './login/login';
import Navbar from './navbar/navbar';
import Authenticate from './authentication/auth';
import Uploads from './uploads/uploads';

import './App.css';

function App() {
  return (
    <div className="App">
      <HashRouter>
         <Navbar></Navbar>
        <Routes>
          <Route element={<Login/>} path='/'/>
          <Route element={<Login/>} path='/login'/>
          <Route element={<Register/>} path='/register'/>
          <Route element={<Authenticate><Uploads/></Authenticate>} path='/posts'/>
        </Routes>
      </HashRouter>
       
    </div>
  );
}

export default App;
