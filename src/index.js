import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import './index.css';
import reportWebVitals from './reportWebVitals';
import Home from './pages/home.js';
import NotFound from './pages/notFound';
import Header from './components/header/hearderNav';
import Footer from './components/footer/footer';
import DesignBuildPage from './pages/designBuildPage';
import CantactUsPage from './pages/cantactUsPage';
import ServicesPage from './pages/servicesPage';
import { store } from '../src/store'
import { Provider } from 'react-redux'

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
    <Router>
    <Header/>

      <Routes>
        <Route exact path="/"  element={<Home/>}/>
        <Route exact path="/designBuild" element={<DesignBuildPage/>}/>
        <Route exact path="/services" element={<ServicesPage/>}/>
        <Route exact path="/cantactUs" element={<CantactUsPage/>}/>
        <Route path="*" element={<NotFound />} />
      </Routes>
      <Footer/>

    </Router>
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
