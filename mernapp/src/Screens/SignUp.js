import React, { useState } from 'react'
import { Link } from 'react-router-dom'
export default function SignUp() {

    const [credentials, setcredentials] = useState({Name:"", email:"", password:"", Location:""})

    const handleSubmit=async(e)=>{
        e.preventDefault();
        console.log(JSON.stringify({Name:credentials.Name,email:credentials.email,password:credentials.password,Location:credentials.Location}))
        const response = await fetch("http://localhost:4000/api/createuser",{
            method:'POST',
            headers:{
                'Content-Type':'application/json'
            },

            body: JSON.stringify({Name:credentials.Name,email:credentials.email,password:credentials.password,Location:credentials.Location})
        });

        const json = await response.json();
        console.log(json);

        if(!json.success){
            alert("Enter valid credentials")
        }
    }

    const onChange=(event)=>{
        setcredentials({...credentials,[event.target.name]:event.target.value})
    }

    return (
        <div className='container'>
            <form onSubmit={handleSubmit}>
                <div class="mb-3">
                    <label htmlfor="Name" class="form-label">Name</label>
                    <input type="text" class="form-control" name='Name' value={credentials.Name} onChange={onChange} ></input>
                </div>
                <div class="mb-3">
                    <label htmlfor="exampleInputEmail1" class="form-label">Email address</label>
                    <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" name="email" value={credentials.email} onChange={onChange}></input>
                        <div id="emailHelp" class="form-text">We'll never share your email with anyone else.</div>
                </div>
                <div class="mb-3">
                    <label htmlfor="exampleInputPassword1" class="form-label">Password</label>
                    <input type="password" class="form-control" id="exampleInputPassword1" name="password" value={credentials.password} onChange={onChange}></input>
                </div>
                <div class="mb-3">
                    <label htmlfor="Location" class="form-label">Address</label>
                    <input type="text" class="form-control" name="Location" value={credentials.location} onChange={onChange}></input>
                </div>
                <button type='submit' className="m-3 btn btn-success">SignUp</button>
                <Link to='/Login' className="m-3 btn btn-danger">Already a User</Link> 
            </form>
        </div>
    )
}
