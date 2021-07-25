
import IBus from "../../Types/bus.types"
import { BUS_REQUEST, BUS_SUCCESS, BUS_FAILURE } from "./actiontype"

interface IState {
    isLoading: boolean;
    data: IBus[];
}

 
const initstate: IState = {
   isLoading: false,
   data: []
}


interface Ibusreducer {
    type: string,
    payload: any
}


function busreducer (state = initstate, {type, payload}: Ibusreducer | any) 
{
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
                data: payload
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