import React from 'react';
import {Link} from 'react-router-dom';
import './register.css'

function Register (){
return(
    <>
    <h1>Register To Enter Web World</h1>
    <form>
        <input type="text" placeholder='Enter Username'/>
        <br/>
        <input type="password" placeholder='Enter Password'/>
        <br/>
        <br></br>
        <Link className='button' to='/'>Register</Link>
    </form>
    </>
)}

export default Register;