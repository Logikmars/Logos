import './Forgot.scss';
export default ({ settab }) => {return (
    <div className='Forgot'>
        <h3 className='Forgot__title'>Reset Password</h3>
        <p className='Forgot__description'>Type your authorised email address to receive reset password link.</p>
        <form action="#" className='Forgot__form'>
            <input type="email" placeholder='Email Address'/>
            <button onClick={() => settab("Verify")}>Send Reset Password Link</button>
        </form>
        <div className='Forgot__footer'>
            <a>Contact Support</a>
        </div>
    </div>
)}