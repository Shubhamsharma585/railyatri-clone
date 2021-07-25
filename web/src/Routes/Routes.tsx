import React from 'react';
import { Route, Switch, Redirect } from 'react-router-dom'
import LandingPage from '../Components/landingPage/LandingPage'
import Buses from "../Components/Buses/Buses"

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
                <Route path="/search" exact>
                 <Buses/>
               </Route>
            </Switch>
        </div>
    )
}