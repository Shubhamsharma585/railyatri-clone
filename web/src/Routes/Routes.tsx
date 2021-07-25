import React from 'react';
import { Route, Switch, Redirect } from 'react-router-dom'
import LandingPage from '../Components/landingPage/LandingPage'
import Buses from "../Components/Buses/Buses"
import SignIn from '../Components/AdminPanel/SignIn/SignIn';
import { AdminPanel } from '../Components/AdminPanel/Admin';
import { PrivateRoute } from './PrivateRoute';

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
                <Route path='/admin/login'>
                    <SignIn />
                </Route>
                <PrivateRoute path='/addBus' exact={true} >
                    <AdminPanel />
                </PrivateRoute>
            </Switch>
        </div >
    )
}