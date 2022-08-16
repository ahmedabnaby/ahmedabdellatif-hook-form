import React, {useState} from 'react';

const Form = (props) =>{

    const {userList, setUserList} = props;

    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");

    const submitHandler = (e) =>{
        e.preventDefault();

        setUserList([...userList, {
            firstName: firstName,
            lastName: lastName,
            password: password,
            confirmPassword: confirmPassword
        }])

        setFirstName("");
        setLastName("");
        setPassword("");
        setConfirmPassword("");
    }


    return(
        <div>
            <form onSubmit={submitHandler}>
                <label>First Name:</label>
                <input onChange={(e) =>{
                    setFirstName(e.target.value);
                }}
                value = {firstName}
                name="name"
                type = "text"
                />
                <p>
                <label>Last Name:</label>
                <input onChange={(e) =>{
                    setLastName(e.target.value);
                }}
                value = {lastName}
                name="lastName"
                type = "text"
                />
                </p>
                <p>
                <label>Password:</label>
                <input onChange={(e) =>{
                    setPassword(e.target.value);
                }}
                value = {password}
                name="password"
                type = "text"
                />
                </p>
                <p>
                <label>Confirm Password:</label>
                <input onChange={(e) =>{
                    setConfirmPassword(e.target.value);
                }}
                value = {confirmPassword}
                name="confirmPassword"
                type = "text"
                />
                </p>

                <input className="submitButton" type="submit" value="Add User"/>
            </form>

        </div>
    )
}

export default Form;