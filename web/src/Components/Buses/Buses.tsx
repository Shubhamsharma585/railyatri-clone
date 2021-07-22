import React from 'react'
import Styles from "./Buses.module.css"
import BuseStop from "./Busestop"
import BuseCard from "./Busecard"
import Searchbar from "./Searchbar"
import Box from "./Box"

function Buses() {


    var n = 45;
    var cat = ["AC", "SLEEPER"]
    var desti="mumbai"
    var duration="5hrs"
    var origintime="5654"
    var destitime="566"
    var price="100"



    return (
        <div>

            <br/><br/><br/><br/>
            <div className={Styles.search}>
                 <Searchbar/>
            </div>
           

            <div className={Styles.main}>
                <BuseStop/>
                <div className={Styles.topadd}>Lounge</div>
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
                       duration={duration}
                       origintime={origintime}
                       destitime={destitime}
                       price={price}
                       seatAvail={"7"}
                       />
                       <BuseCard 
                       
                       company="erere" 
                       catg={cat}
                       origin={origin}
                       desti={desti}
                       duration={duration}
                       origintime={origintime}
                       destitime={destitime}
                       price={price}
                       seatAvail={"7"}/>
                       <BuseCard 
                       company="erere" 
                       catg={cat}
                       origin={origin}
                       desti={desti}
                       duration={duration}
                       origintime={origintime}
                       destitime={destitime}
                       price={price}
                       seatAvail={"7"}
                       />
                      
                   </div>
                </div>
            </div>
        </div>
    )
}

export default Buses;
 