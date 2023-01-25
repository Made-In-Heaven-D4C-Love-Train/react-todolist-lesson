import React, { useState } from 'react';
import "./TodoListBasic.css";
const TodoListBasic = () => {
    
   const [value, setValue] = useState<string>("");
   const [toDoList, setToDoList] = useState<string[]>([]);
   const [inProgressList, setInProgressList] = useState<string[]>([]);
   const [DoneList, setDoneList] = useState<string[]>([]);
   const [category, setCategory] = useState<string>("");
   
   const handleChange = (e: React.ChangeEvent<HTMLSelectElement>) =>{
     setCategory(e.target.value);
   }
   const handleAdd = (e: React.ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value);
   }
   const handleClick = () => {
    console.log(category);
    if(category === "" || category === "to-do") setToDoList(prev => [...prev, value]);
    else if(category === "in-progress") setInProgressList(prev => [...prev, value]);
    else setDoneList(prev => [...prev, value]);
};

    return <>
    
    <label>To do :</label>
    <input type="text" value={value} onChange={handleAdd} />
    
    <select onChange={handleChange}>
    <option value="to-do" selected={true}>To do</option>
    <option value="in-progress">In progress</option>
    <option value="done">Done</option>
    </select>
    <button onClick={handleClick}>Add</button><br /><br />


    <table>
                    <tr>
                        <td>To do</td>
                        <td>In progress</td>
                        <td>Done</td>
                    </tr>
                    <tr>
                        <td>{toDoList.map((toDo, index) => (<p key={index}>{toDo}</p>))}</td>
                        <td>{inProgressList.map((inProgress, index) => (<p key={index}>{inProgress}</p>))}</td>
                        <td>{DoneList.map((done, index) => (<p key={index}>{done}</p>))}</td>
                    </tr>
                </table>
    </>
};

export default TodoListBasic;