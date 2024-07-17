import React, { useEffect } from 'react';
import { Header } from './pages/Header/Header';
import styles from './styles.module.css';
import { Main } from './pages/Main/Main';
import { getInStore } from './helpers/saveInStore';
import { useDispatch, useSelector } from 'react-redux';
import { setAuthFromStorage } from './redux/slices/authSlice';
import { RootState } from './redux/store';
import { setCategory, setTask } from './redux/slices/todoSlice';

interface IUser {
    name: string;
    email: string;
    password: string;
}

interface Category {
    id: string;
    name: string;
}

interface Task {
    id: string;
    category: string;
    title: string;
    description: string;
}

export const App = () => {
    const dispatch = useDispatch();

    useEffect(() => {
        const userInStore = getInStore<IUser>('user') || [];
        if (userInStore && userInStore.length > 0) {
            dispatch(setAuthFromStorage(userInStore[0]));
        }
    }, [dispatch]);

    useEffect(() => {
        const categoryInStore = getInStore<Category>('categores');
        if (categoryInStore.length > 0) {
            dispatch(setCategory(categoryInStore));
        }
    }, [dispatch]);

    useEffect(() => {
        const taskInStore = getInStore<Task>('tasks');
        if (taskInStore.length > 0) {
            dispatch(setTask(taskInStore));
        }
    }, [dispatch]);

    useEffect(() => {
        const userInStore = getInStore<IUser>('user') || [];
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
