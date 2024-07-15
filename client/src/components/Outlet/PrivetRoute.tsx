import React from 'react';
import { Navigate, Outlet } from 'react-router-dom';

interface IProps {
    isAuth: boolean;
}

export const PrivateRoute = ({ isAuth }: IProps) => {
    return isAuth ? <Outlet /> : <Navigate to="./registration" replace />;
};
