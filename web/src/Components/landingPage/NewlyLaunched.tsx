import React from 'react'
import style from './NewlyLaunched.module.css'
function NewlyLaunched() {
    return (
        <div className={style.new_div}>
            <div className={style.container_div}>
                <div style={{ width: "45%" }}>
                    <div className={style.newly_lunched}>
                        <span>Newly Lunched</span>
                    </div>
                    <h4 style={{ margin: "0", fontSize: "18px", fontWeight: "bold", textAlign: "left" }}>IntrCity SmartBus Lounge</h4>
                    <p style={{ textAlign: "left", fontSize: "14px", color: "rgba(0,0,0,0.7)" }}>Forget waiting for your bus by the roadside, SmartBus lounge makes boarding your bus a completely stress-free experience. This premium AC lounge is well equipped with modern amenities like work stations, charging points and more. Bus travellers now get the comfort they always deserved.</p>
                </div>
                <div style={{ width: "50%" }}>
                    <div style={{ display: "flex" }}>
                        <div style={{ margin: "5px" }}>
                            <img src="https://images.railyatri.in/ry_images_prod/Lounge-1-1572610659.png" alt="" />
                        </div>
                        <div style={{ margin: "5px" }}>
                            <img src="https://images.railyatri.in/ry_images_prod/Lounge-2-1572610661.png" alt="" />
                        </div>
                    </div>
                    <div style={{ display: "flex" }}>
                        <div style={{ margin: "5px" }}>
                            <img src="https://images.railyatri.in/ry_images_prod/Lounge-3-1572610662.png" alt="" />
                        </div>
                        <div style={{ margin: "5px" }}>
                            <img src="https://images.railyatri.in/ry_images_prod/Lounge-4-1572610664.png" alt="" />
                        </div>
                    </div>
                    
                </div>
            </div>
        </div>
    )
}

export default NewlyLaunched
