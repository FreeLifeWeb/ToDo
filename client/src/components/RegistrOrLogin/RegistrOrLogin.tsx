import React, { useState } from 'react';
import MyInput from '../../UI/MyInput/MyInput';
import styles from './styles.module.css';
import { MyButton } from '../../UI/MyButton/MyButton';
import { registrValidate } from '../../helpers/registrValidate';
import { setInStore, setUserInStore } from '../../helpers/saveInStore';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { login } from '../../redux/slices/authSlice';

interface IProps {
    name: string;
    email: string;
    password: string;
}
export const RegistrOrLogin = () => {
    const [form, setForm] = useState<IProps>({
        name: '',
        email: '',
        password: '',
    });
    const [noFormData, setNoFormData] = useState<string>('');
    const [regOrLogin, setRegOrLogin] = useState<boolean>(false);
    const navigate = useNavigate();
    const dispatch = useDispatch();

    function toggleRegOrLog() {
        setRegOrLogin((prev) => !prev);
    }

    function chengeHandler(e: React.ChangeEvent<HTMLInputElement>) {
        setForm({
            ...form,
            [e.target.name]: e.target.value,
        });
        if (noFormData) {
            setNoFormData('');
        }
    }

    function registrSubmitHandler(e: React.FormEvent<HTMLFormElement>) {
        e.preventDefault();
        if (!registrValidate(form)) {
            setNoFormData('Вы не заполнили все поля!');
            return;
        }
        const result = setUserInStore({ key: 'user', data: form });
        if (typeof result === 'string') {
            setNoFormData(result);
            return;
        }
        dispatch(login(form));
        setForm({ name: '', email: '', password: '' });
        navigate('/');
    }
    return (
        <div className={styles.registrBorder}>
            <form
                className={styles.registrBlock}
                onSubmit={registrSubmitHandler}
            >
                {regOrLogin ? (
                    <>
                        <MyInput
                            name="email"
                            id="emailId"
                            value={form.email}
                            type="email"
                            placeholder="Your email..."
                            onChange={(
                                e: React.ChangeEvent<HTMLInputElement>
                            ) => chengeHandler(e)}
                        />
                        <MyInput
                            name="password"
                            id="passwordId"
                            value={form.password}
                            type="password"
                            placeholder="Your password..."
                            onChange={(
                                e: React.ChangeEvent<HTMLInputElement>
                            ) => chengeHandler(e)}
                        />
                        {noFormData && (
                            <span style={{ color: 'red' }}>{noFormData}</span>
                        )}
                    </>
                ) : (
                    <>
                        <MyInput
                            name="name"
                            id="nameId"
                            value={form.name}
                            type="text"
                            placeholder="Your name..."
                            onChange={(
                                e: React.ChangeEvent<HTMLInputElement>
                            ) => chengeHandler(e)}
                        />
                        <MyInput
                            name="email"
                            id="emailId"
                            value={form.email}
                            type="email"
                            placeholder="Your email..."
                            onChange={(
                                e: React.ChangeEvent<HTMLInputElement>
                            ) => chengeHandler(e)}
                        />
                        <MyInput
                            name="password"
                            id="passwordId"
                            value={form.password}
                            type="password"
                            placeholder="Your password..."
                            onChange={(
                                e: React.ChangeEvent<HTMLInputElement>
                            ) => chengeHandler(e)}
                        />
                        {noFormData && (
                            <span style={{ color: 'red' }}>{noFormData}</span>
                        )}
                    </>
                )}
                <div className={styles.regOrLog}>
                    <span style={{ color: 'white' }}>
                        {regOrLogin ? 'Registration' : 'Login'}
                    </span>
                </div>
                <div className={styles.blockToggle}>
                    <MyButton type="submit">
                        {regOrLogin ? 'Login' : 'Registration'}
                    </MyButton>
                    <label className={styles.switch}>
                        <input type="checkbox" />
                        <span
                            className={styles.slider}
                            onClick={toggleRegOrLog}
                        ></span>
                    </label>
                </div>
            </form>
        </div>
    );
};
