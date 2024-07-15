import { IInput } from '../components/FormCreateToDo/FormCreateToDo';

export function formValidation(input: IInput) {
    const { category, title, description } = input;

    if (
        category.trim() === '' ||
        title.trim() === '' ||
        description.trim() === ''
    ) {
        return false;
    }
    return true;
}
