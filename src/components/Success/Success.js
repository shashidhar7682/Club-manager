import React from "react";
import logo1 from '../Images/logo1.svg'
import './Success.css'
function Success(){
    return(
        <div className="m-5">
            <img className="container w-25"src={logo1} width="100px"/>
            <h3 className="text-center mt-5 display-4 fw-bold">Congratulations!!</h3>
            <h5 className="text-center m-3"> You are successfully registered</h5>
        </div>
    )
}
export default Success;