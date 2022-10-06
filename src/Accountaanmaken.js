import React, { useState } from "react";
import Appbar from './Components/Appbar'
import CreateUser from './Components/CreateUser'

const Accountaanmaken = () => {
    return(
        <div>
            <div>
                <Appbar />
            </div>
            <div>
                <CreateUser />
            </div>   
        </div>
    )
}
export default Accountaanmaken;