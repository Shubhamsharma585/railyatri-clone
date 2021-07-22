import React from 'react'
<<<<<<< HEAD
import { Route, Switch } from 'react-router-dom'
import Buses from "../Components/Buses/Buses"



export default function Routes() 
{
    
    return (
        <div>
            <Switch>
                <Route path="/" exact>
                 <Buses/>
               </Route>
=======
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
>>>>>>> f7b077d2dcd77d7feb02d5ea86777453478c59a0
            </Switch>
        </div>
    )
}