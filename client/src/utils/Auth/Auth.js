import React, {Component} from "react";
import auth0 from "auth0-js";
import API from "../API/API";
import {AUTH_CONFIG} from "./auth0-variables";
import {AuthProvider} from "./authContext";

const auth = new auth0.WebAuth({
  domain: AUTH_CONFIG.domain,
  clientID: AUTH_CONFIG.clientId,
  redirectUri: AUTH_CONFIG.callbackUrl,
  audience: "https://dev-mkd.auth0.com/userinfo",
  responseType: "token id_token"
});

class Auth extends Component {
  state = {
    authenticated: false,
    user: {
      role: "visitor"
    },
    accessToken: ""
  };

  initiateLogin = () => {
    auth.authorize();
  };

  logout = () => {
    this.setState({
      authenticated: false,
      user: {
        role: "visitor"
      },
      accessToken: ""
    });
  };

  handleAuthentication = () => {
    auth.parseHash((error, authResult) => {
      if (error) {
        console.log(error);
        console.log(`Error ${error.error} occured`);
        return;
      }
  
      this.setSession(authResult.idTokenPayload);
    });
  };

  setSession(data) {
    console.log(data);
    const user = {
      id: data.sub,
      name: data.name,
      email: data.email,
      role: data[AUTH_CONFIG.roleUrl]
    }
    this.setState({
      authenticated: true,
      accessToken: data.accessToken,
      user
    });

    // API.getUser(data.sub)
    API.saveUser({
      authId: data.sub,
      name: data.name
    });
  };

  render() {
    const AuthProviderValue = {
      ...this.state,
      initiateLogin: this.initiateLogin,
      handleAuthentication: this.handleAuthentication,
      logout: this.logout
    };
    return (
      <AuthProvider value={AuthProviderValue}>
        {this.props.children}
      </AuthProvider>
    );
  }
};

export default Auth;