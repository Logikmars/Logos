import "./Welcome.scss";
import { useState, useRef } from "react";

const links = [
    {
        img: '/protocol.svg',
        to: 'protocol',
        text: 'PROTOCOL'
    },
    {
        img: '/visa.svg',
        to: 'protocol',
        text: 'VISA'
    },
    {
        img: '/logo.svg',
        to: 'protocol',
        text: 'VISA'
    },
    {
        img: '/wallet.svg',
        to: 'WALLET'
    },
    {
        img: '/login.svg',
        to: 'CONNECT ID'
    }
]


export default ({ settab }) => {
    return (
        <div className="Welcome">
            <div className='Welcome_selector'>
                <div className='Welcome_selector_decor free_img'>
                    <img src="/welcome.svg" alt="" />
                </div>
                <div className='Welcome_selector_items free_img'>
                    <div className='Welcome_selector_items_inner'>
                        {
                            links.map((link, index) => {
                                return <div onClick={() => { settab(link.to) }} className='Welcome_selector_item'>
                                    <img src={link.img} alt="" />
                                </div>
                            })
                        }
                    </div>
                </div>
                <div className='Welcome_selector_desc'>

                </div>
            </div>

        </div>
    );
};
