import "./Welcome.scss";
import { useState, useRef } from "react";

export default ({ settab }) => {
    const [selected, setSelected] = useState(2); // Изначально выбран второй элемент
    const [images, setImages] = useState([
        "./img/Welcome/Protocol.svg",
        "./img/Welcome/Visa.svg",
        "./img/Welcome/Logo.svg",
        "./img/Welcome/Wallet.svg",
        "./img/Welcome/Intro.svg"
    ]);

    const imageRefs = useRef([]);

    const handleClick = (index) => {
        // Меняем местами текущий активный элемент и тот, по которому кликнули
        const newImages = [...images];
        const temp = newImages[selected];
        newImages[selected] = newImages[index];
        newImages[index] = temp;

        // Обновляем список изображений и индекс выбранного элемента
        setImages(newImages);
        setSelected(index);

        // Прокручиваем к элементу, на который кликнули
        if (imageRefs.current[index]) {
            imageRefs.current[index].scrollIntoView({
                behavior: "smooth",
                block: "center",
                inline: "center"
            });
        }
    };

    return (
        <div className="Welcome">
            <div className="Welcome__decor">
                <img src="./img/Welcome/Illustration.png" alt="" className="Welcome__decor-Illustration"/>
                <img className="Welcome__decor-wrapper" src="./img/Welcome/LogoWrapper.svg" alt="" />
            </div>
            <div className="Welcome__swipe">
                {images.map((src, index) => (
                    <img
                        key={index}
                        src={src}
                        alt=""
                        className={selected === index ? "selected" : ""}
                        onClick={() => handleClick(index)}
                        ref={(el) => (imageRefs.current[index] = el)}
                    />
                ))}
            </div>
            <div className="Welcome__mouse">
                <div className="Welcome__mouse-mouse">
                    <img className="Welcome__mouse-mouse-img" src="./img/Welcome/mouse.svg" alt="" />
                    <img className="Welcome__mouse-mouse-arrow" src="./img/Welcome/Arrows.svg" alt="" />
                </div>
                <div className="Welcome__mouse-desc">
                    <p className="inactive">WALLET PROTOCOL</p>
                    <a className="activeVisa" onClick={()=>{settab("Cards")}}>VISA</a>
                    <p className="inactive2">WALLET PROTOCOL</p>
                </div>
            </div>
        </div>
    );
};
