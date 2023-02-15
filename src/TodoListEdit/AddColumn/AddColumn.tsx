import React from "react";
import { Col, Row, Input, Button} from "antd"

interface AddColumnInterface
{
    handleOnChangeNewColumnName : (e: React.ChangeEvent<HTMLInputElement>) => void,
    newColumnName: string,
    handleOnClickNewColumn: () => void
}

const AddColumn = 
(
{
    handleOnChangeNewColumnName,
    newColumnName,
    handleOnClickNewColumn
}: AddColumnInterface) =>
{
    return <>
    <div className="todo-list-with-design-add-column">
        <Input
            placeholder="Column name"
            onChange={handleOnChangeNewColumnName}
            value={newColumnName}
        />

        <Button
            disabled={!newColumnName?.length}
            onClick={handleOnClickNewColumn}
        >
            Add column
        </Button>
    </div>
    </>
}

export default AddColumn;