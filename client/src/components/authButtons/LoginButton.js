import React from 'react';
import ReactDOM from 'react-dom';
import posed from 'react-pose';
import { AuthConsumer } from "../../utils/Auth/authContext";

const Button = posed.div({
  pressable: true,
  init: { scale: 1 },
  press: { scale: 0.8 }
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
