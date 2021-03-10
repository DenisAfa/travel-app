import React from "react";
import "./App.scss";
import { Route } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import MainPage from "./components/MainPage";
import Countries from "./components/Countries";

function App() {
  return (
    <div className='App'>
      <Header />
      <Route exact path='' render={() => <MainPage />} />
      <Route path='/country:countryName?' render={() => <Countries />} />
      <Footer />
    </div>
  );
}

export default App;
