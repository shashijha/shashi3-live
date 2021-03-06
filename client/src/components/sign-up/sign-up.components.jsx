import React, {useState} from "react";
import {connect} from 'react-redux';
import FormInput from "../form-input/form-input.component";
import CustomButton from "../custom-button/custom-button.component";
import { signUpStart } from "../../redux/user/user.action"; 
import "./sign-up.styles.scss";

const SignUp = ({signUpStart})=> {
  const [userInfo, setUserInfo] = useState({displayName:'', email:'', password:'', confirmPassword:''});
  const {displayName, email, password, confirmPassword} = userInfo;

  const handleSubmit = async (event) => {
    event.preventDefault();
    if (password !== confirmPassword) {
      alert("password don't match");
      return;
    }

    signUpStart({displayName, email, password});
      
    
  };
  const handleChange = (event) => {
    const { name, value } = event.target;

    setUserInfo({...userInfo, [name]: value });
  };

  return (
      <div className="sign-up">
        <div className="title">I do not have a account</div>
        <span>Sign up with your email and password</span>

        <form className="sign-up-form" onSubmit={handleSubmit}>
          <FormInput
            type="text"
            name="displayName"
            value={displayName}
            onChange={handleChange}
            label="Display Name"
            required
          />
          <FormInput
            type="email"
            name="email"
            value={email}
            onChange={handleChange}
            label="Email"
            required
          />
          <FormInput
            type="password"
            name="password"
            value={password}
            onChange={handleChange}
            label="password"
            required
          />
          <FormInput
            type="password"
            name="confirmPassword"
            value={confirmPassword}
            onChange={handleChange}
            label="Confirm Password"
            required
          />
          <CustomButton type="submit">SIGN UP</CustomButton>
        </form>
      </div>
    );
  
}

const mapDispatchToProps = dispatch => ({
  signUpStart: (userCredential) => dispatch(signUpStart(userCredential))
})
export default connect(null, mapDispatchToProps)(SignUp);
