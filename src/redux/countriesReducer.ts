import i18n from '../i18n';
import {
  russiaPhotos,
  usaPhotos,
  mexicoPhotos,
  italyPhotos,
  japanPhotos,
  germanyPhotos,
  argentinaPhotos,
  switzerlandPhotos,
} from '../constants/images';

const CHANGE_LANGUAGE = 'CHANGE-LANGUAGE';

export type Country = {
  id: number;
  name: string;
  capital: string;
  photos: string[];
  mainPhoto: string;
};

export interface CountriesState {
  countriesInfo: Array<Country>;
  language: string;
}

interface CountriesAction {
  type: string;
  newLanguage: string;
}

const initialState: CountriesState = {
  countriesInfo: [
    {
      id: 1,
      name: i18n.t('countries.russia'),
      capital: i18n.t('capitals.moscow'),
      photos: russiaPhotos,
      mainPhoto: russiaPhotos[0],
    },
    {
      id: 2,
      name: i18n.t('countries.usa'),
      capital: i18n.t('capitals.washington'),
      photos: usaPhotos,
      mainPhoto: usaPhotos[0],
    },
    {
      id: 3,
      name: i18n.t('countries.mexico'),
      capital: i18n.t('capitals.mexico-city'),
      photos: mexicoPhotos,
      mainPhoto: mexicoPhotos[1],
    },
    {
      id: 4,
      name: i18n.t('countries.italy'),
      capital: i18n.t('capitals.rome'),
      photos: italyPhotos,
      mainPhoto: italyPhotos[4],
    },
    {
      id: 5,
      name: i18n.t('countries.japan'),
      capital: i18n.t('capitals.tokyo'),
      photos: japanPhotos,
      mainPhoto: japanPhotos[0],
    },
    {
      id: 6,
      name: i18n.t('countries.germany'),
      capital: i18n.t('capitals.berlin'),
      photos: germanyPhotos,
      mainPhoto: germanyPhotos[2],
    },
    {
      id: 7,
      name: i18n.t('countries.argentina'),
      capital: i18n.t('capitals.buenos-aires'),
      photos: argentinaPhotos,
      mainPhoto: argentinaPhotos[1],
    },
    {
      id: 8,
      name: i18n.t('countries.switzerland'),
      capital: i18n.t('capitals.bern'),
      photos: switzerlandPhotos,
      mainPhoto: switzerlandPhotos[3],
    },
  ],
  language: 'en',
};

const countriesReducer = (
  state: CountriesState = initialState,
  action: CountriesAction
): CountriesState => {
  switch (action.type) {
    case CHANGE_LANGUAGE:
      i18n.changeLanguage(action.newLanguage);
      console.log(i18n.t('countries.russia'));
      return {
        ...state,
        countriesInfo: state.countriesInfo.map((country: Country) => ({
          ...country,
        })),
        language: action.newLanguage,
      };
    default:
      return state;
  }
};

export const changeLanguage = (newLanguage: string): CountriesAction => ({
  type: CHANGE_LANGUAGE,
  newLanguage,
});

export default countriesReducer;
