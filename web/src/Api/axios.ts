import Axios from 'axios';
import IBus from '../Types/bus.types';

const axios = Axios.create({
    baseURL: 'http://localhost:5000/',
    headers: {
        "Content-Type": "application/json",
        "Access-Control-Allow-Origin": "*",
        "Access-Control-Allow-Headers": "Origin, X-Requested-With, Content-Type, Accept"
    },
});

// get buses

export const getBuses = ()=>{
    return axios.get('/bus');
}

// add bus

const headers = {
    'Content-Type': 'application/json',
    'Authorization': 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYwZmFiZjlmMmQ2YWU3NjA4ODkzYjllOSIsImlhdCI6MTYyNzIyMDk3Nn0.AEdZmbbCruhjd1AHbq45nq4zFItRi9pKtvmKox8YQFc'
}

export const addBus = (data: IBus)=>{
    return axios.post('/bus', data, {
        headers: headers
    })
}