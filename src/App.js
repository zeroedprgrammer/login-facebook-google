import React from 'react';
import { GoogleLogin, GoogleLogout } from 'react-google-login';
import FacebookLogin from 'react-facebook-login';
 
import './App.css';

const responseFacebook = (response) => {
  console.log(response);

}

const responseGoogle = (response) => {
  localStorage.setItem('auth', response)
  console.log('response', response);
  const { googleId, accessToken, profileObj } = response

  /* inserta a la db... */
}

const logout = () => {
  console.log('session finish')
  localStorage.removeItem('auth')
}
 
// 441857646099-f4fueoic3rfffm1rn3uo2snum8dfrsja.apps.googleusercontent.com
//
function App() {

  if(localStorage.auth){

    return(
      <GoogleLogout
        clientId="541512946942-qunj36a5emmppsnt8001e3j7k03tnj65.apps.googleusercontent.com"
        buttonText="Logout"
        onLogoutSuccess={logout}
        onFailure={logout}
      >
      </GoogleLogout>
    )
  }
    
   return (
      <div className="App">
          <FacebookLogin
            appId="2468047440142903"
            autoLoad={true}
            fields="name,email,picture"
            callback={responseFacebook}
            cssClass="my-facebook-button-class"
            icon="fa-facebook"
          />
        <GoogleLogin
          clientId="541512946942-qunj36a5emmppsnt8001e3j7k03tnj65.apps.googleusercontent.com"
          buttonText="Login"
          onSuccess={responseGoogle}
          onFailure={responseGoogle}
          cookiePolicy={'single_host_origin'}
        />
      </div>
    );
}

export default App;