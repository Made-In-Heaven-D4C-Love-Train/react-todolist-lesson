import { CloseOutlined, EditOutlined } from '@ant-design/icons';
import { Button } from 'antd';
import React from 'react';
import { deleteColumn } from '../../AddColumnSlice/ColumnsSlice'
import { useDispatch } from 'react-redux';
interface HeaderInterface {
    label: string;
    onEditColumn(): void;
   
}

const Header = ({ label, onEditColumn}: HeaderInterface) => {
    const dispatch = useDispatch();

    const HandleOnDeleteColumn = () => {
       //onClickNewColumn(newColumnName);
       dispatch(deleteColumn(label));
   };

    return (
        <div className="todo-list-column-header">
            {label}

            <Button
                type="primary"
                size="small"
                icon={<EditOutlined />}
                onClick={onEditColumn}
            />

            <Button
                type="primary"
                danger
                size="small"
                icon={<CloseOutlined />}
                onClick={HandleOnDeleteColumn}
            />
        </div>
    );
};

export default Header;
