import './Header.scss';
import { useState } from 'react';

const Header = ({ settab }) => {

  const [isMobileMenuOpen, setisMobileMenuOpen] = useState(false);

  const toggleModal = () => {
    setisMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <>
      <div className='Header'>
        <div className='Header__item'>
          <div className={`Header__item-burger ${isMobileMenuOpen ? "active" : ""}`}
            onClick={toggleModal}>
            <span></span>
            <span></span>
            <span></span>
          </div>
          <img className='Header__item-logoimg' src="./img/logo.svg" alt="" onClick={() => settab("Welcome")} />
          <p className='Header__item-logo' >logos</p>
        </div>
        <div className='Header__item'>
          <div className='Header__item-ds'>
            <a href="#"><img src="./img/ds.svg" alt="" /></a>
            <a href="#" className='Header__item-ds-a'>Join Our Discord</a>
          </div>
          <button className='Header__item-id' onClick={() => settab("Login")}>
            Connect ID
          </button>
        </div>
      </div>
      <div className={`Header_links ${isMobileMenuOpen && 'Header_links_open'}`}>
        <div className='Header__item Header__item-navigation'>
          <a className='Header__item-nav' href="#" onClick={()=>{settab("Cards")}}>Visa Card</a>
          <a className='Header__item-nav' href="#">Wallet</a>
          <a className='Header__item-nav' href="#">Introduction</a>
          <a className='Header__item-nav' href="#" onClick={()=>{settab("Protocols")}}>Protocols</a>
        </div>
      </div>
    </>
  );
};

export default Header;
