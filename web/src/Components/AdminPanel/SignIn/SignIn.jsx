import React, { useState }  from 'react';

import {
    Container,
    FormWrap,
    FormContent,
    Form,
    FormH1,
    FormLabel,
    FormInput,
    FormButton,
    CompanyLogo
} from './SignInElements.jsx'

import { auth } from "../../../Utils/Firebase/index";


const SignIn = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    let Authentication = async (e) => {
        e.preventDefault();
            try {
                await auth.signInWithEmailAndPassword(email, password);
                alert("login successful");
            } catch {
                alert("failed to log in");
            }
    }

    return (
        <>
        <Container>
            <FormWrap>
                <FormContent>
                    <Form onSubmit = {Authentication}>
                        <CompanyLogo src = "https://images.railyatri.in/ry-logo.png" alt = "Railyatri"/>
                        <FormH1>Sign in to your account</FormH1>
                        <FormLabel>Email</FormLabel>
                        <FormInput 
                        type = "email" 
                        required 
                        value = {email} 
                        onChange = {(e) => setEmail(e.target.value)}/>
                        <FormLabel >Password</FormLabel>
                        <FormInput 
                        type = "password"  
                        value = {password} 
                        onChange = {(e) => setPassword(e.target.value)}
                        required/>

                        <FormButton type = "submit">Login</FormButton>
                    </Form>
                </FormContent>
            </FormWrap>
        </Container>
        </>
    )
}

export default SignIn;