import React from 'react';
import './style.scss';
import { connect } from 'react-redux';
import { State } from '../../redux/store';
import { Country } from '../../redux/countriesReducer';
import CountryCard from './CountryCard';
import { NavLink } from 'react-router-dom';

interface MainPageProps {
  countries: Array<Country>;
}

const MainPage: React.FC<MainPageProps> = ({ countries }) => {
  const countryCards = countries.map((country) => (
    <CountryCard
      name={country.name}
      capital={country.capital}
      mainPhoto={country.mainPhoto}
      key={country.id}
    />
  ));
  return <div className='cards-wrapper'>{countryCards}</div>;
};

const mapStateToProps = (state: State) => {
  return {
    countries: state.countries.countriesInfo,
  };
};

export default connect(mapStateToProps)(MainPage);
