
import { BUS_REQUEST, BUS_SUCCESS, BUS_FAILURE } from "./actiontype"

import { getBuses } from '../../Api/axios';



interface Ibuspayload {
    
}

interface Ibusreducer {
    type: string,
    payload: Ibuspayload
}

interface IAllAssets {
    payload: Ibuspayload
  }
interface IActiontype {
     type: string
  }  

type DispatchAllAssets = (arg: IAllAssets | IActiontype) => (IAllAssets | IActiontype);

 
export const fetchingbuses = () => (dispatch: DispatchAllAssets | any) => {

    dispatch(fetchingrequest())

    getBuses()
    .then((res) => {
        dispatch(fetchingsuccess(res.data.buses))
    })
}





const fetchingrequest = () => { 
    return {
        type: BUS_REQUEST
    } 
}

const fetchingsuccess = (payload: Ibuspayload) : Ibusreducer => {
     console.log(payload)
    return {
        type: BUS_SUCCESS, 
        payload
    }
}



















