import React, { useState } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import './Login.css'
import { useNavigate } from 'react-router-dom';

const Login = () => {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const redirect = useNavigate();
    React.useEffect(() => {
        const validate_user = localStorage.getItem('v_username');
        if (validate_user) {
            redirect('/');
        }
    // eslint-disable-next-line react-hooks/exhaustive-deps
    },[])

    const insertValue = (e) => {
        e.preventDefault();
        localStorage.setItem('v_username', username);
        localStorage.setItem('v_password', password);
        const user = localStorage.getItem('v_username');
        if (user) {
            setUsername("");
            setPassword("");
            redirect('/products');
        }
    }
  return (
    <div className='wrapper'>
        <div className='content-wrapper'>
            <div className='container-fluid'>
                <form>
                    <div className='row center'>
                        <div className='col-sm-3'>
                            <h3 style={{textAlign: "center"}}><b style={{color: "red"}}>Login</b></h3>
                        </div>
                    </div>
                    <div className='row center'>
                        <div className='col-sm-3'>
                            <label>Username<span className='text-danger'>*</span></label><br/>
                            <input type='text' className='form-control' placeholder='Enter the username' value={username} 
                            onChange={ (e) => setUsername(e.target.value.trimStart()) } />
                        </div>
                    </div><br/>
                    <div className='row center'>
                        <div className='col-sm-3'>
                            <label>Password<span className='text-danger'>*</span></label><br/>
                            <input type='password' className='form-control' placeholder='Enter the password' value={password}
                            onChange={ (e) => setPassword(e.target.value.trimStart()) } />
                        </div>
                    </div><br/>
                    <div className='row center'>
                        <div className='col-sm-3'>
                            <button className='btn btn-primary btn-sm' onClick={insertValue}>Submit</button>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    </div>
  )
}

export default Login
