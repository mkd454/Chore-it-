import React from 'react';
import ReactDOM from 'react-dom';
import posed from 'react-pose';
import { AuthConsumer } from "../../utils/Auth/authContext";

const Button = posed.div({
  hoverable: true,
  pressable: true,
  init: {
    scale: 1,
    boxShadow: '0px 0px 0px rgba(0,0,0,0)',
    backgroundColor: '#1A3766'
  },
  hover: {
    scale: 1.2,
    boxShadow: '0px 0px 5px rgba(0,0,0,.5)',
    backgroundColor: '#1a378e',
    transition: {
      boxShadow: { ease: 'linear', duration: 10 },
      backgroundColor: { ease: 'linear', duration: 10 },
      scale: { type: 'spring', stiffness: 100, damping: 5}
    }
  },
  press: {
    scale: 1.1,
    boxShadow: '0px 0px 0px rgba(0,0,0,0.1)',
    transition: {
      boxShadow: { ease: 'linear', duration: .1 }
    }
  }
});

const Label = posed.span({
  init: { color: 'white' }
});

const LoginButton = () => (
  <AuthConsumer>
    {({ initiateLogin }) => (
      <Button id="loginButton" className="btn btn-lg btn-primary" onClick={initiateLogin}>
          <Label id="login-text">Login</Label>
      </Button>
    )}
  </AuthConsumer>
);

export default LoginButton;
