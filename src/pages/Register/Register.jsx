import { Link } from 'react-router-dom';
import InputBlock from '../../components/InputBlock/InputBlock';
import './Register.scss';
import { useState } from 'react';
export default () => {

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
                    <InputBlock placeholder={'Name'} type={'text'} />
                    <InputBlock placeholder={'Email Address'} type={'email'} />
                    <InputBlock placeholder={'Password'} type={'password'} />
                    <InputBlock placeholder={'Confirm Password'} type={'password'} />
                    <button className='Register__form-btn'>Register</button>
                </form>
            </div>

            <div className='Register__footer'>
                <Link to={'/Login'}>Already have an account? <span>Log In</span></Link>
                <a href="#">Contact Support</a>
            </div>
        </div>
    )
}