import { useState } from 'react';
import Description from './Description/Description';
import './Protocols.scss';

import { useGSAP } from '@gsap/react';
import { useRef } from 'react';
import gsap from 'gsap';

export default () => {

    const [activeLine, setActiveLine] = useState(0);


    const app = useRef(null)

    useGSAP(
        () => {
            for (let i = 0; i < 3; i++) {
                gsap.fromTo(`.Description_${i}`, {
                    x: -200,
                    opacity: 0,
                }, {
                    x: 0,
                    opacity: 1,
                    delay: .3 * (i + 1),
                    duration: .6
                })
            }



            gsap.to(`.Protocols_inner`, {
                top: 0, // Убираем любое движение вниз
                scrollTrigger: {
                    trigger: '.Protocols',
                    // markers: true,
                    start: "top top", // Фиксируем при достижении верха
                    end: "bottom top", // Разрешаем выход при конце секции
                    pin: true, // Закрепляем
                    pinSpacing: false, // Отключаем добавление пустого пространства
                    onUpdate: (self) => {
                        const scrollPercent = Math.round(self.progress * 100);
                        if (scrollPercent > 0 && scrollPercent <= 25) {
                            setActiveLine(0)
                            gsap.to('.Description__title_1', {
                                text: `Zero Gas Fees`
                            })
                            gsap.to('.Description__description_1', {
                                text: `Forget about gas fees eating into your profits. Liquid Layer removes transaction fees, allowing traders to move assets without paying network costs. This means more frequent trades, better arbitrage opportunities, and a level playing field for all users.`
                            })
                            gsap.to('.Description__title_2', {
                                text: `Universal Chain Connectivity`
                            })
                            gsap.to('.Description__description_2', {
                                text: `Liquid Layer makes multi-chain trading seamless, enabling effortless transfers across Ethereum, Bitcoin, Solana, and more—no network switching, wrapping, or complex swaps needed.`
                            })
                            gsap.to('.Description__title_3', {
                                text: `Advanced Security`
                            })
                            gsap.to('.Description__description_3', {
                                text: `Security isn't an afterthought—it's built into the foundation of Liquid Layer. Using advanced encryption, real-time monitoring, and the COMET BFT consensus mechanism, transactions are secured at every level, ensuring stability and protection against threats.`
                            })
                        } else if (scrollPercent > 25 && scrollPercent <= 50) {
                            setActiveLine(1)
                            gsap.to('.Description__title_1', {
                                text: `Seamless Integration, Limitless Trading`
                            })
                            gsap.to('.Description__description_1', {
                                text: `Liquid Layer connects with top-tier exchanges, allowing users to execute trades instantly with deep liquidity. Whether you're a casual trader or a high-volume investor, you get seamless access to multiple markets from a single platform.`
                            })
                            gsap.to('.Description__title_2', {
                                text: `One Unified Liquidity Pool`
                            })
                            gsap.to('.Description__description_2', {
                                text: `Liquid Layer connects liquidity across blockchains, ensuring optimal pricing, no slippage, and instant access to assets. No more fragmentation or trapped funds—everything is seamlessly available.`
                            })
                            gsap.to('.Description__title_3', {
                                text: `Seamless User Experience`
                            })
                            gsap.to('.Description__description_3', {
                                text: `Liquid Wallet streamlines crypto with multi-chain management, gasless transactions, and unified liquidity. AI-powered memecoin pets, built with top projects, automate tasks, optimize trades, and make Web3 fun and accessible.`
                            })

                        } else if (scrollPercent > 50 && scrollPercent <= 75) {
                            setActiveLine(2)

                            gsap.to('.Description__title_1', {
                                text: `Visa Cards`
                            })
                            gsap.to('.Description__description_1', {
                                text: `The top 100,000 airdrop participants can pre-order a premium Liquid Visa Card, designed for seamless crypto spending. Combining blockchain innovation with traditional financial flexibility, it can be used anywhere Visa is accepted.`
                            })
                            gsap.to('.Description__title_2', {
                                text: `Exclusive Partnerships & Ecosystem Growth`
                            })
                            gsap.to('.Description__description_2', {
                                text: `Liquid Layer is a movement, expanding Web3 through luxury collaborations like 1:1 memecoin jewelry with GFAL and the UAE, and tech integrations with Ledger and Tamagotchi, driving mainstream adoption and cultural growth.`
                            })
                            gsap.to('.Description__title_3', {
                                text: `Reducing Crypto's Environmental Footprint`
                            })
                            gsap.to('.Description__description_3', {
                                text: `Sustainability is central to Liquid Layer. Our energy-efficient architecture minimizes the environmental impact of blockchain transactions while ensuring high performance, reflecting our commitment to responsible innovation for both the industry and the planet.`
                            })
                        }


                    }
                }
            })

        },
        { scope: app }
    )

    return (
        <div className='Protocols_wrapper' ref={app}>
            <div className='Protocols' >
                <div className='Protocols_inner'>
                    <div className='Protocols__description'>

                        <div className={`Description`} key={`element_desc_vorovskoy`}>
                            <div className='Description__light'>
                                <img src='/img/descriptionLogo.svg' alt="" />
                                <div className='Description__container'>
                                    <h3 className={`Description__title Description__title_1`}>Zero Gas Fees</h3>
                                    <p className={`Description__description Description__description_1`}>Forget about gas fees eating into your profits. Liquid Layer removes transaction fees, allowing traders to move assets without paying network costs. This means more frequent trades, better arbitrage opportunities, and a level playing field for all users.</p>
                                </div>
                            </div>
                        </div>
                        <div className={`Description`} key={`element_desc_vorovskoy`}>
                            <div className='Description__light'>
                                <img src='/img/descriptionLogo.svg' alt="" />
                                <div className='Description__container'>
                                    <h3 className={`Description__title Description__title_2`}>Universal Chain Connectivity</h3>
                                    <p className={`Description__description Description__description_2`}>Liquid Layer makes multi-chain trading seamless, enabling effortless transfers across Ethereum, Bitcoin, Solana, and more—no network switching, wrapping, or complex swaps needed.</p>
                                </div>
                            </div>
                        </div>
                        <div className={`Description`} key={`element_desc_vorovskoy`}>
                            <div className='Description__light'>
                                <img src='/img/descriptionLogo.svg' alt="" />
                                <div className='Description__container'>
                                    <h3 className={`Description__title Description__title_3`}>Advanced Security</h3>
                                    <p className={`Description__description Description__description_3`}>Security isn`t an afterthought—it`s built into the foundation of Liquid Layer. Using advanced encryption, real-time monitoring, and the COMET BFT consensus mechanism, transactions are secured at every level, ensuring stability and protection against threats.</p>
                                </div>
                            </div>
                        </div>



                    </div>
                    <div className='Protocols__line'>
                        {[0, 1, 2].map((index) => (
                            <span
                                key={index}
                                className={`Protocols__line-dot ${activeLine === index ? 'activeDot' : ''}`}
                            ></span>
                        ))}
                    </div>
                    <div className='Protocols__feauteres'>
                        <h3 className='Protocols__feauteres-title'>Seamless <br /> Protocol Features</h3>
                        <p className='Protocols__feauteres-description'>Liquid Layer enables seamless multi-chain trading with zero gas fees, unified liquidity, and top-tier security. Integrated with major exchanges and AI-powered tools, it offers a smooth, efficient, and eco-friendly Web3 experience.</p>
                        <button className='Protocols__feauteres-btn'>Whitepaper <img src="./img/buttonWhitepapper.svg" alt="" /></button>
                    </div>
                </div>

            </div>
        </div>

    )
}