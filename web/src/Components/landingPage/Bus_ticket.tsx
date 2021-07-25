import React, { useState } from 'react'
import style from './Bus_ticket.module.css'



function Bus_ticket() {
    const [searchBus, setSearchBus] = useState<any>({})
    const [from, setFrom] = useState<string>("")
    const [to, setTo] = useState<string>("")
    const [date, setDate] = useState<string>("")
    const [ac, setAc] = useState<boolean>(false)
    const [luxury, setLuxury] = useState<boolean>(false)
    const [sleeper, setSleeper] = useState<boolean>(false)

    const handleOnClick = () => {
        setSearchBus({
            from: from,
            to: to,
            date: date
        })
        console.log(searchBus)
    }

    return (
        <div className={style.container}>
            <h1 className={style.h1}>Bus Ticket Booking</h1>
            <input className={style.input} onChange={(e) => (setFrom(e.target.value))} type="text" placeholder="From" />
            <img className={style.img} src="https://images.railyatri.in/ry_images_prod/switch-1561706398.png" alt="" />
            <input className={style.input} onChange={(e) => (setTo(e.target.value))} type="text" placeholder="To" />
            <input className={style.input} onChange={(e) => (setDate(e.target.value))} type="date" placeholder="To" />
            <p className={style.p}>Choose bus type</p>
            <div className={style.btndiv}>
                {ac ? <button onClick={() => (setAc(!ac))} style={{ backgroundColor: "#fff", color: "#000" }} className={style.btn}>AC</button> : <button onClick={() => (setAc(!ac))} className={style.btn}>AC</button>}
                {luxury ? <button onClick={() => (setLuxury(!luxury))} style={{ backgroundColor: "#fff", color: "#000" }} className={style.btn}>Luxury</button> : <button onClick={() => (setLuxury(!luxury))} className={style.btn}>Luxury</button>}
                {sleeper ? <button onClick={() => (setSleeper(!sleeper))} style={{ backgroundColor: "#fff", color: "#000" }} className={style.btn}>Sleeper</button> : <button onClick={() => (setSleeper(!sleeper))} className={style.btn}>Sleeper</button>}
            </div>
            <button onClick={handleOnClick} className={style.btnSearch}>SEARCH</button>
        </div>
    )
}

export default Bus_ticket
