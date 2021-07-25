import React from 'react'
import Styles from "./Buses.module.css"
import BuseStop from "./Busestop"
import BuseCard from "./Busecard"
import Searchbar from "./Searchbar"
import Box from "./Box"
import Lounge from "./Lounge"
import Booking from "./Booking"
import { useAppSelector, useAppDispatch } from "../hooks"
import { fetchingbuses } from '../../Redux/Buses/action'


function Buses() {

 
    const allbuses = useAppSelector(state => state.bus)
    const dispatch = useAppDispatch()
    // dispatch(fetchingbuses({})

    

    var n = 45;
    var sta="Jaipur"
    var end="Delhi"

    var cat = ["AC", "SLEEPER"]
    var desti="Gopal Wadi"
    var origin="Ganesh Pet"
    var durationh="44"
    var durationm="25"
    var origintime="21:00"
    var destitime="17:25"
    var price="100"

    interface Iseats {
        num: number,
        status: string
    }
    interface Ibus {
        total: number,
        seats: Iseats[]
    }

    let bus: Ibus
   bus = {
        total: 50,
        seats: [{ num: 1, status: "booked"},{ num: 2, status: "vacant"}]
    }




    return (
        <div>

            <div className={Styles.logo}>
           <div className={Styles.logo1}>
               <div style={{margin:"25px", marginLeft:"50px"}}> <img src="https://www.railyatri.in/_next/image?url=https%3A%2F%2Fimages.railyatri.in%2Fry_images_prod%2FIC-LogoHorizontal2x-min-1611241993.png&w=320&q=75" alt="logo" width="290px" height="30px"/>
               </div>          
             <div className={Styles.logo12}>
                 <p>Bus Tickets</p>
                 <p>Get Free Rides</p>
                 <div className={Styles.signin}> <img src="https://www.railyatri.in/_next/image?url=https%3A%2F%2Fimages.railyatri.in%2Fry_images_prod%2Favatar-1594795644.png&w=32&q=75" height="20px" alt="avtr" /><p style={{marginTop:"0px", marginLeft:"10px"}}>Sign In</p></div>
             </div>
           </div>
           <div className={Styles.logo2}>
               <p>Home</p>
               <p>Bus Booking</p>
               <p style={{border:"0px", color:"black"}}>{`${sta} To ${end} Buses`}</p>
           </div>
            </div>
            <div className={Styles.search}>
               <Searchbar/>
            </div>
           

            <div className={Styles.main}>
                <BuseStop/>
                <div className={Styles.topadd}>
                    <Lounge/>
                </div>

                <div className={Styles.container} >
                   <div className={Styles.left}>
                      <p style={{textAlign:"left", marginLeft:"15px"}}>Filter Your Search</p>
                      <hr/>
                      <p style={{textAlign:"left", marginLeft:"15px"}}>Departure Time</p>
                      <div className={Styles.leftcontainer}>
                      <Box>AM to PM</Box>
                      <Box>PM to AM</Box>
                      </div>

                      <p style={{textAlign:"left", marginLeft:"15px"}}>Bus Fare</p>
                      <div className={Styles.leftcontainer}>
                      <Box>High to Low</Box>
                      <Box>Low to High</Box>
                      </div>
                      <p style={{textAlign:"left", marginLeft:"15px"}}>Bus Type</p>
                      <div className={Styles.leftcontainer} style={{borderBottom:"0px"}}>
                      <Box>AC</Box>
                      <Box>Sleeper</Box>
                      <Box>Luxury</Box>
                      <Box>Seater</Box>
                      <Box>Top Rated</Box>
                      </div>

                     
                   </div>

                   <div className={Styles.right}>
                       <h4 >{`${n} Other Buses`}</h4>
                       <BuseCard 
                       company="erere" 
                       catg={cat}
                       origin={origin}
                       desti={desti}
                       durationh={durationh}
                       durationm={durationm}
                       origintime={origintime}
                       destitime={destitime}
                       price={price}
                       seatAvail={"7"}
                       />
                       <BuseCard 
                       
                       company="Tyughgjghjgjh" 
                       catg={cat}
                       origin={origin}
                       desti={desti}
                       durationh={durationh}
                       durationm={durationm}
                       origintime={origintime}
                       destitime={destitime}
                       price={price}
                       seatAvail={"7"}/>
                       <BuseCard 
                       company="HJKHKJJK HJHKHJK" 
                       catg={cat}
                       origin={origin}
                       desti={desti}
                       durationh={durationh}
                       durationm={durationm}
                       origintime={origintime}
                       destitime={destitime}
                       price={price}
                       seatAvail={"7"}
                       />
                         <BuseCard 
                       company="HJKHKJJK HJHKHJK" 
                       catg={cat}
                       origin={origin}
                       desti={desti}
                       durationh={durationh}
                       durationm={durationm}
                       origintime={origintime}
                       destitime={destitime}
                       price={price}
                       seatAvail={"7"}
                       />
                         <BuseCard 
                       company="HJKHKJJK HJHKHJK" 
                       catg={cat}
                       origin={origin}
                       desti={desti}
                       durationh={durationh}
                       durationm={durationm}
                       origintime={origintime}
                       destitime={destitime}
                       price={price}
                       seatAvail={"7"}
                       />
                       <Booking origin={origin} desti={desti} origintime={origintime} destitime={destitime} bus={bus}/>


                      
                   </div>
                </div>
            </div>
        </div>
    )
}

export default Buses;
 