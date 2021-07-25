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
} from './SignInElements'

import { auth } from "../../../Utils/Firebase/index";
import { useHistory } from 'react-router-dom';
import { useAppDispatch, useAppSelector } from '../../../Redux/stateHooks';
import { loginUser } from '../../../Redux/Auth/action';
import ISignIn from '../../../Types/login.types';


const SignIn = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const history = useHistory();

    const dispatch = useAppDispatch();

    const data: ISignIn = {
        email,
        password
    }

    // const token = useAppSelector(state=> state.auth.token);

    let Authentication: React.FormEventHandler<HTMLFormElement> = async (e) => {
        e.preventDefault();
        // try {
        //     await auth.signInWithEmailAndPassword(email, password);
        //     alert("login successful");
        // } catch {
        //     alert("failed to log in");
        // }

        dispatch(loginUser(data));
        
        history.push('/addBus');
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