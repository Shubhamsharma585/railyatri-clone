import React from 'react'

import { Route, Switch, Redirect } from 'react-router-dom'
import LandingPage from '../Components/landingPage/LandingPage'

export default function Routes() {
    return (
        <div>
            <Switch>
                <Route exact path="/">
                    <Redirect to='/bus-booking' />
                </Route>
                <Route path="/bus-booking">
                    <LandingPage />
                </Route>
            </Switch>
        </div>
    )
}