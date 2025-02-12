import { useState } from 'react';
import Description from './Description/Description';
import './Protocols.scss';
export default () => {

    const [activeLine, setActiveLine] = useState(0);

    return (
        <div className='Protocols'>
            <div className='Protocols__description'>
                {[
                    { title: 'Zero Gas Fees', description: 'Forget about gas fees eating into your profits. Liquid Layer removes transaction fees, allowing traders to move assets without paying network costs. This means more frequent trades, better arbitrage opportunities, and a level playing field for all users.' },
                    { title: 'Universal Chain Connectivity', description: 'Liquid Layer makes multi-chain trading seamless, enabling effortless transfers across Ethereum, Bitcoin, Solana, and more—no network switching, wrapping, or complex swaps needed.' },
                    { title: 'Advanced Security', description: 'Security isn`t an afterthought—it`s built into the foundation of Liquid Layer. Using advanced encryption, real-time monitoring, and the COMET BFT consensus mechanism, transactions are secured at every level, ensuring stability and protection against threats.' }
                ].map((item, index) => (
                    <Description
                        key={index}
                        img={'/img/descriptionLogo.svg'}
                        title={item.title}
                        description={item.description}
                        onClick={() => setActiveLine(index)}
                    />
                ))}
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
    )
}