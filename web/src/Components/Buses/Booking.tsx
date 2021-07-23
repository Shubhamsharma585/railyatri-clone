import React from 'react'
import Styles from "./Booking.module.css"



function Booking() {




    return (
        <div className={Styles.main}>
            <div className={Styles.left}>
                <div className={Styles.leftbox}>
                  <div className={Styles.leftbox1}></div>
                  <div className={Styles.leftbox2}>
                      <div className={Styles.leftbox21}><p>Lower</p>
                      <img src="https://images.railyatri.in/ry_images_prod/steering-1589359175.png" height="32px" alt="x"/>
                      </div>                      
                  </div>
                  <div className={Styles.leftbox3}></div>
                </div>
                <div className={Styles.leftbox}>
                  <div className={Styles.leftbox1}></div>
                  <div className={Styles.leftbox2}>
                  <div className={Styles.leftbox21}><p>Upper</p>
                  </div>     
                  </div>
                  <div className={Styles.leftbox3}></div>
                </div>
            </div>
            <div className={Styles.right}></div>
            
        </div>
    )
}

export default Booking
