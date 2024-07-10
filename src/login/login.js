import { useState } from "react"
import { Link } from "react-router-dom";
import { useNavigate } from 'react-router-dom';

export default function Login() {
   const [logdata, setlogdata] = useState(0);
   const [error, seterror] = useState();
   const navigate = useNavigate();
   
   const setformdata = (event) =>{
     setlogdata({...logdata, [event.target.name]: event.target.value})
   }
   const submitform = (e) =>{
        e.preventDefault();
        
        fetch('http://localhost:5000/loginuser', {
            method:'POST',
            headers: {
                "Content-type": "application/json; charset=UTF-8"
            },
            body: JSON.stringify(logdata)
        })
        .then(res => {
            if(res.status !== 200){
                return res.json()
            }
        })
        .then(result => {
            if(result !== undefined){
                seterror(result.message)
            }else{
                localStorage.setItem('login', logdata.email);
                navigate('/posts')
            }
        })
   }

    return (
        <div className='container login'>
            <div className="col-12">
                <h2>Login</h2>
                <hr/>
                {error && 
                 <div class="alert alert-danger"  role="alert" >
                  {error}
                 </div> 
                }
                
                <form onSubmit={submitform}>
                    <div className="form-group">
                        <label >Email:</label>
                        <input type="email" className="form-control email" placeholder="Enter email" name="email" onChange={setformdata}/>
                    </div>
                    <div className="form-group">
                        <label >Password:</label>
                        <input type="password" className="form-control password" placeholder="Enter password" name="password" onChange={setformdata}/>
                    </div>
                    <button type="Login" className="btn btn-success">login</button>
                    <div className="form-group">
                     <div className="float-right"> If not registered <Link to='/register' >click here..</Link> </div>
                    </div>  
                </form>
            </div>
        </div>
    )
}