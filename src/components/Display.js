import React from "react";

const Display = (props) =>{

    const {userList} = props;

    return(
        <div>
            <h1>Form Details</h1>
            {
                userList.map((user, index)=>(
                    
                    <div key ={index}>
                        <p>First Name: {user.firstName}</p>
                        <p>Last Name: {user.lastName}</p>
                        <p>Password: {user.password}</p>
                        <p>Confirmed Password: {user.confirmPassword}</p>
                    </div>
                ))

            }
        </div>
    )
}

export default Display;