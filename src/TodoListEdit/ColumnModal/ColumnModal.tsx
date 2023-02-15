import { Input, Modal } from "antd";

interface ColumnModal
{
    isModalCollumOpen: boolean
    handleOkCollum: () => void,
    handleCancelCollum: () => void,
    handleOnColumnEdit : (e: React.ChangeEvent<HTMLInputElement>)=>void;
    
}


const ColumnModal = ({
    isModalCollumOpen,
    handleOkCollum,
    handleCancelCollum,
    handleOnColumnEdit
    

} : ColumnModal) => {
 return <>
 <Modal title="Basic Modal" open={isModalCollumOpen} onOk={handleOkCollum} onCancel={handleCancelCollum}>
        <Input placeholder="" onChange={handleOnColumnEdit}/>
      </Modal>
 </>
}

export default ColumnModal;