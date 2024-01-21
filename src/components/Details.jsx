import React from 'react'
import { GoogleOAuthProvider } from '@react-oauth/google';
import { GoogleLogin } from '@react-oauth/google';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';
const Details = () => {
    const navigate=useNavigate();
  return (
    <Container>
        <h1>Login with Google</h1>

    <GoogleOAuthProvider clientId="627903200457-ita9rh2cq381fe9ggu0dvdm5ol7k3t61.apps.googleusercontent.com">
        <div className='kimss'>
    <GoogleLogin
    
      onSuccess={credentialResponse => {
        console.log(credentialResponse);
        localStorage.setItem("token",JSON.stringify(credentialResponse));
        navigate("/data")
      }}
      onError={(error) => {
        console.log(error);
      }}
    />
    </div>
    </GoogleOAuthProvider>
    </Container>
  )
}

export default Details

const Container=styled.div`

display:flex;
flex-direction:column;
align-items:center;
justify-content:center;
width:100vw;


`
