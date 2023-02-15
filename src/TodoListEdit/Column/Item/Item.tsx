import { CloseOutlined, FormOutlined } from "@ant-design/icons";
import { Button, List } from "antd";

interface ItemInterface2{
    label: string,
    showModal: (idEdit: string) => void
    handleOnDeleteItem: (id: string) => void,
    id: string
}

const Item = ({
    label,
    showModal,
    handleOnDeleteItem,
    id
}: ItemInterface2) => {
    return <>
    <List.Item className="todo-list-with-design-item">
                                    {label}
                                <div>
                                <Button
                                        type="primary"
                                        className='logo'
                                        size="small"
                                        icon={<FormOutlined />}
                                        onClick={() => showModal(id)}
                                    />
                                     <Button
                                        type="primary"
                                        className='logo'
                                        danger
                                        size="small"
                                        icon={<CloseOutlined />}
                                        onClick={() => handleOnDeleteItem(id)}
                                    />
                                </div>
                            
                                </List.Item>
    </>
}

export default Item;