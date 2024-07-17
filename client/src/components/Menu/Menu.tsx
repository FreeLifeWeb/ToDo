import React, { useEffect, useState } from 'react';
import styles from './styles.module.css';
import { Link, useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../../redux/store';
import { logout } from '../../redux/slices/authSlice';

export const Menu = () => {
    const categories = useSelector((store: RootState) => store.todo.category);
    const user = useSelector((store: RootState) => store.auth.user);
    const dispatch = useDispatch();
    const navigate = useNavigate();

    function logOut() {
        localStorage.removeItem('user');
        dispatch(logout());
        navigate('/registration');
    }
    return (
        <nav className={styles.listGroupWrapper}>
            <ul className={styles.listGroup}>
                {!user ? (
                    <li className={styles.listItem}>
                        <Link className={styles.listItemLink} to="registration">
                            Registration
                        </Link>
                    </li>
                ) : (
                    <>
                        <li className={styles.listItem}>
                            <Link className={styles.listItemLink} to="/">
                                Add Todo
                            </Link>
                        </li>
                        {categories.map((category) => (
                            <li key={category.id} className={styles.listItem}>
                                <Link
                                    className={styles.listItemLink}
                                    to={`/category/${category.name}`}
                                >
                                    {category.name}
                                </Link>
                            </li>
                        ))}
                        <li className={styles.listItem}>
                            <Link
                                className={styles.listItemLink}
                                to="registration"
                                onClick={logOut}
                            >
                                Logout
                            </Link>
                        </li>
                    </>
                )}
            </ul>
        </nav>
    );
};
