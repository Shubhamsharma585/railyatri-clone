
import { BUS_REQUEST, BUS_SUCCESS, BUS_FAILURE } from "./actiontype"



 
const initstate = {
   
}

interface Ibuspayload {
    
}


interface Ibusreducer {
    type: string,
    payload: Ibuspayload
}


function busreducer(state = initstate, {type, payload}: Ibusreducer) 
{
    console.log(state, type, payload)
    switch(type)
    {
        case BUS_REQUEST: 
            { 
                return {
                   ...state,
                   isloading: true,
                }
            }

        case BUS_SUCCESS: 
        {
            return {
                ...state,
                isloading: false,
            }
        }
        case BUS_FAILURE:
            {
                return {
                    ...state,
                    isloading: false,
                }
            }

        default:
            return { 
               ...state
             }   
    }
}

export default busreducer;