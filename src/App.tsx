import React from 'react';
import './App.scss';
import { Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import MainPage from './components/MainPage';
import CountryPage from './components/CountryPage';
import { Path } from './constants/routes';
import { State } from './redux/store';
import { connect } from 'react-redux';
import i18n from './i18n';

interface AppProps {
  appInfo: any;
}

const App: React.FC<any> = ({ language }) => {
  i18n.changeLanguage(language);

  return (
    <div className='App'>
      <Header />
      <Route exact path={Path.Main} render={() => <MainPage />} />
      <Route
        path={`${Path.Country}:countryName?`}
        render={() => <CountryPage />}
      />
      <Footer />
    </div>
  );
};
const mapStateToProps = (state: State) => {
  return {
    language: state.countries.language,
  };
};

export default connect(mapStateToProps)(App);
