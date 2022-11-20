import {LogInUser} from '../../../axios/login_request'
import { useState } from 'react';


const SignIn = () => {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');


    // const Logindb = async (e) => {

    //      e.preventDefault();
       
    //     const payload = {email,password}

    //     console.log('payload', payload)

    //     const result = await LogInUser(payload)
        
     
    //    console.log('result',result)

        
    //   }; 

    return (
<div className='d-flex align-items-center'>
<div className=' container h-100'>
<div className='row d-flex justify-content-center align-items-center h-100'>
<div className='col-12 col-md-9 col-lg-7 col-xl-6 '>
<div className="card" style={{borderRadius:"10px"}}>
            <div class="card-body p-5">
              <h2 class="text-uppercase text-center mb-5">Sign In</h2>
              <form >
        <label className='form-label'>Email</label>
            <input 
            type='text' 
            className='form-control form-control-md'
            value={email}
            onChange={(e) => {setEmail(e.target.value)}}
            />
            <br />
        
        <label className='form-label'>Password</label>
            <input 
            type='text' 
            className='form-control form-control-md'
            value={password}
            onChange={(e) => setPassword(e.target.value)}
   
            />
            <br />

         <div className='d-flex justify-content-center'>
         <button type="submit" className='btn btn-success btn-lg text-body'>Login</button>
         </div>

        </form>
</div>
</div>

</div>

</div>
</div>

        


        </div>
    )
}


export default SignIn;
