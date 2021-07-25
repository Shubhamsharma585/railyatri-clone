import React from 'react';
import { Route, Switch } from 'react-router-dom'
import LandingPage from '../Components/landingPage/LandingPage'
import Buses from "../Components/Buses/Buses"
import SignIn from '../Components/AdminPanel/SignIn/SignIn';
import { AdminPanel } from '../Components/AdminPanel/Admin';

export default function Routes() {
    return (
        <div>
            <Switch>
                <Route exact path="/">
                    <Buses />
                </Route>
                <Route path="/bus-booking">
                    <LandingPage />
                </Route>
                <Route path="/search" exact>
                    <Buses />
                </Route>
                <Route path='/admin'>
                    <SignIn />
                </Route>
                <Route path='/addBus'>
                    <AdminPanel />
                </Route>
            </Switch>
        </div >
    )
}