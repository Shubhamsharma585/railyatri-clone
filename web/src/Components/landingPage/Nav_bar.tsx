import React from 'react'
import style from './Nav_bar.module.css'
import SingIn from './SingIn'
function Nav_bar() {
    return (
        <div className={style.nav_bar_upperDiv}>
            <div className={style.nav_bar}>
                <div className={style.nav_inner}>
                    <img style={{ width: "132px", height: "32px", cursor: "pointer" }} src="https://images.railyatri.in/ry-logo.png" alt="logo" />
                    <ul className={style.ul_list}>
                        <li><img style={{ width: "16px" }} src="https://images.railyatri.in/ry_images_prod/trainicon-1600406728.png" alt="" />Train Tickets</li>
                        <li className={style.bus_services}><img src="https://images.railyatri.in/ry_images_prod/activeintrcity-1597930392.png" alt="" />InterCity SmartBus</li>
                        <li><img style={{ width: "14px" }} src="https://images.railyatri.in/ry_images_prod/business-info-1594267631.png" alt="" />Train Information</li>
                        <li><img style={{ width: "14px" }} src="https://images.railyatri.in/ry_images_prod/moreicon-1594267632.png" alt="" />More</li>
                    </ul>
                </div>
                <div>
                    <div className={style.nav_inner_sign}>
                        <SingIn />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Nav_bar
