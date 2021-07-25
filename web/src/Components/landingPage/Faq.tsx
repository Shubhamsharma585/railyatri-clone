import React from 'react'

function Faq() {
    return (
        <div style={{ width: "85%", margin: "auto",marginBottom:"30px" }}>
            <h1 style={{ textAlign: "left", color: "#333333", fontSize: "24px" }}>FAQ</h1>
            <div style={{marginBottom:"10px"}}> 
                <p style={{ color: "#000", fontSize: "14px", fontWeight: "bold", textAlign: "left", margin: "0" }}>Q1) Why should I book bus tickets with IntrCity SmartBus?</p>
                <p style={{ color: "#717171", fontSize: "14px", textAlign: "left", margin: "0" }}><span style={{color: "#000",fontWeight: "bold"}}>A:</span> IntrCity SmartBus gives you an end to end travel experience, we assist you at every step of your journey. Our trained professional drivers, Bus captains, in-bus washrooms, safety features and comfortable sleeper seats, give you the best and most on-time travel experience. Go ahead and book your tickets on InterCity SmartBus website or on mobile app.</p>
            </div>
            <div style={{marginBottom:"10px"}}>
                <p style={{ color: "#000", fontSize: "14px", fontWeight: "bold", textAlign: "left", margin: "0" }}>Q2) Do I need to carry a printout of the bus ticket?</p>
                <p style={{ color: "#717171", fontSize: "14px", textAlign: "left", margin: "0" }}><span style={{color: "#000",fontWeight: "bold"}}>A:</span> No, not at all! We are known for our active online presence, therefore, our users will securely receive an M-ticket via SMS/WhatsApp and an emailed invoice post ticket booking. You can show the SMS or email and board the bus. We strongly believe in saving paper and travelling smart.</p>
            </div>
            <div style={{marginBottom:"10px"}}>
                <p style={{ color: "#000", fontSize: "14px", fontWeight: "bold", textAlign: "left", margin: "0" }}>Q3) What documents should I carry while boarding SmartBus?</p>
                <p style={{ color: "#717171", fontSize: "14px", textAlign: "left", margin: "0" }}><span style={{color: "#000",fontWeight: "bold"}}>A:</span>At the time of boarding, passengers shall carry any valid identity proof like Driving license, Student ID card, Aadhar Card, Passport, PAN card or Voter ID card.</p>
            </div>
            <div style={{marginBottom:"10px"}}>
                <p style={{ color: "#000", fontSize: "14px", fontWeight: "bold", textAlign: "left", margin: "0" }}>Q4) How do I know if my bus scheduled time or journey route has changed?</p>
                <p style={{ color: "#717171", fontSize: "14px", textAlign: "left", margin: "0" }}><span style={{color: "#000",fontWeight: "bold"}}>A:</span>98% of our SmartBus commence and arrive on time. However, our passengers can track buses online, through the ‘Your Journey Page’ that is sent out via SMS. This page keeps travellers updated and informed about their trip. Travellers also receive a mandatory call & SMS if there are any changes in the bus schedule.</p>
            </div>
            <div style={{marginBottom:"10px"}}>
                <p style={{ color: "#000", fontSize: "14px", fontWeight: "bold", textAlign: "left", margin: "0" }}>Q5) What happens if I do not receive bus ticket booking confirmation on email or SMS/WhatsApp text?</p>
                <p style={{ color: "#717171", fontSize: "14px", textAlign: "left", margin: "0" }}><span style={{color: "#000",fontWeight: "bold"}}>A:</span>No need to panic. We’ve got your back! You can find your ticket in the ‘My Bus Booking’ page by entering your PNR or mobile number.</p>
            </div>
        </div>
    )
}

export default Faq
