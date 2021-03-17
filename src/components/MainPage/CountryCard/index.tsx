import { NavLink } from 'react-router-dom';
import { Path } from '../../../constants/routes';
import './style.scss';

interface CountryCardProps {
  name: string;
  capital: string;
  mainPhoto: string;
}

const CountryCard: React.FC<CountryCardProps> = ({
  name,
  capital,
  mainPhoto,
}) => {
  return (
    <NavLink to={`${Path.Country}${name}`} className='card'>
      <span className='card__name'>{name}</span>
      <span className='card__capital'>{capital}</span>
      <img className='card__photo' src={mainPhoto} alt='countryPhoto' />
    </NavLink>
  );
};

export default CountryCard;
