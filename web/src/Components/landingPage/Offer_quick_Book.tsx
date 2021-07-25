import React from 'react'
import Offer from './Offer'
import './Offer.css'
import QuickBook from './QuickBook'

function Offer_quick_Book() {
    return (
        <div className="Offer__Div">
            {/* <div> */}
                <div>
                    <Offer />
                </div>

                <div>
                    <QuickBook />
                </div>
            </div>

        // </div>
    )
}

export default Offer_quick_Book
