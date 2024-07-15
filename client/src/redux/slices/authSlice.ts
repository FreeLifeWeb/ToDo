import { createSlice, PayloadAction } from '@reduxjs/toolkit';
interface IUser {
    name: string;
    email: string;
    password: string;
}

interface AuthState {
    user: IUser | null;
    isAuth: boolean;
}

const initialState: AuthState = {
    user: null,
    isAuth: false,
};

const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        login: (state, action: PayloadAction<IUser>) => {
            state.user = action.payload;
            state.isAuth = true;
        },
        logout: (state) => {
            state.user = null;
            state.isAuth = false;
        },
        setAuthFromStorage: (state, action: PayloadAction<IUser>) => {
            state.user = action.payload;
            state.isAuth = true;
        },
    },
});

export const { login, logout, setAuthFromStorage } = authSlice.actions;

export default authSlice.reducer;
