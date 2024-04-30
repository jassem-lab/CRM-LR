import * as React from "react";
import { Navigate, createBrowserRouter } from 'react-router-dom';
import {Login} from './Views/Login'
import { Signup } from './Views/Signup';
import { Users } from './Views/Users';
import { Notfound } from './Views/Notfound';
import { DefaultLayout } from "./components/DefaultLayout";
import { GuestLayout } from "./components/GuestLayout";
import { Dashboard } from "./Views/Dashboard";
const router = createBrowserRouter([
   
    {
        path : '/',
        element : <DefaultLayout/>,
        children : [
            {
                path : '/',
                element : <Navigate to="/users" />
            },
            {
                path : '/dashboard',
                element : <Dashboard/>
            },
            {
                path : '/users',
                element : <Users/>
            },
        ]
    },
    {
        path : '/',
        element : <GuestLayout/>,
        children : [
            {
                path : '/signup',
                element : <Signup/>
            },
            {
                path : '/login',
                element : <Login/>
            },
        ]
    },
    {
        path : '*',
        element : <Notfound/>
    },
])

export default router ;