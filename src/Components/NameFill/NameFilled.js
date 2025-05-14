//import {Link} from 'react-router-dom';
import { useState } from "react";
import './NameFilled.css';
import {useNavigate} from "react-router-dom";
import {MdArrowForwardIos, MdArrowBackIos} from 'react-icons/md';
const NameFilled = () =>{
    const navigate = useNavigate();
    const [name, setName] = useState('');
    //const [nameCheck, setNameCheck] = useState(false)
    const checkUser = async data =>{
        await fetch('http://localhost:8800/users/userFind', {
            method: 'POST',
            body: JSON.stringify({
                name : name
            }),
            headers:{
            'Content-type': "application/json; charset=UTF-8",
        }
    })
    .then((res)=> res.json())
    .then((data)=>{
        console.log(data.message);
        if(data.message === "User not found"){
            navigate('/SignIn', {state: name});
        }else{
            navigate('/reloadData', {state: name});
        }
    })
    .catch(err=>{
        console.log(err);
    })
    }
    const handleSubmitName = (e)=>{
        e.preventDefault();
        checkUser(name);
    }
    return(
        <div className="Container">
            <button href="/"><MdArrowBackIos/></button>
        <div className='containerBox'>
            <form onSubmit={handleSubmitName}>
                <label for="full-name" style={{fontSize: '18px'}} >Your full name:
                    <input id="full-name" 
                    name="full-name" 
                    type="text" 
                    required 
                    onChange={(e)=>setName(e.target.value)}/>
                </label>
                <button  type="submit"><MdArrowForwardIos/></button>             
            </form>
        </div>
            
        </div>
    )
}
export default NameFilled;
// onClick={alreadyLogin === 'false'? <Link to='/SignIn'/> : setAlreadyLogin(true)}