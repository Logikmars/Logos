import { useEffect, useState } from 'react';
import './Cards.scss';
import CardItem from './Cards/CardItem';

import { useGSAP } from '@gsap/react';
import { useRef } from 'react';
import gsap from 'gsap';

const chels = ['TRUMP', 'PNUT', 'PEPE', 'MUMU', 'POPCAT']
const chelsX3 = [...chels, ...chels, ...chels]

export default () => {
    const [showColoredCards, setshowColoredCards] = useState(false);

    useEffect(() => {
        if (showColoredCards) {
            const delayModifier = .2
            const baseDelay = .5

            const elements = [6, 5, 3, 1, 2, 4]; // Убедимся, что массив определён
            if (!Array.isArray(elements) || elements.length === 0) return; // Проверяем, что это массив

            elements.forEach((element, index) => {
                gsap.fromTo(`.Cards__decor_colored_${element}`, {
                    y: 1000,
                }, {
                    y: 0,
                    delay: baseDelay + delayModifier * index,
                    duration: .5
                })
            });

            gsap.to(`.Cards__description`, {
                text: `For the top 100,000 participants in our airdrop campaign, Logos Layer is offering the chance to pre-order a Logos Visa Card. Designed for crypto-native spending, these cards enable seamless payments anywhere Visa is accepted.
Every transaction has the potential for random rewards, including:
Rare NFTs from top collections like BAYC and Pudgy Penguins.
Airdrops of memecoins and Logos tokens.
Exclusive discounts and bonuses within the Logos ecosystem.
Users can earn passive rewards simply by using their card for everyday purchases.`,
                delay: 2,
                duration: 2
            })
            gsap.to(`.Cards__join_span`, {
                text: `Participate in the airdrop today:`,
                delay: 3,
                duration: 1
            })
            gsap.to(`.Cards__join_a`, {
                text: `https://t.me/LogosLayer_bot`,
                delay: 3,
                duration: 1
            })




        }
    }, [showColoredCards])

    const app = useRef(null)

    useGSAP(
        () => {
            gsap.fromTo(`.Cards__decor`, {
                y: 200,
                opacity: 0,
            }, {
                y: 0,
                opacity: 1,
                delay: .4,
                duration: .6
            })
        },
        { scope: app }
    )
    return (
        <div className='Cards' ref={app}>
            <div className='Cards_balancer'></div>
            <div className='Cards_content'>

                <h3 className='Cards__title'>Crypto Debit Cards</h3>
                <p className='Cards__description'>
                    We provide a secure, feature-rich platform that simplifies the investment process to onbaord the masses into web3, removing barriers. Our multi-chain transactions process between 100 milliseconds and 5 seconds, ensuring every trade, transfer, and payment happens in real time.
                </p>
                <p className='Cards__join'><span className='Cards__join_span'>Join The Waitlist!</span><a className='Cards__join_a' href="https://t.me/LogosLayer_bot" target='blank'></a></p>
                <div className='Cards__container'>
                    <input type="email" placeholder='Example@gmail.com' />
                    <button>Sign Up <img src="../../../img/buttonWhitepapper.svg" alt="" /></button>
                </div>
            </div>
            <div className='Cards__decor'>
                <div className='Cards__decor_black' onClick={() => { setshowColoredCards(true) }} style={{
                    opacity: showColoredCards ? 0 : 1,
                    pointerEvents: showColoredCards ? 'none' : 'all'
                }}>
                    <div className='Cards__decor_card free_img'>
                        <img src="/card.svg" alt="" />
                    </div>
                    <div className='Cards__decor_mouse free_img'>
                        <img src="/img/Welcome/mouse.svg" alt="" />
                    </div>
                    <div className='Cards__item-choise free_img'>
                        <div className='Cards__item-choise_inner'>
                            {
                                chelsX3.map((chel, index) => {
                                    return <div className='Cards__item-choise_element' style={{
                                        letterSpacing: chel.length > 4 ? -1.7 : 0
                                    }}>{chel}</div>
                                })
                            }
                        </div>
                    </div>
                </div>
                <div className='Cards__decor_colored' style={{
                    opacity: showColoredCards ? 1 : 0
                }}>
                    {Array(6)
                        .fill(0)
                        .map((_, index) => {
                            return <div className={`Cards__decor_colored_item Cards__decor_colored_${index + 1} free_img`} style={{
                                zIndex: (index + 1) * 5
                            }}>
                                <div className='Cards__decor_colored_item_inner'>
                                    <img src={`/cards/${index + 1}.webp`} alt="" />
                                </div>
                            </div>
                        })}

                </div>

            </div>
        </div>
    )
}