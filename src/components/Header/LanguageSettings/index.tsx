import React, { BaseSyntheticEvent } from 'react';
import { connect } from 'react-redux';
import { Language } from '../../../constants/languages';
import { State } from '../../../redux/store';
import { changeLanguage } from '../../../redux/countriesReducer';

interface LanguageSettingsProps {
  changeLanguage(lang: string): void;
}

const LanguageSettings: React.FC<LanguageSettingsProps> = ({
  changeLanguage,
}) => {
  const onLanguageChange = (e: BaseSyntheticEvent): void => {
    const lang: string = e.target.value;
    changeLanguage(lang);
  };

  return (
    <select name='language' onChange={onLanguageChange}>
      <option value={Language.English}>En</option>
      <option value={Language.Russia}>Ru</option>
    </select>
  );
};

const mapStateToProps = (state: State) => ({
  state,
});

export default connect(mapStateToProps, { changeLanguage })(LanguageSettings);
