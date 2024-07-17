import React from 'react';
import { Navigate, Outlet } from 'react-router-dom';

interface IProps {
    isAuth: boolean;
}

export const PublicRoute = ({ isAuth }: IProps) => {
    return isAuth ? <Navigate to="/" replace /> : <Outlet />;
};
