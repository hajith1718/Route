import * as React from 'react';
import './App.css';
function Login(){
    return(
        <>
        <div className='Loginpage'>
        <h1 className='Loginpage1'>Login to your Account</h1>
        <p className='Alignx1'><b>Login using social networks</b></p>
        <h1 className='Alignx11'> </h1>
        <h1 className='Alignx12'> </h1>
        <h1 className='Alignx13'> </h1>
        <a href = "https://www.facebook.com">
        <button className='Alignx3'>Facebook</button>
        </a>


        <a href = "https://accounts.google.com/">
        <button className='Alignx4'>Google</button>
        </a>
        <a href = "https://www.linkedin.com/login">
        <button className='Alignx5'>Linkedin</button>
        </a>


        <h1 className='Alignx2'>OR</h1>
        <h1 className='Align1'>E-mail ID   :</h1>
        <input className='Align2' type="text" placeholder="Enter E-mail ID" />
        <h1 className='Align3'>Password   :</h1>
        <input className='Align4' type="text" placeholder="Enter password" />


        <button className='Align5'>Sign In</button>
        <h1 className='Align6'>Don't have an account?... Create one</h1>
        <button className='Align7'>Create Account</button>
        <img className='Logo' src="https://res.cloudinary.com/dhfisy92t/image/upload/v1670323957/Screenshot_20221125_215122_phlox8.png" height={80} width={80}></img>
        <p className='Logo'><b>ACE ADVENTURES</b></p>;
        <button className='Home'><img src="https://res.cloudinary.com/dhfisy92t/image/upload/v1670343844/home_kygvmx.png" height={70} width={70}></img></button>
        </div>
        </>
    )
    }
export default Login;