import React from 'react';
import styles from './styles.module.css';

interface IProps {
    children: React.ReactNode;
}
export const MyTitle = ({ children, ...props }: IProps) => {
    return (
        <h1 className={styles.title} {...props}>
            {children}
        </h1>
    );
};
