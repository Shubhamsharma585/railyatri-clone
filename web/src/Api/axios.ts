import Axios from 'axios';
import IBus from '../Types/bus.types';
import ISignIn from '../Types/login.types';
import { loadData } from '../Utils/localstorage';

const axios = Axios.create({
    baseURL: 'http://localhost:5000/',
    headers: {
        "Content-Type": "application/json",
        "Access-Control-Allow-Origin": "*",
        "Access-Control-Allow-Headers": "Origin, X-Requested-With, Content-Type, Accept"
    },
});

const token = loadData('token') || '';

// get buses

export const getBuses = ()=>{
    return axios.get('/bus');
}

// add bus

const headers = {
    'Content-Type': 'application/json',
    'Authorization': `Bearer ${token}`
}

export const addBus = (data: IBus)=>{
    return axios.post('/bus', data, {
        headers: headers
    })
}

// login

export const loginReq = (data: ISignIn)=>{
    return axios.post('/login', data);
}