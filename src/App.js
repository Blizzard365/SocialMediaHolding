import React, {useState} from "react";
import MyHeader from "./components/MyHeader";
import MyFooter from "./components/MyFooter";
import MySlider from "./components/UI/slider/MySlider";
import stars from './img/stars.svg';
import amazon from './img/amazon_prime_logo.svg';
import MyButton from "./components/UI/button/MyButton";
import MyDescription from "./components/MyDescription";
import Overview from "./components/Overview";
import cn from "classnames";
import {Router, Route, Switch, Redirect,Link } from 'react-router-dom';
import Main from './pages/Main';
import Step1 from '../src/pages/Step1';
import Step2 from '../src/pages/Step2';
import Step3 from '../src/pages/Step3';
import Step4 from '../src/pages/Step4';
import Step5 from '../src/pages/Step5';


function App() {

  return (
    <div>
        <MyHeader
            title="Autumn Giveaways for FREE"
            description="Participate in Autumn Giveaway and
                treat yourself
                to nice and refreshing
                cosmetics for free"
        />

        <Main/>

        <MyFooter/>
    </div>
  );
}

export default App;
