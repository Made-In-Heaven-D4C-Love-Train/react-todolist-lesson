import React, { useState } from 'react';
import "./TodoListBasic.css";
const TodoListBasic = () => {
    
   const [toDo, setToDo] = useState<string>("");
   const [inProgress, setInProgress] = useState<string>("");
   const [done, setDone] = useState<string>("");
   const [toDoList, setToDoList] = useState<string[]>([]);
   const [inProgressList, setInProgressList] = useState<string[]>([]);
   const [DoneList, setDoneList] = useState<string[]>([]);

   const handleAddToDo = (e: React.ChangeEvent<HTMLInputElement>) => {
    setToDo(e.target.value);
   }
   const handleClickToDo = () => {
    setToDoList(prev => [...prev, toDo])
};

const handleAddInProgress = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInProgress(e.target.value);
   }
   const handleClickInProgress = () => {
    setInProgressList(prev => [...prev, inProgress])
};

const handleAddDone = (e: React.ChangeEvent<HTMLInputElement>) => {
    setDone(e.target.value);
   }
   const handleClickDone = () => {
    setDoneList(prev => [...prev, done])
};
    return <>
    
    <label>To do :</label>
    <input type="text" value={toDo} onChange={handleAddToDo} />
    <button onClick={handleClickToDo}>Add</button><br /><br />


    <label>In progress :</label>
    <input type="text" value={inProgress} onChange={handleAddInProgress} />
    <button onClick={handleClickInProgress}>Add</button><br /><br />

    <label>Done :</label>
    <input type="text" value={done} onChange={handleAddDone} />
    <button onClick={handleClickDone}>Add</button><br /><br />


    <p>To do :</p>
    <ul>
        {toDoList.map((toDo, index) => (<li key={index}>{toDo}</li>))}
    </ul>
    <p>In progress :</p>
    <ul>
        {inProgressList.map((inProgress, index) => (<li key={index}>{inProgress}</li>))}
    </ul>
    <p>Done:</p>
    <ul>
        {DoneList.map((done, index) => (<li key={index}>{done}</li>))}
    </ul>

    </>
};

export default TodoListBasic;
