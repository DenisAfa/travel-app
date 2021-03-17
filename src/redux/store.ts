import { AppState } from './../../../redux/redux/reducers/index';
import { combineReducers, createStore } from 'redux';
import countriesReducer, { CountriesState } from './countriesReducer';
import { composeWithDevTools } from 'redux-devtools-extension';

export interface State {
  app: AppState;
  countries: CountriesState;
}

const reducers = combineReducers({
  countries: countriesReducer,
});

const store = createStore(reducers, composeWithDevTools());

export default store;
