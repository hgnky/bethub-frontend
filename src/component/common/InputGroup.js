import { Styles } from "./styles"

const InputGroup = ({ icon, placeholder }) => {
    return (
        <Styles>
            <div className="input-group d-flex px-2">
                <i className={icon} />
                <input type="text" placeholder={placeholder} className="form-control background-transparent color-white" />
            </div>
        </Styles>
    )
}

export default InputGroup