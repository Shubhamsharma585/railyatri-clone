import React from 'react'
import Styles from "./Busecard.module.css"




interface IBusecard {
   company: string, 
   catg: string[],
   origin: string,
   desti: string,
   duration: string,
   origintime: string,
   destitime: string,
   price: string,
   seatAvail: string

}



function Busecard({ company,
catg,
origin,
desti,
duration,
origintime,
destitime,
price,
seatAvail} : IBusecard) {




    return (
        <div className={Styles.main}>
            
        </div>
    )
}

export default Busecard
