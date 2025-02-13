import { useEffect, useState } from 'react';
import './Cards.scss';
import CardItem from './Cards/CardItem';


const chels = ['TRUMP', 'PNUT', 'PEPE', 'MUMU', 'PEPE']

export default () => {

    const [chelLighter, setchelLighter] = useState(1);
    let chelLighterInterval;
    useEffect(() => {
        chelLighterInterval = setInterval(() => {
            setchelLighter(prev => prev + 1)
        }, 500);

        return () => {
            clearInterval(chelLighterInterval)
        }
    }, [])


    return (
        <div className='Cards'>
            <div className='Cards_balancer'></div>
            <div className='Cards_content'>

                <h3 className='Cards__title'>Crypto Debit Cards</h3>
                <p className='Cards__description'>We provide a secure , feature-rich platform that simplifies the investment process and opens doors to new possibilities in the crypto market</p>
                <p className='Cards__join'>Join The Waitlist!</p>
                <div className='Cards__container'>
                    <input type="email" placeholder='Example@gmail.com' />
                    <button>Sign Up <img src="../../../img/buttonWhitepapper.svg" alt="" /></button>
                </div>
            </div>
            <div className='Cards__decor'>
                {/* <CardItem /> */}
                <div className='Cards__decor_card free_img'>
                    <img src="/img/Cards/CreditCard.svg" alt="" />
                </div>
                <div className='Cards__item-choise free_img'>
                    <div className='Cards__item-choise_inner'>
                        {
                            chels.map((chel, index) => {
                                return <div className='Cards__item-choise_element' style={{
                                    opacity: chelLighter % chels.length === index ? 1 : .2
                                }}>{chel}</div>
                            })
                        }
                    </div>
                </div>
            </div>
        </div>
    )
}