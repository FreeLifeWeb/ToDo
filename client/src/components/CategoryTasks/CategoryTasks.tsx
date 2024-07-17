import React, { useMemo } from 'react';
import styles from './styles.module.css';
import { useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { RootState } from '../../redux/store';

export const CategoryTasks = () => {
    const { categoryId } = useParams<{ categoryId: string }>();
    const tasks = useSelector((state: RootState) => state.todo.tasks);

    const filteredTasks = useMemo(() => {
        return tasks.filter((el) => el.category === categoryId);
    }, [tasks, categoryId]);

    return (
        <div className={styles.listWrapper}>
            <h2 className={styles.listTitle}>
                Task for category: {categoryId}
            </h2>
            <ul className={styles.list}>
                {filteredTasks.map((task) => (
                    <li key={task.id} className={styles.listItem}>
                        {task.description}
                    </li>
                ))}
            </ul>
        </div>
    );
};
