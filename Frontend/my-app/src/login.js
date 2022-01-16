import React from 'react';
import {Link} from 'react-router-dom'
import './login.css'

function Login(){
return(
    <>
    <h1>Welcome To Web World</h1>
    <h1>Login To Enter </h1>
    <form>
        <input type="text" placeholder='Enter Username'/>
        <br/>
        <input type="password" placeholder='Enter Password'/>
        <br/>
        <br></br>
        <button className='button2'>Log In</button>
        <Link className='button1' to='/register'>Register</Link>
    </form>
    </>

)}

export default Login ;