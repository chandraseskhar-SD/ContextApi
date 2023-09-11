import React, { useEffect } from "react";
import { useState } from "react";
import { useUser } from "./myContext";
import OtherComponent from "./OtherComponent";
import { useNavigate } from "react-router-dom";


const LoginPage = ()=>{
    const [data, setData] = useState([{username:"", pnr:""}])
    const [update, setUpdate] = useState()

    const {updateUser,userData} = useUser();
    const navigate = useNavigate();
    console.log(userData)


    const handleChange =(e)=>{
        const {name, value} = e.target;
        setData({...data,
            [name]: value
        })

    }
    updateUser(data)
    const handleSubmit = ()=>{
        setData(data);
        console.log(data)
        setUpdate(data) 
    

    }
    useEffect(()=>{
        if(update){

                navigate('./OtherComponent')

        }
       
    },[update])
    return(
        <div>
            <center>
            <div>
            <input type= "text" name = "username" value={data.username} onChange={handleChange}/>
            </div>
             
             <div>
             <input type ="text" name = "pnr" value={data.pnr} onChange={handleChange}/>
             </div>
             <button type="button" onClick={handleSubmit}>submit</button>
             </center>
            
        </div>
    )
}
export default LoginPage;