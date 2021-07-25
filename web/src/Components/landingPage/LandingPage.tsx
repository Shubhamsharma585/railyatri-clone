import React from 'react'
import AppSection from './AppSection'
import Faq from './Faq'
import Home_bus_page from './Home_bus_page'
import IntercityBus from './IntercityBus'
import Nav_bar from './Nav_bar'
import NewlyLaunched from './NewlyLaunched'
import Offer_quick_Book from './Offer_quick_Book'
import OurPromises from './OurPromises'

function LandingPage() {
    return (
        <>
            <Nav_bar />
            <Home_bus_page />
            <Offer_quick_Book />

            <IntercityBus />

            <OurPromises />
            <NewlyLaunched />
            <AppSection />
            <Faq />
        </>
    )
}

export default LandingPage
