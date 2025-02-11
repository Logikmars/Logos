import './Register.scss';
import { useState } from 'react';
export default ({ settab }) => {

    const [showPassword, setShowPassword] = useState(false);

    const togglePasswordVisibility = () => {
        setShowPassword(!showPassword);
    };

    return (
        <div className='Register'>
            <div className='Register_balancer'></div>
            <div className='Register_content'>
                <h3 className='Register__title'>
                    Register
                </h3>
                <p className='Register__description'>
                    Ready to become part of the exclusive club? Fill in the details below, and let the journey begin!
                </p>
                <form action="#" onSubmit={(e) => {
                    e.stopPropagation()
                }} className='Register__form'>
                    <input type="text" placeholder='Name' />
                    <input type="email" placeholder='Email Address' />
                    <div className="Login__form-form-container">
                        <input
                            type={showPassword ? "text" : "password"}
                            placeholder='Password'
                        />
                        <button
                            type="button"
                            onClick={togglePasswordVisibility}
                            className="Login__form-form-container-btn Register__btn"
                        >
                            {showPassword ? <img src="./img/showpassword.svg" alt="" /> : <img src="./img/showpassword.svg" alt="" />}
                        </button>
                    </div>
                    <div className="Login__form-form-container">
                        <input
                            type={showPassword ? "text" : "password"}
                            placeholder='Password'
                        />
                        <button
                            type="button"
                            onClick={togglePasswordVisibility}
                            className="Login__form-form-container-btn Register__btn"
                        >
                            {showPassword ? <img src="./img/showpassword.svg" alt="" /> : <img src="./img/showpassword.svg" alt="" />}
                        </button>
                    </div>
                    <button className='Register__form-btn'>Register</button>
                </form>
            </div>

            <div className='Register__footer'>
                <a href="#">Already have an account? <span onClick={() => settab("Login")}>Log In</span></a>
                <a href="#">Contact Support</a>
            </div>
        </div>
    )
}