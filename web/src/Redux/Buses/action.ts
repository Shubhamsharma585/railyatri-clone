
import { BUS_REQUEST, BUS_SUCCESS, BUS_FAILURE } from "./actiontype"
import Axios from "axios"



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

 
export const fetchingbuses = (payload: Ibuspayload) => (dispatch: DispatchAllAssets) => {
    console.log("fetching start")
    console.log(payload)

    dispatch(fetchingrequest())

    Axios.get("http://localhost:2233/buses", {
       
    })
        .then((res) => {
            console.log(res.data.data)
            dispatch(fetchingsuccess(res.data.data))
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



















