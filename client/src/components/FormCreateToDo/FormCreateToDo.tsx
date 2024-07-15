import React, { useState } from 'react';
import MyInput from '../../UI/MyInput/MyInput';
import { MyButton } from '../../UI/MyButton/MyButton';
import styles from './styles.module.css';
import { setInStore } from '../../helpers/saveInStore';
import { formValidation } from '../../helpers/formValidation';
import { MyModal } from '../../UI/Modal/MyModal';

export interface IInput {
    category: string;
    title: string;
    description: string;
}

export const FormCreateToDo = () => {
    const [input, setInput] = useState<IInput>({
        category: '',
        title: '',
        description: '',
    });
    const [noInputData, setNoInputData] = useState<string>('');
    const [isModalOpen, setIsModalOpen] = useState<boolean>(false);

    function changeHandler(e: React.ChangeEvent<HTMLInputElement>) {
        setInput({ ...input, [e.target.name]: e.target.value });
        if (noInputData) {
            setNoInputData('');
        }
    }

    function openModal() {
        setIsModalOpen(true);
    }

    function closeModal() {
        setIsModalOpen(false);
    }

    function submitHandler(e: React.FormEvent<HTMLFormElement>) {
        e.preventDefault();
        if (!formValidation(input)) {
            setNoInputData('Вы не ввели данные!');
        } else {
            setNoInputData('');
            setInStore({ key: 'todo', data: input });
            openModal();
            setInput({ category: '', title: '', description: '' });
        }
    }
    return (
        <>
            <form className={styles.inputBlock} onSubmit={submitHandler}>
                <MyInput
                    name="category"
                    id="categoryId"
                    value={input.category}
                    type="text"
                    placeholder="Enter category..."
                    onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                        changeHandler(e)
                    }
                />
                <MyInput
                    name="title"
                    id="titleId"
                    value={input.title}
                    type="text"
                    placeholder="Enter title..."
                    onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                        changeHandler(e)
                    }
                />
                <MyInput
                    name="description"
                    id="descriptionId"
                    value={input.description}
                    type="text"
                    placeholder="Enter description..."
                    onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                        changeHandler(e)
                    }
                />
                {noInputData && (
                    <span style={{ color: 'red' }}>{noInputData}</span>
                )}

                <MyButton type="submit">Создать</MyButton>
            </form>
            <MyModal isModalOpen={isModalOpen} onClose={closeModal}>
                Все успешно добавлено!
            </MyModal>
        </>
    );
};
