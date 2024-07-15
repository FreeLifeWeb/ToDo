import React from 'react';
import styles from './styles.module.css';
import { MyTitle } from '../../UI/Title/MyTitle';
import { Menu } from '../../components/Menu/Menu';

interface IUser {
    name?: string;
}
export const Header = ({ name }: IUser) => {
    return (
        <header className={styles.header}>
            <MyTitle>
                {name ? `${name} welcome in ToDo Planer` : 'ToDo Planer'}
            </MyTitle>
            <Menu />
        </header>
    );
};
