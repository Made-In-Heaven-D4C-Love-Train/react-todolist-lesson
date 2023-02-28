import React from 'react';
import { List } from 'antd';
import { Item } from '../TodoListRedux';
import ItemComp from './Item';
import Header from './Header';

interface ColumnInterface {
    value: string;
    label: string;
    columnItems: Item[];
    
    onEditItem(id: string): void;
    onEditColumn(id: string): void;
    
}

const Column = ({
    value,
    label,
    columnItems,
    onEditItem,
    onEditColumn,
    
}: ColumnInterface) => {
    return (
        <List
            className="todo-list-edit-column"
            key={value}
            header={
                <Header
                    label={label}
                    onEditColumn={() => onEditColumn(value)}
                   
                />
            }
            dataSource={columnItems}
            renderItem={({ label: itemLabel, id }) => (
                <ItemComp
                    label={itemLabel}
                    id={id}
                    onEditItem={() => onEditItem(id)}
                />
            )}
        />
    );
};

export default Column;
