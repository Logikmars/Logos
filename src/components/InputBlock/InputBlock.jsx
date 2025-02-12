import './InputBlock.scss';
import { useState } from 'react';
import { observer } from "mobx-react-lite";

const InputBlock = observer(({ placeholder, type, value, setvalue }) => {
    const [showPassword, setShowPassword] = useState(false);

    const togglePasswordVisibility = () => {
        setShowPassword(!showPassword);
    };

    return (
        <div className='InputBlock'>
            <input
                type={type === "password" && showPassword ? "text" : type}
                placeholder={placeholder}
                className='InputBlock__input'
                value={value}
                onChange={(e) => setvalue(e.target.value)}
            />
            {type === "password" && (
                <button
                    type="button"
                    onClick={togglePasswordVisibility}
                    className="InputBlock__btn"
                >
                    {showPassword ? (
                        <img src="./img/showpassword.svg" alt="" />
                    ) : (
                        <img src="./img/showpassword.svg" alt="" />
                    )}
                </button>
            )}
        </div>
    );
});

export default InputBlock;
