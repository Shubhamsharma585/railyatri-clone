import React from 'react'
import Styles from "./Lounge.module.css"


function Lounge() {


    var city="Delhi"


    return (
        <div className={Styles.main}>
            <div className={Styles.one}></div>
            <div className={Styles.one2}><p>{`Now in ${city}`}</p></div>
            <div className={Styles.two}>
                <h4>IntrCity SmartBus Lounge</h4>
                <p>Sit back, relax & board the bus</p>
            </div>
            <div className={Styles.thr}>
                <div className={Styles.thr1}>
                    <img src="https://www.railyatri.in/_next/image?url=https%3A%2F%2Fimages.railyatri.in%2Fry_images_prod%2Fsanitizedgray-1614907898.png&w=96&q=75" height="40px" alt="1"/>
                    <p>Sanetized Regularly</p>
                </div>
                <div className={Styles.thr1}>
                <img src="https://www.railyatri.in/_next/image?url=https%3A%2F%2Fimages.railyatri.in%2Fry_images_prod%2Fwifigray-1614907902.png&w=96&q=75" height="40px" alt="2"/>
                    <p>Free Wifi</p>
                </div>
                <div className={Styles.thr1}>
                <img src="https://www.railyatri.in/_next/image?url=https%3A%2F%2Fimages.railyatri.in%2Fry_images_prod%2Fwashroomgray-1614907906.png&w=96&q=75" height="40px" alt="3"/>
                    <p>Hygenic Washroom</p>
                </div>
                <div className={Styles.thr1}>
                <img src="https://www.railyatri.in/_next/image?url=https%3A%2F%2Fimages.railyatri.in%2Fry_images_prod%2Fchargingpointgray-1614907892.png&w=96&q=75" height="40px" alt="4"/>
                    <p>Mobile Charging point</p>
                </div>
            </div>
            <div className={Styles.four}>
                <p>View Details</p>
                <div  className={Styles.fourimg}><img src="https://www.railyatri.in/_next/image?url=https%3A%2F%2Fimages.railyatri.in%2Fry_images_prod%2Fright-arrow2x-min-1596199494.png&w=16&q=75" width="9px" /></div>
            </div>
        </div>
    )
}

export default Lounge
