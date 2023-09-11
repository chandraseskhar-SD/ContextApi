import React, { useState } from "react";
import { useUser } from "./myContext";

const OtherComponent =()=>{
    const {userData} = useUser();
    const [data, setData] = useState([userData])

    console.log(data)
    return(
        <div>
            <p>from OtherComponent</p>
            {
                data.map((data, index)=>{
                    return(
                        <div key={index}>
                            <p>{data.username}</p>
                             <p>{data.pnr}</p>
                        </div>
                        
                    )
                })
            }
        </div>
    )
}
export default OtherComponent;