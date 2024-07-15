import React, { useEffect } from 'react';
import { Header } from './pages/Header/Header';
import styles from './styles.module.css';
import { Main } from './pages/Main/Main';
import { getInStore } from './helpers/saveInStore';
import { useDispatch, useSelector } from 'react-redux';
import { setAuthFromStorage } from './redux/slices/authSlice';
import { RootState } from './redux/store';

interface IUser {
    name: string;
    email: string;
    password: string;
}

export const App = () => {
    const dispatch = useDispatch();

    useEffect(() => {
        const userInStore = getInStore<IUser>('user') || [];
        console.log('userInStore', userInStore);
        if (userInStore && userInStore.length > 0) {
            dispatch(setAuthFromStorage(userInStore[0]));
        }
    }, [dispatch]);

    const user = useSelector((store: RootState) => store.auth.user);

    return (
        <div className={styles.container}>
            <Header name={user?.name} />
            <Main />
        </div>
    );
};
