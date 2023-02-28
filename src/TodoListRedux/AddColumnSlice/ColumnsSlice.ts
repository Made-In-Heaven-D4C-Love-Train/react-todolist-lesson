import { createSlice } from '@reduxjs/toolkit';

interface State {
    columns: Column[];
}

export interface Column {
    value: string;
    label: string;
}

const randomId = () => (Math.random() + 1).toString(36).substring(7);

export const ColumnsSlice = createSlice({
    name: 'ColumnsSlice',
    initialState: {
        columns: [],
    },
    reducers: {
        setColumns: (state: State, action: { payload: Column[] }) => {
            state.columns = action.payload;
        },
        addColumn: (state: State, action: { payload: string }) => {
            const newColumn = {
                value: randomId(),
                label: action.payload,
            };
            
            state.columns.push(newColumn);
        },
        // editColumn: (state: State, action: { payload: { id: string, label: string } }) => {
        //     const index = state.columns.findIndex((col) => col.value === action.payload.id);
        //     if (index !== -1) {
        //         state.columns[index].label = action.payload.label;
        //     }
        // },
        deleteColumn: (state: State, action: { payload: string  }) => {
            const index = state.columns.findIndex((col) => col.label === action.payload);
            console.log(index);
            if (index !== -1) {
                state.columns.splice(index, 1);
            }
        },
    },
});

export const { setColumns, addColumn, deleteColumn } = ColumnsSlice.actions;

export default ColumnsSlice.reducer;