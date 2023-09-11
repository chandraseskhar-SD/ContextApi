import React, { Children } from "react";
import { useState, useContext, createContext } from "react";

const myContext = createContext();

export const MyProvider = ({children})=>{
    const [userData, setUserData] = useState([null]);

    const updateUser = (data)=>{
        setUserData(data)
        console.log(userData)
        console.log("from context")
    }
    return(
        <myContext.Provider value={{setUserData,updateUser,userData}}>
            {children}

        </myContext.Provider>
    )
}


export  const useUser = ()=>{
    return useContext(myContext);

}
