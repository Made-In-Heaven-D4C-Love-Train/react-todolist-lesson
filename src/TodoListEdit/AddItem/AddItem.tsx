import React, { ChangeEvent } from "react";
import { Col, Row, Input, Button, Select} from "antd"

interface ColumnInterface {
    value: string;
    label: string;
}
interface AddItemInterface
{
    handleOnItemNameChange : (e: React.ChangeEvent<HTMLInputElement>) => void,
    newItemName: string,
    handleOnCategoryChange: (e: string) => void,
    newItemColumn: string,
    columns: ColumnInterface[],
    handleOnClickNewItem: () => void
}

const AddItem = (
    {
        handleOnItemNameChange,
        newItemName,
        handleOnCategoryChange,
        newItemColumn,
        columns,
        handleOnClickNewItem


    } : AddItemInterface) =>
    {
        return <>
        <div className="todo-list-with-design-add-item">
                <Input
                    placeholder="Item name"
                    onChange={handleOnItemNameChange}
                    value={newItemName}
                />

                <Select
                    placeholder="Select column"
                    onChange={handleOnCategoryChange}
                    value={newItemColumn}
                    options={columns}
                />

                <Button
                    disabled={!newItemName?.length || !newItemColumn}
                    onClick={handleOnClickNewItem}
                >
                    Add Item
                </Button>
            </div>
        
        </>
    }

export default AddItem;