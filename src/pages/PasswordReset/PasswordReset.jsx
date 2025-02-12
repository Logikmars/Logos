import InputBlock from '../../components/InputBlock/InputBlock';
import './PasswordReset.scss';

export default () => {return (
    <div className='PasswordReset'>
        <div className='PasswordReset_balancer'></div>
        <div className='PasswordReset_content'>
            <h3 className='PasswordReset__title'>Create Password</h3>
            <p className='PasswordReset__description'>Type your new strong password. Your password must include: One capital letter & one small letter at least, One special character & Minimum 8 digits long.</p>
            <form action="#" className='PasswordReset__form' onSubmit={(e) => {
                    e.stopPropagation()
                }}>
                <InputBlock placeholder={'Password'} type={'password'} />
                <InputBlock placeholder={'Confirm Password'} type={'password'} />
                <button onClick={() => settab("Verify")} className='PasswordReset__form-btn'>Confirm Changes</button>
            </form>
        </div>
        <div className='PasswordReset__footer'>
            <a>Contact Support</a>
        </div>
    </div>
)}