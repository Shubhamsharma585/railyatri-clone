import React from 'react'
import { Redirect, Route } from 'react-router-dom';
import { useAppSelector } from '../Redux/stateHooks';
import { loadData } from '../Utils/localstorage';

interface IPrivateRouteProps {
    children: any;
    path: string;
    exact: boolean;
    redirectPath?: string;
    push?: boolean;
}

export const PrivateRoute = ({children, path, exact=false, redirectPath='/admin/login', push=false}: IPrivateRouteProps) => {

    const isAuth = loadData('isAuth');
    
    return (
        isAuth ? (
            <Route path= {path} exact={exact}>
                {children}
            </Route>
        ) : (
            <Redirect to={redirectPath} push={push} />
        )
    )
}
