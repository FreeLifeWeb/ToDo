import React from 'react';
import styles from './styles.module.css';

interface IProps extends React.InputHTMLAttributes<HTMLInputElement> {}

const MyInput = ({ ...props }: IProps) => {
    return <input {...props} className={styles.myInput} />;
};

export default MyInput;
