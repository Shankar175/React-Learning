import React, { useState } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import './Signup.css'

const Signup = () => {
    const [username, setUsername] = useState("");
    const [mailid, setMailid] = useState("");
    const [password, setPassword] = useState("");

    const insertData = (e) => {
        e.preventDefault();
    } 
  return (
    <div className='wrapper'>
        <div className='content-wrapper'>
            <div className='container-fluid'>
                <form>
                    <div className='row center'>
                        <div className='col-sm-3'>
                            <h3 style={{textAlign: "center"}}><b style={{color: "red"}}>Signup</b></h3>
                        </div>
                    </div>
                    <div className='row center'>
                        <div className='col-sm-3'>
                            <label>Mailid<span className='text-danger'>*</span></label>
                            <input type='email' className='form-control' placeholder='Enter the mailid' 
                            value={ mailid } onChange = { (e) => setMailid(e.target.value.trimStart()) } />
                        </div>
                    </div><br/>
                    <div className='row center'>
                        <div className='col-sm-3'>
                            <label>Username<span className='text-danger'>*</span></label>
                            <input type='text' className='form-control' placeholder='Enter the username' 
                            value={ username } onChange = { (e) => setUsername(e.target.value.trimStart()) } />
                        </div>
                    </div><br/>
                    <div className='row center'>
                        <div className='col-sm-3'>
                            <label>Password<span className='text-danger'>*</span></label>
                            <input type='text' className='form-control' placeholder='Enter the password' 
                            value={ password } onChange = { (e) => setPassword(e.target.value.trimStart()) } />
                        </div>
                    </div><br/>
                    <div className='row center'>
                        <div className='col-sm-3'>
                            <button className='btn btn-primary btn-sm' onClick={ insertData }>Submit</button>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    </div>
  )
}

export default Signup
