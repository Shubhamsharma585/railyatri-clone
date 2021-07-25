import React from 'react'
import Styles from "./Sleeper.module.css"
import sle from "../../Images/sleeper.png"



interface ISeat
{
    numb: number
}

function Sleeper({ numb } :ISeat ) {
    return (
        <div className={Styles.main}>
            <p>{numb}</p>
        </div>
    )
}

export default Sleeper
