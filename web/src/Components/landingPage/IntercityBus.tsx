import React from 'react'
import style from './IntercityBus.module.css'

function IntercityBus() {
    return (
        <div>
            <img style={{ width: "35%" }} src="https://images.railyatri.in/ry_images_prod/log2x-1612769289.png" alt="" />
            <h4 style={{ fontWeight: "bold", fontSize: "22px", marginTop: "20px", marginBottom: "10px" }}>Experience Safe & Comfortable Journeys With Us</h4>
            <p style={{ width: "90%", margin: "auto", marginTop: "0", color: "#333" }}> We are the creators of India’s 1st fleet of branded buses that guarantee safe & comfortable journeys. We offer you a complete end-to-end travel experience with our professional crew, round the clock command centre and many other features. We put all our efforts into making every trip an on-time trip!</p>
            <div className={style.gallery_Div}>
                <div style={{margin:"10px"}}>
                    <img src="https://images.railyatri.in/railyatri_images/SmartBus_Interior1.jpg" alt="" />
                </div>
                <div className={style.small_div}>
                    <div className={style.smallImg}>
                        <div style={{margin:"3px",marginRight:"15px"}}>
                            <img src="https://images.railyatri.in/railyatri_images/SmartBus_Interior2.png" alt="" />
                        </div>
                        <div style={{margin:"3px"}}>
                            <img src="https://images.railyatri.in/railyatri_images/SmartBus_Interior3.png" alt="" />
                        </div>
                    </div>
                    <div className={style.smallImg}>
                        <div style={{margin:"3px",marginRight:"15px"}}>
                            <img src="https://images.railyatri.in/railyatri_images/SmartBus_Interior4.png" alt="" />
                        </div>
                        <div style={{margin:"3px"}}>
                            <img src="https://images.railyatri.in/railyatri_images/SmartBus_Interior5.png" alt="" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default IntercityBus
