import React, { useState } from "react";
import { connect } from "react-redux";
import "./sign-in.styles.scss";
import FormInput from "../form-input/form-input.component";
import CustomButton from "../custom-button/custom-button.component";
import {
  googleSingInStart,
  emailSingInStart,
} from "../../redux/user/user.action";

const SignIn = ({emailSingInStart, googleSingInStart}) => {
  
  const [userCredential, setCredential] = useState({email:'shashi@ac', password: '123456'});

  const {email, password} = userCredential;

  const handleSubmit = async (event) => {
    event.preventDefault();
    emailSingInStart( email, password );
   
  };
  const handleChange = (event) => {
    const { value, name } = event.target;
    setCredential({...userCredential, [name]: value });
  };
  
    
    return (
      <div className="sign-in">
        <h2>I already have an account</h2>
        <span>Sign in with your email and password</span>
        <form onSubmit={handleSubmit}>
          <FormInput
            name="email"
            handleChange={handleChange}
            label="Email"
            type="email"
            value={email}
          />
          <FormInput
            name="password"
            handleChange={handleChange}
            label="Password"
            type="password"
            value={password}
          />
          <div className="button">
            <CustomButton type="submit">Submit Form</CustomButton>
            <CustomButton
              type="button"
              onClick={googleSingInStart}
              isGoogleSignIn
            >
              Sign in with Google
            </CustomButton>
          </div>
        </form>
      </div>
    );
  
}

const mapDispatchToProps = (dispatch) => ({
  googleSingInStart: () => dispatch(googleSingInStart()),
  emailSingInStart: ( email, password ) =>
    dispatch(emailSingInStart({ email, password })),
});
export default connect(null, mapDispatchToProps)(SignIn);
