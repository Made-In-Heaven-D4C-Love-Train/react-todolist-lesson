import { CloseOutlined, FormOutlined } from "@ant-design/icons";
import { Button } from "antd";

interface HeaderInterface {
    label: string,
    showModalColumn: (idEdit: string) => void,
    handleOnDeleteCollumn : (valueToRemove : string) => void,
    value: string

}


const Header = ({
    label,
    showModalColumn,
    handleOnDeleteCollumn,
    value
}: HeaderInterface) => {
    return <>
        <div>

            {label}
            <Button
                type="primary"
                className='logo'
                size="small"
                icon={<FormOutlined />}
                onClick={() => showModalColumn(value)}
            />
            <Button
                type="primary"
                className='logo'
                danger
                size="small"
                icon={<CloseOutlined />}
                onClick={()=>handleOnDeleteCollumn(value)}
            />
        </div>
    </>
}

export default Header;