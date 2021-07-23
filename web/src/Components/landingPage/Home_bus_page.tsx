import React from 'react'
import style from './Home_bus_page.module.css'

function Home_bus_page() {
    return (
        <div className={style.main_div}>
            <div className={style.inner_div}>
                <p style={{ textAlign: 'left', fontSize: '12px' }}><span style={{ color: '#0275d8' }}>Home </span><span style={{ color: '#666' }}> |  Bus Booking</span></p>
                <div style={{ display: "flex" }}>
                    <div className={style.search_form}>

                    </div>
                    <div>
                        <img className={style.img_bus} src="https://images.railyatri.in/ry_images_prod/Bus-Side-1612249818.png" alt="" />
                        <h3 className={style.choos_header}>Why Choose IntrCity SmartBus?</h3>
                        <div className={style.safty_div}>
                            <div className={style.smaller_div}>
                                <img style={{ width: "35px" }} src="https://images.railyatri.in/ry_images_prod/PrivatCabinGray-1590151927.png" alt="" />
                                <div style={{ marginLeft: "15px" }}>
                                    <p className={style.p}>Private Cabins</p>
                                    <p className={style.p_safe}>Safe & secure space for travellers</p>
                                </div>
                            </div>
                            <div className={style.smaller_div}>
                                <img style={{ width: "35px" }} src="https://images.railyatri.in/ry_images_prod/RegularSanitizationGray-1590151929.png" alt="" />
                                <div style={{ marginLeft: "15px" }}>
                                    <p className={style.p}>Regular Sanitization</p>
                                    <p className={style.p_safe}>Mandatory cleaning & sanitization of buses</p>
                                </div>
                            </div>
                            <div className={style.smaller_div}>
                                <img style={{ width: "35px" }} src="https://images.railyatri.in/ry_images_prod/COVIDInsuranceGray-1590151922.png" alt="" />
                                <div style={{ marginLeft: "15px" }}>
                                    <p className={style.p}>Travel Insurance Cover</p>
                                    <p className={style.p_safe}>COVID health cover for travellers</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Home_bus_page
