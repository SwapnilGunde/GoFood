import React,{useState} from 'react'
import { Link,useNavigate } from 'react-router-dom';

export default function Login() {

  const [credentials, setcredentials] = useState({email:"", password:""})
    let navigate = useNavigate();
    const handleSubmit=async(e)=>{
        e.preventDefault();
        console.log(JSON.stringify({email:credentials.email,password:credentials.password}))
        const response = await fetch("http://localhost:4000/api/loginuser",{
            method:'POST',
            headers:{
                'Content-Type':'application/json'
            },

            body: JSON.stringify({email:credentials.email,password:credentials.password})
        });

        const json = await response.json();
        console.log(json);

        if(!json.success){
            alert("Enter valid credentials")
        }
        if(json.success){
          localStorage.setItem("userEmail",credentials.email);
          localStorage.setItem("authToken",json.authToken);
          console.log(localStorage.getItem("authToken"))
          navigate("/");
          
      }
    }

    const onChange=(event)=>{
        setcredentials({...credentials,[event.target.name]:event.target.value})
    }


  return (
    <div>
      <div className='container'>
            <form onSubmit={handleSubmit}>
                
                <div class="mb-3">
                    <label htmlfor="exampleInputEmail1" class="form-label">Email address</label>
                    <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" name="email" value={credentials.email} onChange={onChange}></input>
                        <div id="emailHelp" class="form-text">We'll never share your email with anyone else.</div>
                </div>
                <div class="mb-3">
                    <label htmlfor="exampleInputPassword1" class="form-label">Password</label>
                    <input type="password" class="form-control" id="exampleInputPassword1" name="password" value={credentials.password} onChange={onChange}></input>
                </div>
                
                <button  type="submit" className="m-3 btn btn-success">Login</button>
                <Link to='/SignUp' className="m-3 btn btn-danger">I'm a new User</Link> 
            </form>
        </div>
    </div>
  )
}
