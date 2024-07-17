import { CategoryTasks } from '../components/CategoryTasks/CategoryTasks';
import { FormCreateToDo } from '../components/FormCreateToDo/FormCreateToDo';
import { RegistrOrLogin } from '../components/RegistrOrLogin/RegistrOrLogin';

export const privetRouter = [
    { path: '/', element: FormCreateToDo },
    { path: '/category/:categoryId', element: CategoryTasks },
];

export const publicRouter = [
    { path: '/registration', element: RegistrOrLogin },
];
