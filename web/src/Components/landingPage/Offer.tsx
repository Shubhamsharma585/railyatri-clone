import React from 'react'
import Carousel from 'react-elastic-carousel'
import { FaAngleLeft, FaAngleRight } from "react-icons/fa";
import './Offer.css'

class Offer extends React.Component {
    carousel: any
    Carousel: any
    render() {
        return (
            <div style={{ minWidth: "550px" }}>
                <div className="leftright">
                    <div style={{display:"flex",alignItems:"center"}}>
                        <h4 className="h4">Offers</h4>
                        <span style={{color:"#000000B3"}}>You are special for us</span>
                    </div>
                    <div style={{display:"flex",alignItems:"center"}}>
                        <button className="btn" onClick={() => this.carousel.slidePrev()}> <FaAngleLeft /> </button>
                        <span style={{ color: "#ccc", fontSize: "25px", fontWeight: "bold" }}>|</span>
                        <button className="btn" onClick={() => this.carousel.slideNext()}><FaAngleRight /></button>
                    </div>
                </div>
                <hr />
                <Carousel itemsToShow={3} ref={ref => (this.carousel = ref)}>
                    <img style={{ width: "165px" }} src="https://images.railyatri.in/ry_images_prod/WelcomeOfferIcon-1-1615233062.jpg" alt="" />
                    <img style={{ width: "165px", height: "165px" }} src="https://images.railyatri.in/ry_images_prod/RETURN100-is-live-icon-1586962387.jpg" alt="" />
                    <img src="" alt="" />
                </Carousel>
            </div>
        )
    }
}

export default Offer
