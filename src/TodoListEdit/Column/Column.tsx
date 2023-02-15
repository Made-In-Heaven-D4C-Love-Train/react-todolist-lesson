import { List } from "antd";
import React, { useState } from 'react';
import Header from "./Header";
import Item from "./Item";
import TodoListEdit from "..";
interface ItemInterface {
    id: string;
    columnId: string;
    label: string;
}

interface ColumnInterface2{
    value: string,
    columnItems: ItemInterface[],
    showModal: (idEdit: string) => void,
    handleOnDeleteItem: (id: string) => void,
    labelHeader: string,
    showModalColumn: (idEdit: string) => void,
    id: string,
    handleOnDeleteCollumn : (valueToRemove : string) => void,

}

const Column = (
    
    {
        value,
        columnItems,
        showModal,
        labelHeader,
        showModalColumn,
        handleOnDeleteItem,
        handleOnDeleteCollumn

    }: ColumnInterface2) => {
    
        
     
  

    // function handleOnDeleteItem(id: string): (id: string) => void {
    //     throw new Error("Function not implemented.");
    // }

    return <>
    <List
    className="todo-list-with-design-column"
    key={value}
    header={
        <Header 
        label={labelHeader}
        showModalColumn={() => showModalColumn(value)}
        handleOnDeleteCollumn= {() => handleOnDeleteCollumn(value)}
        value=""
        />
       
    }
    dataSource={columnItems}
    renderItem={({label, id}) => (
        <Item
        label={label}
        showModal = {() => showModal(id)}
        handleOnDeleteItem = {()=>handleOnDeleteItem(id)}
        id={id}
        />
    )}
    />
    
    </>
    
}

export default Column;









//<Item label={label} showModal={showModal} handleOnDeleteItem={handleOnDeleteItem} id={''}/>