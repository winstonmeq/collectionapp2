import {createUser} from '../../../axios/user_request'
import { useState } from 'react';


const Add_user = () => {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');


    const addUserdb = async (e) => {

         e.preventDefault();
       
        const payload = {email,password}

        console.log('payload', payload)

        const result = await createUser(payload)
        
     
       console.log('result',result)

        
      }; 

    return (
        <div>

        <form onSubmit={addUserdb}>
        <label>Email</label>
            <input 
            type='text' 
            value={email}
            onChange={(e) => {setEmail(e.target.value)}}
            />
            <br />
        
        <label>Password</label>
            <input 
            type='text' 
            value={password}
            onChange={(e) => setPassword(e.target.value)}
   
            />
            <br />

        <button type="submit">Submit</button>

        </form>
        {/* <button type="submit" onClick={addUserdb}>Submit</button> */}


        </div>
    )
}


export default Add_user;
