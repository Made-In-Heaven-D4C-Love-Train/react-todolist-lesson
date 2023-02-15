import React, { useState } from 'react';
import { Button, Modal, Input, List, Select } from 'antd';
import './TodoListEdit.css';
import { CloseOutlined, FormOutlined } from '@ant-design/icons';
import AddColumn from './AddColumn';
import AddItem from './AddItem';
import Column from './Column';
import ColumnModal from './ColumnModal';
import ItemModal from './ItemModal';
import Header from './Column/Header';
import Item from './Column/Item';
import { idText } from 'typescript';

interface ColumnInterface {
    value: string;
    label: string;
}
interface ItemInterface {
    id: string;
    columnId: string;
    label: string;
}

const TodoListWithEdit = () => {
    const [columns, setColumns] = useState<ColumnInterface[]>([]);
    const [items, setItems] = useState<ItemInterface[]>([]);
    const [newItemName, setNewItemName] = useState<string>('');
    const [newColumnName, setColumnName] = useState<string>('');
    const [newItemColumn, setNewItemColumn] = useState<string>('');
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [isModalCollumOpen, setIsModalCollumOpen] = useState(false);

    const [IDcolumn, setIdColumn] = useState<string>('');
    const [nomColumn, setNomColumn] = useState<string>('');
    const [IDItem, setIdItem] = useState<string>('');
    const [nomItem, setnomItem] = useState<string>('');



    const randomId = () => (Math.random() + 1).toString(36).substring(7);
    const handleOnItemNameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setNewItemName(e.target.value);
    };

    const handleOnColumnNameChange = (
        e: React.ChangeEvent<HTMLInputElement>
    ) => {
        setColumnName(e.target.value);
    };

    const handleOnCategoryChange = (newValue: string) => {
        setNewItemColumn(newValue);
    };

    const handleOnClickNewColumn = () => {
        if (newColumnName) {
            const newColumn = {
                value: randomId(),
                label: newColumnName,
            };

            setColumns([...columns, newColumn]);
        }
    };

    const handleOnClickNewItem = () => {
        if (newItemColumn) {
            const newItem = {
                id: randomId(),
                label: newItemName,
                columnId: newItemColumn,
            };

            setItems([...items, newItem]);

            setNewItemName('');
            
        }
    };

    const getColumnItems = (columnIdSelected: string) => {
        return items.filter(({ columnId }) => columnId === columnIdSelected);
    };

    const handleOnDeleteItem = (idToRemove: string) => {
        setItems(items.filter(({ id }) => id !== idToRemove));
    };
    const showModal = (e: string) => {
        setIdItem(e);
        setIsModalOpen(true);
      };
      const showModalCollum = (e: string) => {
        setIdColumn(e);
        setIsModalCollumOpen(true);
      };

      const handleOkCollum = () => {
        console.log(IDcolumn);
        console.log(nomColumn);
        for(let i = 0; i < columns.length; i++) {
            if(columns[i].value === IDcolumn) {
                columns[i].label = nomColumn;
                setColumns(columns);
            }
        }

        setIsModalCollumOpen(false);
        
      };

      const handleCancelCollum = () => {
        setIsModalCollumOpen(false);
        
      };
    
      const handleOk = () => {
        console.log(IDItem);
        console.log(nomItem);
        for(let i = 0; i < items.length; i++) {
            if(items[i].id === IDItem) {
                items[i].label = nomItem;
                setItems(items);
            }
        }

        setIsModalOpen(false);
      };

      
    
      const handleCancel = () => {
        setIsModalOpen(false);
      };

      
      const handleOnDeleteCollumn = (valueToRemove: string) => {
        setColumns(columns.filter(({ value }) => value !== valueToRemove));
    };

    const handleOnColumnEdit = (
        e: React.ChangeEvent<HTMLInputElement>
    ) => {
        setNomColumn(e.target.value);
    };

    const handleOnItemEdit = (
        e: React.ChangeEvent<HTMLInputElement>
    ) => {
        setnomItem(e.target.value);
    };
   

    return (
        <div className="todo-list-with-design">
            
            <AddColumn handleOnChangeNewColumnName  = {handleOnColumnNameChange}
                newColumnName = {newColumnName}
                handleOnClickNewColumn = {handleOnClickNewColumn}/>

            <AddItem
            handleOnItemNameChange = {handleOnItemNameChange}
            newItemName = {newItemName}
            handleOnCategoryChange = {handleOnCategoryChange}
            newItemColumn = {newItemColumn}
            columns = {columns}
            handleOnClickNewItem = {handleOnClickNewItem}
            />

            <div className="todo-list-with-design-columns">
                {columns.map(({ value, label }) => {
                    const columnItems = getColumnItems(value);

                    return (
                       <Column
                            columnItems={columnItems}
                            value={value}
                            showModal={showModal}
                            showModalColumn={showModalCollum}

                            labelHeader={label} 
                            handleOnDeleteItem={handleOnDeleteItem}
                            handleOnDeleteCollumn = {handleOnDeleteCollumn}
                           id=""                      
                       />
                    );
                })}
            </div>
            <ColumnModal
            isModalCollumOpen = {isModalCollumOpen}
            handleOkCollum = {handleOkCollum}
            handleCancelCollum = {handleCancelCollum}
            handleOnColumnEdit={handleOnColumnEdit}
            />
            <ItemModal
            isModalOpen = {isModalOpen}
            handleOk = {handleOk}
            handleCancel = {handleCancel}
            handleOnItemEdit = {handleOnItemEdit}
            />
        </div>
    );
};

export default TodoListWithEdit;
