import React, { useState } from 'react';
import './TodolistWithDesign.css'
import {
    Button,
    Input,
    Select,
    List
  } from 'antd';
import { CloseOutlined } from '@ant-design/icons';
  const TodoListWithDesign = () => {
    const [data, setData] = useState<{ name: string, items: { id: string, name: string }[] }[]>([]);
    const [columnValue, setColumnValue] = useState<string>("");
    const [itemValue, setItemValue] = useState<string>("");
    const [selectValue, setSelectValue] = useState<string>("");

    const randomId = () => (Math.random() + 1).toString(36).substring(7);

    const handleAdd = (e: React.ChangeEvent<HTMLInputElement>) => {
      setColumnValue(e.target.value);
      console.log(columnValue);
     }

     const handleClick = () => {
      for(var i=0;i<data.length;i++){
        if(data[i].name === columnValue) return;
      }
      setData(prev => [...prev, { name: columnValue, items: [] }]);
      setColumnValue('');
      console.log(data)
    };

  const  handleChange = (e: string) => {
    setSelectValue(e);
  }
  const handleAddItem = (e: React.ChangeEvent<HTMLInputElement>) => {
    if(selectValue !== "") setItemValue(e.target.value)
  }

  const handleAddItemClick = () => {
    if (itemValue === '' || selectValue === '') return;
  
    const columnIndex = data.findIndex(data => data.name === selectValue); 
    if (columnIndex === -1) return;

    const id = randomId();

    setData(prev => {
      const newData = [...prev];
      newData[columnIndex].items.push({ id, name: itemValue }); 
      return newData;
    });
    setItemValue('');
  };

  const handleRemoveItem = (columnName: string, item: string) => {
    const columnIndex = data.findIndex(data => data.name === columnName);
    if (columnIndex === -1) return;
  
    setData(prev => {
      const newData = [...prev];
      newData[columnIndex].items = newData[columnIndex].items.filter(
        i => i.id !== item
      );
      return newData;
    });
  };

    return <>
    <div>
    <div className="create-item">
        <Input className='input_submit' value={columnValue} placeholder='Column name' onChange={handleAdd} />
        <Button className='bouton_submit' disabled={!columnValue.length} onClick={handleClick}  type="primary">Add column</Button>
      <br/>
    </div>
    <div className="create-item">
    <Input className='input_submit' value={itemValue} defaultValue="" placeholder='Item name' onChange={handleAddItem} />
    <Select
      defaultValue=""
      style={{ width: 130 }}
    onSelect={handleChange}
      options={[
        {value: "", label: "Select column"},
        ...data.map(column => ({ value: column.name, label: column.name }))
      ]}
      
    />
    <Button className='bouton_submit' onClick={handleAddItemClick} disabled={!itemValue.length}  type="primary">Add item</Button>
    </div>
    <div className='affiche-liste'>
    {data.map(column => (
  <List
        key={column.name}
        header={column.name}
        bordered
        dataSource={column.items}
        renderItem={item => <> <div className='affiche-item'> <List.Item>{item.name}</List.Item>
        <Button onClick={() => handleRemoveItem(column.name, item.id)}><CloseOutlined/></Button> </div></>
        } />
        
))}
    
</div>
    </div>
    </>
  };

  export default TodoListWithDesign;


  // Il faut d'abord selectionner la colonne dans la liste deroulante avant de pouvoir saisir l'item
  // Il n'est pas possible de creer deux colonnes qui portent le meme nom