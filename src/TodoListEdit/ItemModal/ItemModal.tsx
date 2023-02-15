import { Input, Modal } from "antd";

interface ItemModalInterface
{
    isModalOpen: boolean,
    handleOk: () => void,
    handleCancel: () => void
    handleOnItemEdit : (e: React.ChangeEvent<HTMLInputElement>)=>void;
}


const ItemModal = ({
    isModalOpen,
    handleOk,
    handleCancel,
    handleOnItemEdit

} : ItemModalInterface) => {
 return <>
 <Modal title="Basic Modal" open={isModalOpen} onOk={handleOk} onCancel={handleCancel}>
        <Input placeholder="" onChange={handleOnItemEdit}/>
      </Modal>
 </>
}

export default ItemModal;