import React from 'react';
import './style.scss';
import logo from '../../assets/icons/rs_school_js.svg';
import i18n from '../../i18n';
import { Urls } from '../../constants/urls';

const Footer: React.FC = () => {
  return (
    <footer className='footer'>
      <div className='footer__wrapper'>
        <div className='info'>
          <a
            className='info__creator'
            href={Urls.GitHub}
            target='_blank'
            rel='noreferrer'
          >
            {i18n.t('footer.creator')}
          </a>
          <a href={Urls.RSS} target='_blank' rel='noreferrer'>
            <img src={logo} alt='logo' className='info__logo' />
          </a>
          <span className='info__year'>2021</span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
