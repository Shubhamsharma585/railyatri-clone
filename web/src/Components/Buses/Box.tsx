import React from 'react'
import Styles from "./Box.module.css"






interface IBox {
    children: string,
}


function Box({children}: IBox) {



    return (
        <div className={Styles.box}>
            <p> {children}</p>
        </div>
    )
}

export default Box
