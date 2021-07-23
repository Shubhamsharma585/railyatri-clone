import React, {useState} from 'react'
import Styles from "./Busestop.module.css"



function Busestop() { 


    const [showseat, setShowseat] = useState <boolean> (false)


    const select = () => {
         setShowseat(showseat => !showseat)
    }



    return (
        <div className={Styles.main}>
            <div style={{display:"flex", flexDirection:"row", justifyContent:"space-around"}}>
                <div className={Styles.mainleft}>
                <h4 style={{margin:"5px"}}>{`Xgfgh`}</h4>
                <p style={{margin:"5px", color:"gray"}}>{`Sleeper`}</p>
               <div className={Styles.safelogo}></div>
                </div>


            <div className={Styles.mainmid}>
                <div className={Styles.mainmid1}>
                    <p><span className={Styles.mainmid1time}>{`19:00`}</span><span className={Styles.mainmid2time}>{`— ${`09`}h${`09`}m— `}</span><span className={Styles.mainmid1time}>{`09:00`}</span></p>
                </div>
                <div className={Styles.mainmid2}>
                    <p>{`SRDR`}</p>
                    <p>{`DELHI`}</p>
                </div>
                <div className={Styles.mainmid3}>
                    <p>Boarding Point</p>
                    <p>Dropping Point</p>
                </div>
                <div className={Styles.mainmid4}>
                    <p>Private Cabins</p>
                    <p>Regular Sanitization</p>
                    <p style={{borderRight:"0px"}}>Flexi Cancellation</p>
                </div>
            </div>

            <div className={Styles.mainright}>
                <p className={Styles.tagm}><span className={Styles.mainright1}>Savings ₹50</span> <span className={Styles.mainright2}>{`₹${"2000"}`}</span></p>
                <p className={Styles.tagm}><span className={Styles.mainright3}>{`₹${"1950"}`}</span></p>
                <p className={Styles.tagm}><span className={Styles.mainright4}>10</span> <span className={Styles.mainright5}>Seats Available</span></p>
            </div>
            </div>
            
            <hr/>
            <div style={{display:"flex", flexDirection:"row"}}>
               <p className={Styles.tag}>Reviews</p>
               <p className={Styles.tag}>Amenities</p>
               <p className={Styles.tag}>Boarding/Dropping Points</p>
               <p className={Styles.tag} style={{borderRight:"0px"}}>Cancellation Policy</p>
               <div className={Styles.select}><p >Select Seats</p></div> 
            </div>
        </div>
    )
}

export default Busestop;
