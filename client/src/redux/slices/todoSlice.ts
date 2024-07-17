import { createSlice, PayloadAction } from '@reduxjs/toolkit';
interface Task {
    id: string;
    category: string;
    title: string;
    description: string;
}

interface Category {
    id: string;
    name: string;
}

interface TodoState {
    tasks: Task[];
    category: Category[];
}

const initialState: TodoState = {
    tasks: [],
    category: [],
};

const todoSlice = createSlice({
    name: 'todo',
    initialState,
    reducers: {
        addTask: (state, action: PayloadAction<Task>) => {
            state.tasks.push(action.payload);
        },
        addCategory: (state, action: PayloadAction<Category>) => {
            state.category.push(action.payload);
        },
        setTask: (state, action: PayloadAction<Task[]>) => {
            state.tasks = action.payload;
        },
        setCategory: (state, action: PayloadAction<Category[]>) => {
            state.category = action.payload;
        },
    },
});

export const { addTask, addCategory, setTask, setCategory } = todoSlice.actions;

export default todoSlice.reducer;
