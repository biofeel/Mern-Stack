import React, { useState } from 'react';


const UserForm = (props) => {
    const [firstname, setFirstname] = useState("");
    const [lastname, setLastname] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmpassword, setConfirmPassword] = useState("");
    const [hasBeenSubmitted, setHasBeenSubmitted] = useState(false);
    const [firstnameError, setFirstnameError] = useState("");
    const [lastnameError, setLastnameError] = useState("");
    const [emailError, setEmailError] = useState("");
    const [passwordError, setPasswordError] = useState("");
    const [confirmPasswordError, setConfirmPasswordError] = useState("");

    const createUser = (e) => {
        e.preventDefault();
        const newUser = { firstname, lastname, email, password, confirmpassword };
        console.log("Welcome", newUser);
        setHasBeenSubmitted(true);
    };

    const handleFirstname = (e) => {
        setFirstname(e.target.value);
        if (e.target.value.length < 1) {
            setFirstnameError("Firstname is required!");
        } else if (e.target.value.length < 2) {
            setFirstnameError("Firstname must be 2 characters or longer!");
        } else { setFirstnameError("") }

    };

    const handleLastname = (e) => {
        setLastname(e.target.value);
        if (e.target.value.length < 1) {
            setLastnameError("Lastname is required!");
        } else if (e.target.value.length < 2) {
            setLastnameError("Lastname must be 2 characters or longer!");
        } else { setLastnameError("") }
    };

    const handleEmail = (e) => {
        setEmail(e.target.value);
        if (e.target.value.length < 1) {
            setEmailError("Email is required!");
        } else if (e.target.value.length < 5) {
            setEmailError("Email must be 5 characters or longer!");
        } else { setEmailError("") }
    };

    const handlePassword = (e) => {
        setPassword(e.target.value);
        if (e.target.value.length < 1) {
            setPasswordError("Password is required!");
        } else if (e.target.value.length < 8) {
            setPasswordError("Password must be 8 characters or longer!");
        } else { setPasswordError("") }
    };

    const handleConfirmPassword = (e) => {
        setConfirmPassword(e.target.value);
        if (e.target.value.length < 1) {
            setConfirmPasswordError("Confirm Password is required!");
        } else if (e.target.value != password ) {
            setConfirmPasswordError("Password must Match");
        } else { setConfirmPasswordError("") }
    };

    return (
        <form onSubmit={createUser}>
            {
                hasBeenSubmitted ?
                    <h3>Thank you for submitting the form!</h3> :
                    <h3>Welcome, please submit the form.</h3>
            }
            <div>
                <label>First Name: </label>
                <input type="text" onChange={handleFirstname} />
                {
                    firstnameError ?
                        <p style={{ color: 'red' }}>{firstnameError}</p> :
                        ''
                }
            </div>
            <div>
                <label>Last Name: </label>
                <input type="text" onChange={handleLastname} />
                {
                    lastnameError ?
                        <p style={{ color: 'red' }}>{lastnameError}</p> :
                        ''
                }
            </div>
            <div>
                <label>Email Address: </label>
                <input type="text" onChange={handleEmail} />
            </div>
            {
                emailError ?
                    <p style={{ color: 'red' }}>{emailError}</p> :
                    ''
            }
            <div>
                <label>Password: </label>
                <input type="text" onChange={ handlePassword } />
            {
                passwordError ?
                    <p style={{ color: 'red' }}>{passwordError}</p> :
                    ''
            }    
            </div>
            <div>
                <label> Confirm Password: </label>
                <input type="text" onChange={handleConfirmPassword} />
            {
                confirmPasswordError ?
                    <p style={{ color: 'red' }}>{confirmPasswordError}</p> :
                    ''
            }                    
            </div>
            <input type="submit" value="Create User" />
            <p> Your Form Data</p>
            <p>{firstname}</p>
            <p>{lastname}</p>
            <p>{email}</p>
            <p>{password}</p>
            <p>{confirmpassword}</p>
        </form>
    );
};
export default UserForm;
