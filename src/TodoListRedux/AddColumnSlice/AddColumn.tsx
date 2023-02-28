import { Provider, useDispatch, useSelector } from 'react-redux';
import { setColumns, addColumn } from './ColumnsSlice';
import store from './store';
import React, { useState } from 'react';
export default () => {
    return (
        <Provider store={store}>
            <Level0 />
            <Display />
        </Provider>
    );
};

const Display = () => {
    const name = useSelector((state: any) => state.example.name);
    const items = useSelector((state: any) => state.example.items);
    return (<><div>{name}</div><div>
        <ul>
            <li>{items.map((item: string, index: React.Key) => (<p key={index}>{item}</p>))}</li>
        </ul>
    </div></>

    );
};

const Level0 = () => {
    return <Level1 />;
};

const Level1 = () => {
    return <Level2 />;
};

const Level2 = () => {
    return <Level3 />;
};

const Level3 = () => {
    


    const dispatch = useDispatch();
    const name = useSelector((state: any) => state.example.name);
    const items = useSelector((state: any) => state.example.items);
    for(let i=0; i<items.length; i++){
        <p>{items[i]}</p>
        console.log(items)
    }
    const handleOnChange = (e: any) => {
        //dispatch(setName(e.target.value));
    };

    return (
    <div>
    <input value={name} onChange={handleOnChange} />
    </div>
    );
};
