import {React, useState} from 'react'
import { useNavigate } from 'react-router-dom'
//import { Link } from 'react-router-dom';
import "./LoginoutStyles.css"
import * as Components from './LoginHelp';

const Loginout = () => {
    const [signIn, toggle] = useState(true);
    const [credentials, setCredentials] = useState({name: "", email: "", password: ""}) 
    const navigate = useNavigate();
//Sign in
    const handleSubmit = async (e) => {
        e.preventDefault();
        const response = await fetch("https://medantrikbackend.onrender.com/api/auth/login", { 
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({email: credentials.email, password: credentials.password})
        });
        const json = await response.json()
        console.log(json);
        if (response.ok){
            // Save the auth token and redirect
            localStorage.setItem('token', json.authtoken); 
            navigate("/blog");
            //props.showAlert("Logged in Successfully", "success");
            alert("Sign in Successfully")

        }
        else{
            //props.showAlert("Invalid credentials", "danger");
            alert("Invalid credentials or A link sent to Your email Please verify");
        }
    }

    const onChange = (e)=>{
        setCredentials({...credentials, [e.target.name]: (e.target).value})
    }

//sign up
    const handleSubmit2 = async (e) => {
        e.preventDefault();
       const {name, email, password} = credentials;
        const response = await fetch("https://medantrikbackend.onrender.com/api/auth/createuser", { 
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({name, email, password})
        });
        const json = await response.json()
        console.log(json);
        if (response.ok){
            // Save the auth token and redirect
            // localStorage.setItem('token', json.authtoken); //there is no need to give token 
            alert("A link sent to Your email Please verify")
           // props.showAlert("Account Created Successfully", "success");

        }
        else{
            //props.showAlert("Invalid credentials", "danger");
            alert("User already exist Please Sign in")
        }
    }


    
  return (
    <div className='loginform'>
    <Components.Container>
              <Components.SignUpContainer signinIn={signIn}>
                  <Components.Form onSubmit={handleSubmit2}>
                      <Components.Title>Create Account</Components.Title>
                      <Components.Input type='text' placeholder='Name' onChange={onChange} name="name"/>
                      <Components.Input type='email' placeholder='Email' onChange={onChange} name="email"/>
                      <Components.Input type='password' placeholder='Password' onChange={onChange} name="password"/>
                      <Components.Button>Sign Up</Components.Button>
                  </Components.Form>
              </Components.SignUpContainer>

              <Components.SignInContainer signinIn={signIn}>
                   <Components.Form onSubmit={handleSubmit}>
                       <Components.Title>Sign in</Components.Title>
                       <Components.Input type='email' placeholder='Email'  onChange={onChange} name="email"/>
                       <Components.Input type='password' placeholder='Password'  onChange={onChange} name="password"/>
                       <Components.Anchor href='#'>Forgot your password?</Components.Anchor>
                       <Components.Button>Sigin In</Components.Button>
                   </Components.Form>
              </Components.SignInContainer>

              <Components.OverlayContainer signinIn={signIn}>
                  <Components.Overlay signinIn={signIn}>

                  <Components.LeftOverlayPanel signinIn={signIn}>
                      <Components.Title>Welcome Back!</Components.Title>
                      <Components.Paragraph>
                          To keep connected with us please login with your personal info
                      </Components.Paragraph>
                      <Components.GhostButton onClick={() => toggle(true)}>
                          Sign In
                      </Components.GhostButton>
                      </Components.LeftOverlayPanel>

                      <Components.RightOverlayPanel signinIn={signIn}>
                        <Components.Title>Hello, Friend!</Components.Title>
                        <Components.Paragraph>
                            Enter Your personal details and start journey with us
                        </Components.Paragraph>
                            <Components.GhostButton onClick={() => toggle(false)}>
                                Sigin Up
                            </Components.GhostButton> 
                      </Components.RightOverlayPanel>
  
                  </Components.Overlay>
              </Components.OverlayContainer>

          </Components.Container>
          </div>
  )
}

export default Loginout