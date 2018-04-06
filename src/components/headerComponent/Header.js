import React from 'react';
import {
  Link
} from 'react-router-dom';

// images
import Logo from '../../assets/images/logos/ryanpaixao_logo.svg';

// components
import Menu from '../reusableComponents/menu/ToggledMenu';

const MenuButton = ({handleMouseDown}) => {
  return (
    <button 
      className='mobile-nav-button'
      onMouseDown={handleMouseDown}
    >
      <div></div>
      <div></div>
      <div></div>
    </button>
  );
};

const MenuContent = ({menuVisibility, handleMouseDown}) => {
  let visibility = menuVisibility ? 'show' : 'hide';

  return (
    <nav onClick={handleMouseDown} className={'slide-out-nav ' + visibility}>
      <ul>
        <li>
          <a href='https://ryanpaixao.com/About'>About</a>
        </li>
        <li>
          <a href='https://ryanpaixao.com/Skills'>Skills</a>
        </li>
        <li>
          <a href='https://ryanpaixao.com/Projects'>Projects</a>
        </li>
        <li>
          <a href='https://github.com/ryanpaixao/ryanpaixao.com-source' target='_blank' rel='noopener noreferrer'>Source</a>
        </li>
        <li>
          <Link to='/'>Blog</Link>
        </li>
        <li>
          <a href='https://ryanpaixao.com/Contact'>Contact</a>
        </li>
        <li>
          <p><i className='arrow up'/></p>
        </li>
      </ul>
    </nav>
  );
};

const Header = (props) => {
  return (
    <header className='header'>
      <div className='logo'>
        <a href='https://ryanpaixao.com/About'>
          <img src={Logo} alt='RP logo' />
        </a>
      </div>

      <Menu MenuContent={MenuContent} MenuButton={MenuButton} styleClass={'nav-menu'} />
    </header>
  );
}

export default Header;
