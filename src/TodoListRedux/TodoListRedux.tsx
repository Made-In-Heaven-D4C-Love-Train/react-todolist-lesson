import React, { useState } from 'react';
import AddColumn from './AddColumn/AddColumn';
import AddItem from './AddItem';
import ColumnComp from './Column';
import ColumnModal from './ColumnModal';
import ItemModal from './ItemModal';
import './TodoListEdit.css';
import { Provider, useDispatch, useSelector } from "react-redux";
import { setColumns } from './AddColumnSlice/ColumnsSlice'
import store from './store';
import { setItems } from './Slice/ItemsSlice';
export interface Column {
    value: string;
    label: string;
}

export interface Item {
    id: string;
    columnId: string;
    label: string;
}

const TodoListRedux = () => {
    
    // const [items, setItems] = useState<Item[]>([]);
    const [itemModal, setItemModal] = useState<Item>();
    const [columnModal, setColumnModal] = useState<Column>();
    const dispatch = useDispatch();
    const columns = useSelector((state: any) => state.ColumnsSlice.columns);
    const items = useSelector((state: any) => state.ItemsSlice.items);
    const randomId = () => (Math.random() + 1).toString(36).substring(7);

    // const handleOnClickNewColumn = (newColumnName: string) => {
    //     const newColumn = {
    //         value: randomId(),
    //         label: newColumnName,
    //     };

    //     setColumns([...columns, newColumn]);
    // };

    // const handleOnClickNewColumn = useSelector((state: any) => state.addColumn.onClickNewColumn);

    // const handleOnClickNewItem = (
    //     newItemName: string,
    //     newItemColumn: string
    // ) => {
    //     const newItem = {
    //         id: randomId(),
    //         label: newItemName,
    //         columnId: newItemColumn,
    //     };

    //     setItems([...items, newItem]);
    // };

    const getColumnItems = (columnIdSelected: string) => {
        return items.filter(({ columnId }: { columnId: string }) => columnId === columnIdSelected);
    };

    const handleOnDeleteItem = (idToRemove: string) => {
    //     setItems(items.filter(({ id }) => id !== idToRemove));
     };

    //  const handleOnDeleteColumn = (idToRemove: string) => {
    // //     // setColumns(columns.filter(({ value }) => value !== idToRemove));
    // //     setItems(items.filter(({ columnId }) => columnId !== idToRemove));
    //  };

    const handleOnEditItem = (idItem: string) => {
        // const item = items.find(({ id }) => id === idItem);

        // if (item) {
        //     setItemModal(item);
        // }
        const item = items.find((item: Item) => item.id === idItem);

        if (item) {
            setItemModal(item);
        }
    };

    const handleOnEditColumn = (idColumn: string) => {
        const column = columns.find((column: Column) => column.value === idColumn);

         if (column) {
             setColumnModal(column);
         }
    };

    const handleOnCloseItem = () => {
        setItemModal(undefined);
    };

    const handleOnCloseColumn = () => {
        setColumnModal(undefined);
    };

    const handleOnSaveItem = (newItem: Item) => {
        // setItems(
        //     items.map((item) => (item.id === newItem.id ? newItem : item))
        // );
        dispatch(setItems(items.map((item : Item) =>item.id === newItem.id ? newItem : item)));
        handleOnCloseItem();
    };

    const handleOnSaveColumn = (newColumn: Column) => {
        // setColumns(
        //     columns.map((column) =>
        //         column.value === newColumn.value ? newColumn : column
        //     )
        // );
        dispatch(setColumns(columns.map((column : Column) =>column.value === newColumn.value ? newColumn : column)));
        handleOnCloseColumn();
    };

    return (
        <div className="todo-list-edit">
            <AddColumn/>
            <AddItem />

            <div className="todo-list-edit-columns">
                {columns.map((column: Column) => {
                    const { value, label } = column;
                    const columnItems = getColumnItems(value);

                    return (
                        <ColumnComp
                            value={value}
                            label={label}
                            columnItems={columnItems}
                            onEditItem={handleOnEditItem}
                            onEditColumn={handleOnEditColumn}
                            
                        />
                    );
                })}
            </div>

            <ItemModal
                item={itemModal}
                onCloseItem={handleOnCloseItem}
                onSaveItem={handleOnSaveItem}
                columns={columns}
            />

            <ColumnModal
                column={columnModal}
                onCloseColumn={handleOnCloseColumn}
                onSaveColumn={handleOnSaveColumn}
            />
        </div>
        
    );
};

export default TodoListRedux;
