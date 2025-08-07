import React, { useState } from "react";

function isAlphabetic(str) {
  return /^[A-Za-z]+$/.test(str);
}

function Validation() {


  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  
  const [nameError, setNameError] = useState("");
  const [emailError, setEmailError] = useState("");
  const [MobileNo, setMobileNo]=useState("");
  const[mobileNoError, setMobileNoError]=useState("");

  const [sem, setSem] = useState("");
  const [semError, setSemError] = useState("");
  const [msg, setMsg] = useState("");
  const [MsgError, setMsgError] = useState("");

  const [gender, setGender] = useState("");
  const [genderError, setGenderError] = useState("");

  const [password, setPswd]=useState("")
  const [confirmPassword, setConfirmPswd]=useState("")
  const [pswdError, setPswdError]=useState("")
  const [confirmPswdError, setConfirmPswdError]=useState("")

  const [termsAccepted, setTermsAccepted] = useState(false);
  const [termsError, setTermsError] = useState("");

  const validateTerms = (accepted) => {
    if (!accepted) {
      return "Please accept the terms and conditions";
    }
    return "";
  };


  const validatePassword = (password) => {
    const minLength = 8;

    if (password.length < minLength) {
      return `Password must be at least ${minLength} characters long`;
    }

    if (!/[A-Z]/.test(password)) {
      return "Password must contain at least one uppercase letter";
    }

    if (!/[a-z]/.test(password)) {
      return "Password must contain at least one lowercase letter";
    }

    if (!/[0-9]/.test(password)) {
      return "Password must contain at least one digit";
    }

    if (!/[!@#$%^&*(),.?":{}|<>]/.test(password)) {
      return "Password must contain at least one special character";
    }

    return "";
};

const validateConfirmPassword = (confirmPassword, password) => {
  if (confirmPassword !== password) {
    return "Password and Confirm Password do not match";
  }
  return "";
}


  const validateName = (name) => 
  {
    if (name.length < 2 || name.length > 20) 
    {
      return "Name must be 2 to 20 characters";
      
    } 

    else if (!isAlphabetic(name)) 
    {
      return "Name must be alphabetic";
      
    } 
    return "";
  };

  const validateEmail = (email) => {
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(email)) 
    {
      return "Invalid email format";
      
    }
    return "";
  };

    const validateMobileNo=(m)=>{
        if(m.length<10 ){
            return "Enter valid Mobile bumber";
            
        }
        return "";
    }

    const validateMsg=(m)=>{
      if(m.length<1){
        return "Message should not be empty"
        
      }
      return ""
    }
    const validateGender = (value) => {
      if (!value) 
      {
        return "Gender is required";
        
      }
      return "";
    };
  
    const validateSem=(i)=>{
        if(i =='placeholder')
        {
            return "Semester is required field"
        }
        return ""
    }

    const handleSem=(e)=>{
        const input = e.target.value;
        setSem(input);
        setSemError(validateSem(input));
    }

  const handlePasswordChange = (e) => {
    const input = e.target.value;
    setPswd(input);
    setPswdError(validatePassword(input));
  };

  const handleConfirmPasswordChange = (e) => {
    const input = e.target.value;
    setConfirmPswd(input);
    setConfirmPswdError(validateConfirmPassword(input, password));
  };
  const handleNameChange = (e) =>     
  {
    const input = e.target.value;
    setName(input);
    setNameError(validateName(input));
  };
  const handleEmailChange = (e) =>     
  {
    const input = e.target.value;
    setEmail(input);
    setEmailError(validateEmail(input));
  };

  const handleMsgChange = (e) =>{
    const input = e.target.value;
    setMsg(input);
    setMsgError(validateMsg(input));

  }

  const handleGenderChange = (e) => {
    const selectedGender = e.target.value;
    setGender(selectedGender);
    setGenderError(validateGender(selectedGender));
  };


  const handleMobileNoChange = (e) =>     
  {
    const input = e.target.value;
    setMobileNo(input);
    setMobileNoError(validateMobileNo(input));
  };

  const handleTermsChange = (e) => {
    const checked = e.target.checked;
    setTermsAccepted(checked);
    setTermsError(validateTerms(checked));
  };

  let isFormValid =(!nameError && !emailError && !mobileNoError && !semError &&
  !MsgError && !genderError && !pswdError && termsAccepted);

  const handleSubmit = (e) => {
    e.preventDefault();

    const nameErr = validateName(name);
    const emailErr = validateEmail(email);
    const mobileErr = validateMobileNo(MobileNo);
    const semErr = validateSem(sem);
    const msgErr = validateMsg(msg);
    const genderErr = validateGender(gender);  
    const passwordErr = validatePassword(password);
    const confirmPasswordErr = validateConfirmPassword(confirmPassword, password);
    const termsErr = validateTerms(termsAccepted);

    setNameError(nameErr);
    setEmailError(emailErr);
    setMobileNoError(mobileErr);
    setSemError(semErr);
    setMsgError(msgErr);
    setGenderError(genderErr);  
    setPswdError(passwordErr);
    setConfirmPswdError(confirmPasswordErr);
    setTermsError(termsErr);

    const isValid =
      !nameErr &&
      !emailErr &&
      !mobileErr &&
      !semErr &&
      !msgErr &&
      !genderErr &&
      !passwordErr &&
      !confirmPasswordErr &&
      !termsErr;

    if (isValid) {
      alert("Form submitted successfully!");
    }
};


  return (
    <>
      <h2 style={{ color: "brown" }}>Validation Component</h2>

      <label>Name: </label>
      <input
        type="text"
        value={name}
        onChange={handleNameChange}
        placeholder="Enter Name"
      />
      <br />
      {nameError && <span style={{ color: "red" }}>{nameError}</span>}
    <br />

      <label>E-Mail: </label>
      <input
        type="text"
        value={email}
        onChange={handleEmailChange}
        placeholder="Enter your email"
      />
      <br />
      {emailError&& <span style={{ color: "red" }}>{emailError}</span>}

    <br />
      <label>Mobile Number: </label>
      <input
        type="text"
        value={MobileNo}
        onChange={handleMobileNoChange}
        placeholder="Enter your email"
      />
      <br />
      {mobileNoError&& <span style={{ color: "red" }}>{mobileNoError}</span>}
    <br/>

    <label>Semester  </label>
    <select id="semester" name="semester" onChange={handleSem}>
        <option value="placeholder">-- Select Semester --</option>
        <option value="1">1</option>
        <option value="2">2</option>
        <option value="3">3</option>
        <option value="4">4</option>
        <option value="5">5</option>
        <option value="6">6</option>
        <option value="7">7</option>
        <option value="8">8</option>
    </select><br/>
    {semError&& <span style={{ color: "red" }}>{semError}</span>}
    <br/>

    <label>Male </label>
    <input type="radio" name="gender" value="male" onChange={handleGenderChange}></input>
    <label> Female</label>
    <input type="radio" name="gender" value="female" onChange={handleGenderChange}></input>
    {genderError&& <span style={{ color: "red" }}>{genderError}</span>}
    <br/><br/>

    <label>Message</label>
    <textarea rows="4" cols="50" placeholder="Enter your message" onChange={handleMsgChange}></textarea><br/>
    {MsgError&& <span style={{ color: "red" }}>{MsgError}</span>}
    <br/><br />


    <label>Password: </label>
    <input type="password" placeholder="Enter your password" onChange={handlePasswordChange}/><br/>
    {pswdError&& <span style={{ color: "red" }}>{pswdError}</span>}
    <br /><br />

    <label>Confirm Password: </label>
    <input type="password" placeholder="Confirm your password" onChange={handleConfirmPasswordChange}/><br/>
    {confirmPswdError&& <span style={{ color: "red" }}>{confirmPswdError}</span>}
    <br /><br />

    <label>
      <input
        type="checkbox"
        checked={termsAccepted}
        onChange={handleTermsChange}
      />
      I accept the Terms and Conditions
    </label>
<br />
{termsError && <span style={{ color: "red" }}>{termsError}</span>}

    <br />
    <button type="submit" onClick={handleSubmit} >
      {/* <button type="submit" onClick={handleSubmit} disabled={!isFormValid}></button> */}
      Submit
    </button>

  
    </>
  );
}

export default Validation;
