import React from "react";
import { Navigate, Outlet } from "react-router-dom";
import { useStateContext } from "../context/ContextProvider";

export const DefaultLayout = () => {
    const {user,token} = useStateContext()
    if(!token){
        return <Navigate to="/login"/>
    }else{
        return <Navigate to="/users"/>
    }
    return (
        <>
            <Outlet />
        </>
    );
};
