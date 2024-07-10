
import { useNavigate } from 'react-router-dom';
import './navbar.css'

export default function Navbar(){
     const navigate = useNavigate();

     const logout = () => {
        localStorage.removeItem('login');
        navigate('/login')
     }
     return(
        <div>
            <ul>
            <li style= {{"float":"right"}}><span onClick={logout} >Logout</span></li>
            </ul>
        </div>
     )
}