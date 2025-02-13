import { useState } from 'react';
import InputBlock from '../../components/InputBlock/InputBlock';
// import inputStore from '../../stores/inputStore';
import resetPasswordStore from '../../stores/resetPasswordStore';
import './Forgot.scss';
import { observer } from "mobx-react-lite";
import { Link } from 'react-router-dom';


const Forgot = observer(() => {
    const [email, setemail] = useState('');

    return (
        <div className='Forgot'>
            <div className='Forgot_balancer'></div>
            <div className='Forgot_content'>
                <h3 className='Forgot__title'>Reset Password</h3>
                <p className='Forgot__description'>Type your authorised email address to receive reset password link.</p>
                <form action="#" className='Forgot__form' onSubmit={(e) => {
                    e.stopPropagation()
                }}>
                    <InputBlock
                        placeholder={'Email Address'}
                        type={'email'}
                        value={email}
                        setvalue={setemail}
                    />
                    <Link to={'/Verify'} onClick={() => {
                        resetPasswordStore.setEmail(email)
                    }}>Send Reset Password Link</Link>
                </form>
            </div>

            <div className='Forgot__footer'>
                <a>Contact Support</a>
            </div>
        </div>
    );
});

export default Forgot;