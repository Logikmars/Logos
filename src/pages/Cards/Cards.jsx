import './Cards.scss';
import CardItem from './Cards/CardItem';
export default () => {return (
    <div className='Cards'>
        <div className='Cards_balancer'></div>
        <h3 className='Cards__title'>Crypto Debit Cards</h3>
        <p className='Cards__description'>We provide a secure , feature-rich platform that simplifies the investment process and opens doors to new possibilities in the crypto market</p>
        <p className='Cards__join'>Join The Waitlist!</p>
        <div className='Cards__container'>
            <input type="email" placeholder='Example@gmail.com'/>
            <button>Sign Up <img src="../../../img/buttonWhitepapper.svg" alt="" /></button>
        </div>
        <div className='Cards__item'>
            <CardItem />
            <div className='Cards__item-choise'>
                <img src="../../../img/Welcome/mouse.svg" alt="" className='Cards__item-choise-mouse'/>
                <img src="../../../img/Welcome/Arrows.svg" alt="" className='Cards__item-choise-arrows'/>
                <div className='Cards__item-choise-choise'>
                    <a href="#" className='inactive'>TRUMP</a>
                    <a href="#" className='inactive'>PNUT</a>
                    <a href="#" className='activeVisa'>PEPE</a>
                    <a href="#" className='inactive2'>MUMU</a>
                    <a href="#" className='inactive2'>PEPE</a>
                </div>
            </div>
        </div>
    </div>
)}