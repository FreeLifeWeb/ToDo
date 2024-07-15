interface IProps {
    name: string;
    email: string;
    password: string;
}

export function registrValidate(data: IProps) {
    const { name, email, password } = data;
    if (name.trim() === '' || email.trim() === '' || password.trim() === '') {
        return false;
    }
    return true;
}
