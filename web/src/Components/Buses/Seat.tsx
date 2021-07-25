import React from 'react'
import Styles from "./Seat.module.css"
import seat from "../../Images/seat.png"

interface ISeat{
    numb: number
}

function Seat({ numb } :ISeat ) {
    return (
        <div className={Styles.main}>
            <p>{numb}</p>
        </div>
    )
}

export default Seat
