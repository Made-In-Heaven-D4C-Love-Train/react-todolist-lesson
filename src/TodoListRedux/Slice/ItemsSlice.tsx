import { createSlice } from '@reduxjs/toolkit';

interface State {
    items: Item[];
}

export interface Item {
    id: string;
    columnId: string;
    label: string;
}

const randomId = () => (Math.random() + 1).toString(36).substring(7);

export const ItemsSlice = createSlice({
    name: 'ItemsSlice',
    initialState: {
        items: [],
    },
    reducers: {
        setItems: (state: State, action: { payload: Item[] }) => {
            state.items = action.payload;
        },
        addItem: (state: State, action: { payload: { newItemName: string, newItemColumn: string } }) => {
            const newItem = {
                id: randomId(),
                label: action.payload.newItemName,
                columnId: action.payload.newItemColumn,
            };
    
            
            state.items.push(newItem);
        },
        deleteItem: (state: State, action: { payload: string  }) => {
            const index = state.items.findIndex((col) => col.label === action.payload);
            console.log(index);
            if (index !== -1) {
                state.items.splice(index, 1);
            }
        },
    },
});

export const { setItems, addItem, deleteItem } = ItemsSlice.actions;

export default ItemsSlice.reducer;