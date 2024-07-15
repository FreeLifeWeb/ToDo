import React from 'react';
import styles from './styles.module.css';

interface IProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    children: React.ReactNode;
}
export const MyButton = ({ children, ...props }: IProps) => {
    return (
        <button {...props} className={styles.myButton}>
            {children}
        </button>
    );
};
