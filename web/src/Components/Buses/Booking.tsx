import { BorderBottom } from '@material-ui/icons'
import React, {useState} from 'react'
import Styles from "./Booking.module.css"
import { PaymentDrawer } from './PaymentDrawer'
import Seat from "./Seat"
import Sleeper from "./Sleeper"

interface Iseats {
    num: number,
    status: string
}
interface Ibus {
    total: number,
    seats: Iseats[]
}

interface IBooking
{
    origin: string,
    desti: string, 
    origintime: string,
    destitime: string,
    seats: [],
    priceSleeper: string, 
    priceSeater: string,
 
}
 

function Booking({origin, desti, origintime, destitime, seats, priceSleeper, priceSeater } :IBooking) {

 
    const [board, setBoard] = useState<boolean>(true)
    const [ open, setOpen ] = React.useState<boolean>(false);
    const [ seatid, setSeatid ] = React.useState<string>("");


    const handleDrawerOpen: any = () => {
        setOpen(true);
    };

    const handleDrawerClose: any = () => {
        setOpen(false)
    }
    
    const ori = (sta: boolean): void => {
        setBoard(sta)
    }
    const act = (board: boolean): string => {
        if(board)
        {
           return "#0d98ba"
        }else
        {
            return "lightgray"
        }
    }

    console.log(seats)
 
    return (
        <div className={Styles.main}>
            <div className={Styles.left}>
                <div className={Styles.leftbox}>
                  <div className={Styles.leftbox1}></div>
                  <div className={Styles.leftbox2}>
                      <div className={Styles.leftbox21}><p>Lower</p>
                      <img src="https://images.railyatri.in/ry_images_prod/steering-1589359175.png" height="32px" alt="x"/>
                      </div>                      
                  </div>
                  <div className={Styles.leftbox3}>
                      <div>
                      {seats?.map((itm: any) => { return (itm.seatBerth == "lower")? (
                           <Seat 
                           numb={itm.seatNumber}
                           seatNumber={itm.seatNumber}
                           seatStatus={itm.seatStatus}
                           seatType={itm.seatType}
                           seatId={itm._id}
                           setSeatid={setSeatid}
                           />
                      ):("")
                       })}  
                      </div>
                      <div className={Styles.corri}></div>
                      <div className={Styles.corri1}>
                      {seats?.map((itm: any) => { return (itm.seatBerth == "lower" && itm.seatType == "sleeper")? (
                           <Sleeper 
                           numb={itm.seatNumber}
                           seatNumber={itm.seatNumber}
                           seatStatus={itm.seatStatus}
                           seatType={itm.seatType}
                           seatId={itm._id}
                           setSeatid={setSeatid}
                           />
                      ):("")
                       })}  
                      </div>
                     
                  </div>
                </div>
                <div className={Styles.leftbox}>
                  <div className={Styles.leftbox1}></div>
                  <div className={Styles.leftbox2}>
                  <div className={Styles.leftbox21}><p>Upper</p>
                  </div>     
                  </div>
                  <div className={Styles.leftbox3}>
                      <div>
                      {seats?.map((itm: any) => { return (itm.seatBerth == "upper" && itm.seatType == "sleeper")? (
                           <Sleeper 
                           numb={itm.seatNumber}
                           seatNumber={itm.seatNumber}
                           seatStatus={itm.seatStatus}
                           seatType={itm.seatType}
                           seatId={itm._id}
                           setSeatid={setSeatid}
                           />
                      ):("")
                       })}  
                      </div>
                      {/* <div className={Styles.corri}></div>
                      <div className={Styles.corri1}></div> */}
                  
                  </div>
                </div> 
            </div>
            <div className={Styles.right}>
                <div className={Styles.righttop}>
                    <div className={Styles.righttopbox} style={{borderBottom:`2px solid ${act(!board)}`}} onClick={() => ori(false)}>
                        <h4>Boarding Point</h4>
                        <p>{origin}</p>
                    </div>
                    <div className={Styles.righttopbox}  style={{borderBottom:`2px solid ${act(board)}`}} onClick={() => ori(true)}>
                         <h4>Dropping Point</h4>
                         <p>{desti}</p>
                    </div>
                </div>
                <div className={Styles.rightbottom}>
                {!board? (
                    <div className={Styles.rightbottombox}>
                        <input type="radio" checked={true} name="" id="" className={Styles.rightbottomcheck}/>
                        <h4>{origin}</h4>
                        <p>{origintime}</p>
                    </div>  
                ):(
                    <div className={Styles.rightbottombox}>
                         <input type="radio" checked={true} name="" id="" className={Styles.rightbottomcheck}/>
                         <h4>{desti}</h4>
                         <p>{destitime}</p>
                    </div>  
                )} 
                </div>

                <div className={Styles.rightbottom1}>
                  <p>{`₹${priceSeater}`}</p>
                    <div className={Styles.cont}>
                        <p onClick={handleDrawerOpen} >Continue Booking</p>
                    </div>
                </div>

                <PaymentDrawer 
                open={open} 
                handleDrawerClose={handleDrawerClose} 
                boardingPoint={origin}
                dropingPoint={desti}
                boardingTime={origintime}
                seatId={seatid}
                seatFare={priceSeater }/>

            </div>
            
        </div>
    )
}

export default Booking
