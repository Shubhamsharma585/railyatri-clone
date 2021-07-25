import { loginReq } from "../../Api/axios"
import ISignIn from "../../Types/login.types"
import { LOGIN_USER_FAILURE, LOGIN_USER_REQUEST, LOGIN_USER_SUCCESS, REGISTER_USER_FAILURE, REGISTER_USER_REQUEST, REGISTER_USER_SUCCESS } from "./actionType"

const registerUserRequest = ()=>{
    return {
        type: REGISTER_USER_REQUEST
    }
}

const registerUserSuccess = (payload: string)=>{
    return {
        type: REGISTER_USER_SUCCESS,
        payload
    }
}

const registerUseFailure = (err: string)=>{
    return {
        type: REGISTER_USER_FAILURE,
        payload: err
    }
}

const loginUserRequest = ()=>{
    return {
        type: LOGIN_USER_REQUEST
    }
}

const loginUserSuccess = (payload: string)=>{
    return {
        type: LOGIN_USER_SUCCESS,
        payload
    }
}

const loginUseFailure = (err: any)=>{
    return {
        type: LOGIN_USER_FAILURE,
        payload: err
    }
}

export const registerUser = () => (dispatch:any) => {

}

export const loginUser = (data: ISignIn)=>(dispacth: any) => {
    dispacth(loginUserRequest());

    loginReq(data)
    .then(res=>{
        console.log(res?.data?.token)
        dispacth(loginUserSuccess(res?.data?.token));
    })
    .catch(err=>{
        console.log(err)
        dispacth(loginUseFailure(err));
    })
}