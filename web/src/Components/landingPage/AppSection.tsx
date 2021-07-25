import React from 'react'
import style from './AppSection.module.css'

function AppSection() {
    return (
        <div className={style.Appdiv} >
            <div className={style.App_div}>
                <div style={{ width: "60%" }}>
                    <h3 style={{ textAlign: "left", fontWeight: "bold" }}>The Bus Service You Can Depend On</h3>
                    <p style={{ textAlign: "left" }}>Used by more than 2 crore happy users, we are India's most loved travel app. With IntrCity SmartBus, we have created a new fleet of dependable buses that offer a safe & comfortable bus journey. Download our app for many more exciting offers on IntrCity SmartBus.</p>
                    <button className={style.btn}>Download Now</button>
                </div>
                <div style={{ width: "30%" }} >
                    <img src="https://images.railyatri.in/ry_images_prod/Phone-1612249825.png" alt="" />
                </div>
            </div>
        </div>
    )
}

export default AppSection
