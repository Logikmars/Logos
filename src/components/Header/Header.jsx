import { Link, NavLink } from 'react-router-dom';
import './Header.scss';
import { useState } from 'react';

const Header = () => {

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
          <Link to={'/Welcome'} className='Header__item-logoLink'>
            <img className='Header__item-logoimg' src="./img/logo.svg" alt="" />
            <p className='Header__item-logo' >logos</p>
          </Link>
        </div>
        <div className='Header__item'>
          <div className='Header__item-ds'>
            <a href="#"><img src="./img/ds.svg" alt="" /></a>
            <a href="#" className='Header__item-ds-a'>Join Our Discord</a>
          </div>
          <Link className='Header__item-id' to={'/Login'} >
            Connect ID
          </Link>
        </div>
      </div>
      <div className={`Header_links ${isMobileMenuOpen && 'Header_links_open'}`}>
        <div className='Header__item Header__item-navigation'>
          <Link className='Header__item-nav' to={"/Protocols"} onClick={() => { setisMobileMenuOpen(false) }}>Protocols</Link>
          <Link className='Header__item-nav' to={"/Cards"} onClick={() => { setisMobileMenuOpen(false) }}>Visa Card</Link>
          <Link className='Header__item-nav' to={"/Wallet"} onClick={() => { setisMobileMenuOpen(false) }}>Wallet</Link>
          <Link className='Header__item-nav' to={"/Welcome"} onClick={() => { setisMobileMenuOpen(false) }}>Introduction</Link>

        </div>
      </div>
    </>
  );
};

export default Header;
