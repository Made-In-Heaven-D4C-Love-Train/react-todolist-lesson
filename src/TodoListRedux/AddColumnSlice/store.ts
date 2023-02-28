import { configureStore } from '@reduxjs/toolkit';
import ColumnsSlice from './ColumnsSlice';


export default configureStore({
    reducer: {
        ColumnsSlice: ColumnsSlice,
    },
});
