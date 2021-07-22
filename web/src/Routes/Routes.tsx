import React from 'react'
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
            </Switch>
        </div>
    )
}