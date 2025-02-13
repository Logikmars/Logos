import './Wallet.scss';


import { useGSAP } from '@gsap/react';
import { useRef } from 'react';
import gsap from 'gsap';

export default () => {

    const app = useRef(null)

    useGSAP(
        () => {
            gsap.fromTo(`.Wallet__chat-img`, {
                x: -200,
                opacity: 0,
            }, {
                x: 0,
                opacity: 1,
                delay: .5,
                duration: 1
            })
        },
        { scope: app }
    )

    return (
        <div className='Wallet' ref={app}>
            <div className='Wallet__chat'>
                <div className='Wallet__chat-img'>
                    <img src="./img/Chat.webp" alt="" />
                </div>
            </div>
            <div className='Wallet__description'>
                <h3 className='Wallet__description-title'>Swap, Trade & Move Liquidity Instantly</h3>
                <p className='Wallet__description-description'>No gas fees. No delays. No limits. Just instant cross-chain swaps, AI-powered trading, and full memecoin support—without the headache of native tokens for gas. Whether you’re aping or making serious plays, Bags Wallet functions the way a wallet should. Simple.</p>
                <button className='Wallet__description-btn'>MemeChain <img src="./img/buttonWhitepapper.svg" alt="" /></button>
            </div>
        </div>
    )
}