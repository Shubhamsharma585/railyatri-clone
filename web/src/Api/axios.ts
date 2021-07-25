import Axios from 'axios';
import IBus from '../Types/bus.types';

const axios = Axios.create({
    baseURL: 'http://localhost:5000/',
    // headers: {
    //     "Content-Type": "application/json",
    //     "Access-Control-Allow-Origin": "*",
    //     "Access-Control-Allow-Headers": "Origin, X-Requested-With, Content-Type, Accept"
    // },
});

// get buses

export const getBuses = ()=>{
    return axios.get('/bus');
}

// add bus

export const addBus = (data: IBus)=>{
    return axios.post('/bus', data)
}