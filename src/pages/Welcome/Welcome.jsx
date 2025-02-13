import { Link } from "react-router-dom";
import "./Welcome.scss";
import { useState, useRef } from "react";

const links = [
    {
        img: '/protocol.svg',
        to: 'Protocols',
        text: 'PROTOCOL'
    },
    {
        img: '/visa.svg',
        to: 'Cards',
        text: 'VISA'
    },
    {
        img: '/logo.svg',
        to: '',
        text: 'meow'
    },
    {
        img: '/wallet.svg',
        to: 'Wallet',
        text: 'WALLET'
    },
    {
        img: '/login.svg',
        to: 'Login',
        text: 'CONNECT ID'
    }
]

import { useGSAP } from '@gsap/react';
import gsap from 'gsap';


export default ({ }) => {

    const [selected, setselected] = useState('');



    const app = useRef(null)

    useGSAP(
        () => {
            for (let i = 0; i < 5; i++) {
                gsap.fromTo(`.Welcome_selector_item_${i}`, {
                    y: -200,
                    opacity: 0,
                }, {
                    y: 0,
                    opacity: 1,
                    delay: .3 * (i + 1),
                    duration: .5
                })
            }
        },
        { scope: app }
    )

    return (
        <div className="Welcome" ref={app}>
            <div className='Welcome_selector'>
                <div className='Welcome_selector_decor free_img'>
                    <img src="/welcome.svg" alt="" />
                </div>
                <div className='Welcome_selector_items free_img'>
                    <div className='Welcome_selector_items_inner'>
                        {
                            links.map((link, index) => {
                                return <Link to={`${link.to ? `/${link.to}` : '/Welcome'} `} className={`Welcome_selector_item Welcome_selector_item_${index}`} onMouseEnter={() => { setselected(link.text) }} onMouseLeave={() => { setselected('') }} style={{
                                    order: index * 5
                                }}>
                                    <img src={link.img} alt="" />
                                </Link>
                            })
                        }
                    </div>
                </div>
                <div className='Welcome_selector_desc free_img'>
                    <div className='Welcome_selector_desc_inner'>
                        {
                            links.map((link, index) => {
                                if (link.text && link.text !== 'meow') {
                                    return <div className='Welcome_selector_desc_item' style={{
                                        opacity: selected === link.text || selected === 'meow' ? 1 : .2
                                    }}>
                                        {link.text}
                                    </div>
                                }
                            })
                        }
                    </div>

                </div>
            </div>

        </div>
    );
};
