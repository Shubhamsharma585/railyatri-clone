import { Style } from '@material-ui/icons'
import React, {useState} from 'react'
import Styles from "./Busecard.module.css"
import Booking from "./Booking"
 


interface IBusecard {
   company: string, 
   catg: string[],
   origin: string,
   desti: string,
   origintime: string,
   destitime: string,
   priceSleeper: string,
   priceSeater: string,
   seatAvail: number,
   seats: []
}



function Busecard({ company, 
catg,
origin,
desti,
origintime,
destitime, 
priceSleeper,
priceSeater,
seatAvail,
seats} : IBusecard) 
{
    let sDate = new Date(origintime);
    let eDate = new Date(destitime);

    let startDate = sDate.getDate();
    let startMon = sDate.getMonth();

    let startHr = sDate.getHours();
    let startMin = sDate.getMinutes();

    var origintime = `${startHr}:${startMin}`

    let endHr = eDate.getHours();
    let endMin = eDate.getMinutes();

    var destitime =  `${endHr}:${endMin}`

    var durationh = endHr - startHr
    var durationm = endMin - startMin


    const [showseat, setShowseat] = useState<boolean>(false)
    const selectseat = () => {
          setShowseat(showseat => !showseat)
    }


    return (
        <div>
        <div className={Styles.main}>
            <div style={{display:"flex", flexDirection:"row", justifyContent:"space-around"}}>
                <div className={Styles.mainleft}>
                <h4 style={{margin:"5px"}}>{company}</h4>
                <p style={{margin:"5px", color:"gray"}}>{catg}</p>
             </div>

            <div className={Styles.mainmid}>
                <div className={Styles.mainmid1}>
                    <p><span className={Styles.mainmid1time}>{origintime}</span><span className={Styles.mainmid2time}>{`— ${durationh}h${durationm}m— `}</span><span className={Styles.mainmid1time}>{destitime}</span></p>
                </div>
                <div className={Styles.mainmid2}>
                    <p>{origin}</p>
                    <p>{desti}</p>
                </div>
                <div className={Styles.mainmid3}>
                    <p>Boarding Point</p>
                    <p>Dropping Point</p>
                </div>
            </div>

            <div className={Styles.mainright}>
                <p className={Styles.tagm}><span className={Styles.mainright1}>Savings ₹50</span> <span className={Styles.mainright2}>{`₹${"2000"}`}</span></p>
                <p className={Styles.tagm}><span className={Styles.mainright3}>{`₹${priceSeater}`}</span></p>
                <p className={Styles.tagm}><span className={Styles.mainright4}>{seatAvail}</span> <span className={Styles.mainright5}>Seats Available</span></p>
            </div>
            </div>
            
            <hr className={Styles.hr1}/>
            <div style={{display:"flex", flexDirection:"row"}}>
               <p className={Styles.tag}>Boarding/Dropping Points</p>
               <p className={Styles.tag} style={{borderRight:"0px"}}>Cancellation Policy</p>
               <div className={Styles.select} onClick={() => selectseat()}><p>Select Seats</p></div> 
            </div>
           
         
        </div>

           {showseat && <Booking origin={origin} desti={desti} origintime={origintime} destitime={destitime} seats={seats} priceSleeper={priceSleeper} priceSeater={priceSeater}/> }
      </div>
    )
}

export default Busecard
