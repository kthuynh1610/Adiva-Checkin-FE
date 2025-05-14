import logo from '../../assets/logo.png';
import { useState } from 'react';
import './SignIn.css'
import {useLocation} from 'react-router-dom';
const SignIn = () =>{
    //const [name, setName] = useState('');
    const {state} = useLocation();
    const name = state;
    const [email, setEmail] = useState('');
    const [phoneNumber, setNumber] = useState('');
    const [doin, setDoin] = useState('');
    const [birthday, setBirthday] = useState('');
    const [status, setStatus] = useState(false);
    const addUsers = async () =>{
        await fetch('http://localhost:8800/users/createUser',{
            method: 'post',
            body: JSON.stringify({
                name: name,
                email: email,
                phoneNumber : phoneNumber,
                freetext : doin,
                birthday: birthday,
            }),
            headers:{
                'Content-type': "application/json; charset=UTF-8",
            }
        })
        .then((res)=>res.json())
        .then((data)=>{
            console.log(data)
        })
        // .then(()=>{setStatus(true)})
        .catch(err=>{
            console.log("Error" + err)
        })
     }
    const handleSubmit = (e) =>{
        e.preventDefault();
        addUsers( name, email, phoneNumber, doin, birthday);
    }
    const LoadingScreen = () => {
        return(
            <div class="wrapper"> 
                <svg class="checkmark" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 52 52"> 
                <circle class="checkmark__circle" cx="26" cy="26" r="25" fill="none"/> 
                <path class="checkmark__check" fill="none" d="M14.1 27.2l7.1 7.2 16.7-16.8"/>  
                </svg>
                <h1>Thank you for checked in</h1>
            </div>
        )
    }
    const signIn = () =>{
        return(
            <div className='containerSignIn'>
            <img src={logo} alt="logo" style={{width: '400px'}}/>
            <div className='form'>
                <form onSubmit={handleSubmit}>
                     {/* {<label for="Name"> Your Full Name : <br/>
                      <input 
                      id="full-name" 
                      name="full-name" 
                      type="text" 
                      required
                      onChange={(e)=>setName(e.target.value)}/>
                    </label> */}
                    <label for="email"> Email Address : <br/>
                      <input 
                      id="email-address" 
                      name="email-address" 
                      type="text" 
                      required
                      onChange={(e)=>setEmail(e.target.value)}/>
                    </label>
                    <label for="number"> Phone Number :<br/> 
                        <input
                         id="phone-number" 
                         name="phone-number" 
                         type="number" 
                         required
                         onChange={(e)=>setNumber(e.target.value)}/>
                    </label>
                    <label for="text"> What are you doing today : <br/> 
                        <input 
                        id="doing" 
                        name="doing" 
                        type="text"
                        onChange={(e)=>setDoin(e.target.value)}/> 
                    </label>
                    <label for="birthday"> Your birthday : 
                        <br/> <input 
                        id="birthday" 
                        name="birthday" 
                        type="date"
                        onChange={(e)=>setBirthday(e.target.value)}/>
                    </label>
                    <button className='buttonButton' type='submit'>Next</button>
                </form>
            </div>
        </div>
        )
    }
    return(
        <div>
        {status ? LoadingScreen() : signIn() }
        </div>
    )
}

export default SignIn;