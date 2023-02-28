import { Input, Button } from 'antd';
import React, { useState } from 'react';
import { addColumn } from '../AddColumnSlice/ColumnsSlice'
import { useDispatch } from 'react-redux';



const AddColumn = () => {
    const [newColumnName, setColumnName] = useState<string>('');

    const dispatch = useDispatch();


    const handleOnColumnNameChange = (
        e: React.ChangeEvent<HTMLInputElement>
    ) => {
        setColumnName(e.target.value);
    };

    const handleOnClickNewColumn = () => {
        //onClickNewColumn(newColumnName);
        dispatch(addColumn(newColumnName));
        setColumnName('');
    };

    return (
        <div className="todo-list-edit-add-column">
            <Input
                placeholder="Column name"
                onChange={handleOnColumnNameChange}
                value={newColumnName}
            />

            <Button
                disabled={!newColumnName.length}
                onClick={handleOnClickNewColumn}
            >
                Add column
            </Button>
        </div>
    );
};

export default AddColumn;
