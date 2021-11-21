import React from 'react';
import MySlider from "../components/UI/slider/MySlider";
import MyDescription from "../components/MyDescription";
import Overview from "../components/Overview";

const Main = (props) => {
    return (
        <main>
            <div className="wrapper">
                <MySlider />
                <MyDescription/>
            </div>
            <Overview/>
        </main>
    );
};

export default Main;