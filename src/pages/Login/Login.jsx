import './Login.scss';
import { useState } from 'react';

export default ({ settab }) => {
    const [showPassword, setShowPassword] = useState(false);
    const [remember, setremember] = useState(false);
    const togglePasswordVisibility = () => {
        setShowPassword(!showPassword);
    };

    return (
        <div className='Login'>
            <div className='Login__form'>
                <h3>Welcome Back!</h3>
                <p className='Login__form-desc'>We are excited to have your back. Log in now and access your account.</p>
                <form action="form" className='Login__form-form'>
                    <input type="email" placeholder='ExampleUserName@gmail.com' />

                    <div className="Login__form-form-container">
                        <input
                            type={showPassword ? "text" : "password"}
                            placeholder='Password'
                        />
                        <button
                            type="button"
                            onClick={togglePasswordVisibility}
                            className="Login__form-form-container-btn"
                        >
                            {showPassword ? <img src="./img/showpassword.svg" alt="" /> : <img src="./img/showpassword.svg" alt="" />}
                        </button>
                    </div>
                    <div className='Login__form-form-inner'>
                        <div className='Login__form-form-inner-check_block' onClick={() => { setremember(!remember) }}>
                            <div className={`Login__form-form-inner-check ${remember && 'Login__form-form-inner-check_checked'}`}>
                                <img src="/img/check.svg" alt="" />
                            </div>
                            <div>Remember Me</div>
                        </div>
                        <a href="#" onClick={() => settab("Forgot")}>Forgot Your Password?</a>
                    </div>
                    <button type='#' className='Login__form-form-btn'>Log In</button>
                </form>
            </div>
            <div className='Login__description'>
                <a>Don’t have an account yet? <span onClick={() => settab("Register")}>Register</span></a>
                <a>Contact Support</a>
            </div>
        </div>
    );
};
