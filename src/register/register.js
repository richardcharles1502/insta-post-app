import { useState } from "react"
import { Link, useNavigate } from "react-router-dom";

export default function Register() {
   const [regdata, setregdata] = useState({});
   const [error, seterror] = useState();
   const navigate = useNavigate();
   
   const setformdata = (event) =>{
    setregdata({...regdata, [event.target.name]: event.target.value})
   }
   const submitform = (e) =>{
        e.preventDefault();
        fetch(process.env.REACT_APP_SERVER_URL+'/registeruser', {
             method: 'POST',
             headers: { 
                "Content-type": "application/json; charset=UTF-8"
              },
             body: JSON.stringify(regdata) 
        })
        .then(res => {
            if(res.status !== 200){
                return res.json()
            }
        })
        .then((result) => {
            if(result !== undefined){
                seterror(result.message)
            }else{
                navigate('/login')
            }
        })
   }

    return (
        <div className='container register'>
            <div className="col-12">
                <h2>Register here:</h2>
                <hr/>
                {error && 
                 <div class="alert alert-danger"  role="alert" >
                  {error}
                 </div> 
                }
                <form onSubmit={submitform}>
                    <div className="form-group">
                            <label>Username:</label>
                            <input type="text" className="form-control username" placeholder="Enter username" name="username" onChange={setformdata}/>
                        </div>
                    <div className="form-group">
                        <label >Email:</label>
                        <input type="email" className="form-control email" placeholder="Enter email" name="email" onChange={setformdata}/>
                    </div>
                    <div className="form-group">
                        <label >Password:</label>
                        <input type="password" className="form-control password" placeholder="Enter password" name="password" onChange={setformdata}/>
                    </div>
                    <button type="submit" className="btn btn-primary">Submit</button>
                    <div className="float-right"> To login <Link to='/login' >click here..</Link> </div>
                </form>
            </div>
        </div>
    )
}