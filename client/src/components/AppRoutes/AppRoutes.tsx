import React from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';
import { getInStore } from '../../helpers/saveInStore';
import { privetRouter, publicRouter } from '../../Routes/router';
import { PublicRoute } from '../Outlet/PublicRoute';
import { PrivateRoute } from '../Outlet/PrivetRoute';
import { useSelector } from 'react-redux';
import { RootState } from '../../redux/store';

const AppRoutes = () => {
    const isAuth = useSelector((store: RootState) => store.auth.isAuth);
    return (
        <Routes>
            <Route element={<PublicRoute isAuth={isAuth} />}>
                {publicRouter.map((route) => (
                    <Route
                        key={route.path}
                        path={route.path}
                        element={<route.element />}
                    />
                ))}
            </Route>
            <Route element={<PrivateRoute isAuth={isAuth} />}>
                {privetRouter.map((route) => (
                    <Route
                        key={route.path}
                        path={route.path}
                        element={<route.element />}
                    />
                ))}
            </Route>
            <Route
                path="*"
                element={
                    <Navigate to={isAuth ? '/home' : '/registration'} replace />
                }
            />
        </Routes>
    );
};

export default AppRoutes;
