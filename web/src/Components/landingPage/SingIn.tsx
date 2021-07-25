import React from 'react'
import Sign from './Sign'
import style from './SingIn.module.css'
function SingIn() {
    return (
        <div className={style.signDiv}>
            <div style={{marginLeft:"15px"}}>
                <p className={style.psign}><Sign/></p>
                <p className={style.save}>Save ₹100</p>
            </div>
            <div>
                <p>
                RY Wallet<span className={style.spanItem}>₹0</span>
                </p>
            </div>
            <button className={style.btn}>
                <img width="20px" src="https://images.railyatri.in/ry_images_prod/avatarimg-1566470965.png" alt="" />
                <img width="12px" src="https://images.railyatri.in/ry_images_prod/caret-1566470967.png" alt="" />
            </button>
        </div>
    )
}

export default SingIn
