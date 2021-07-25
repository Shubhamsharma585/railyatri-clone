import { loadData, saveData } from "../../Utils/localstorage";
import { LOGIN_USER_FAILURE, LOGIN_USER_REQUEST, LOGIN_USER_SUCCESS } from "./actionType";

const isAuth = loadData("auth") || false;
const token = loadData("token") || "";

interface IState {
    isLoading: boolean;
    isError: boolean;
    isAuth: boolean | string;
    token: string;
    err: any;
}

const initState: IState = {
    isLoading: false,
    isError: false,
    isAuth: isAuth,
    token: token,
    err: ''
}

const authReducer = (state: IState | undefined= initState, action: any) => {
    const payload = action?.payload;

    switch(action?.type){
        case LOGIN_USER_REQUEST: {
            return {
                isLoading: true,
                isAuth: false,
                isError: false
            }
        }

        case LOGIN_USER_SUCCESS: {
            saveData("isAuth", true);
            saveData("token", payload);
            return {
                isLoading: false,
                isError: false,
                isAuth: true,
                token: payload
            }
        }

        case LOGIN_USER_FAILURE: {
            return {
                isError: true,
                isLoading: false,
                isAuth: false,
                err: payload
            }
        }

        default: 
            return state;
    }
}

export default authReducer;