import { Navigate } from "react-router-dom"

export default function Authenticate({children}){
     let jwt = localStorage.getItem('login');
     return jwt ? children : <Navigate to='/login'/>
}