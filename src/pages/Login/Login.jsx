import { Link } from 'react-router-dom';
import InputBlock from '../../components/InputBlock/InputBlock';
import './Login.scss';
import { useState } from 'react';

export default () => {
    const [showPassword, setShowPassword] = useState(false);
    const [remember, setremember] = useState(false);
    const togglePasswordVisibility = () => {
        setShowPassword(!showPassword);
    };

    return (
        <div className='Login'>
            <div className='Login_balancer'></div>
            <div className='Login_content'>
                <h3 className='Login__title'>Welcome Back!</h3>
                <p className='Login__description'>We are excited to have your back. Log in now and access your account.</p>
                <div className='Login__form'>
                    <form action="form" className='Login__form-form'>
                        <InputBlock placeholder={'ExampleUserName@gmail.com'} type={'email'} />
                        <InputBlock placeholder={'Password'} type={'password'} />
                        <div className='Login__form-form-inner'>
                            <div className='Login__form-form-inner-check_block' onClick={() => { setremember(!remember) }}>
                                <div className={`Login__form-form-inner-check ${remember && 'Login__form-form-inner-check_checked'}`}>
                                    <img src="/img/check.svg" alt="" />
                                </div>
                                <div className='Login__form-form-inner-check-rem'>Remember Me</div>
                            </div>
                            <Link to={"/Forgot"}>Forgot Your Password?</Link>
                        </div>
                        <button type='#' className='Login__form-form-btn'>Log In</button>
                    </form>
                </div>
            </div>

            <div className='Login__footer'>
                <Link to={'/Register'} >Don't have an account yet? <span>Register</span></Link>
                <a href="#">Contact Support</a>
            </div>
        </div>
    );
};
