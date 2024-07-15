import React from 'react';
import styles from './styles.module.css';
import AppRoutes from '../../components/AppRoutes/AppRoutes';

export const Main = () => {
    return (
        <div className={styles.main}>
            <AppRoutes />
        </div>
    );
};
