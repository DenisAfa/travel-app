import React from 'react';
import { NavLink } from 'react-router-dom';
import './style.scss';
import logo from '../../assets/icons/logo-main.png';
import LanguageSettings from './LanguageSettings';
import i18n from '../../i18n';

const Header: React.FC = () => {
  return (
    <header className='header'>
      <div className='header__wrapper'>
        <NavLink to='/main' className='header__info'>
          <img src={logo} alt='logo-main' className='header__logo' />
          <span className='header__app-name'>{i18n.t('header.app-name')}</span>
        </NavLink>
        <LanguageSettings />
      </div>
    </header>
  );
};

export default Header;
