import { FormCreateToDo } from '../components/FormCreateToDo/FormCreateToDo';
import { RegistrOrLogin } from '../components/RegistrOrLogin/RegistrOrLogin';

export const privetRouter = [
    { path: '/home', element: FormCreateToDo },
    { path: '/work', element: FormCreateToDo },
    { path: '/magazine', element: FormCreateToDo },
];

export const publicRouter = [
    { path: '/registration', element: RegistrOrLogin },
];
