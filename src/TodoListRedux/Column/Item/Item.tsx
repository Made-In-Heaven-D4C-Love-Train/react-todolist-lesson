import React from 'react';
import { CloseOutlined, EditOutlined } from '@ant-design/icons';
import { List, Button } from 'antd';
import { useDispatch } from 'react-redux';
import { deleteItem } from '../../Slice/ItemsSlice';

interface ItemInterface {
    label: string;
    id: string;
    onEditItem(): void;
}

const Item = ({ label, id, onEditItem }: ItemInterface) => {
    const dispatch = useDispatch();

    const HandleOnDeleteItem = () => {
       //onClickNewColumn(newColumnName);
       dispatch(deleteItem(label));
   };
    return (
        <List.Item className="todo-list-edit-item">
            {label}
            <div className="todo-list-edit-item-action">
                <Button
                    type="primary"
                    size="small"
                    icon={<EditOutlined />}
                    onClick={onEditItem}
                />
                <Button
                    type="primary"
                    danger
                    size="small"
                    icon={<CloseOutlined />}
                    onClick={HandleOnDeleteItem}
                />
            </div>
        </List.Item>
    );
};

export default Item;
