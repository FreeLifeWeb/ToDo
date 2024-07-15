interface IProps<T> {
    key: string;
    data: T;
}

export function setInStore<T>({ key, data }: IProps<T>) {
    const existingData = JSON.parse(localStorage.getItem(key) || '[]') as T[];

    existingData.push(data);

    localStorage.setItem(key, JSON.stringify(existingData));
}

export function getInStore<T>(key: string): T[] {
    const data = localStorage.getItem(key);
    if (!data) {
        return [];
    }
    return JSON.parse(data) as T[];
}

export function setUserInStore<T>({ key, data }: IProps<T>): string | void {
    const existingData = JSON.parse(localStorage.getItem(key) || '[]') as T[];
    const userExists = existingData.some(
        (el: any) => el.email === (data as any).email
    );
    if (userExists) {
        return 'Есть такой аккаунт, перейдите в форму Логина!';
    }
    existingData.push(data);

    localStorage.setItem(key, JSON.stringify(existingData));
}
