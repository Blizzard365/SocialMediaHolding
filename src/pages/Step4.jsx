import React from 'react';
import stepByStep4 from "../img/step_by_step4.svg";
import stepByStep4m from '../img/step_by_step4m.svg';
import MyButton from "../components/UI/button/MyButton";
import cream from "../img/picture_giveaway_color.svg";
import li1 from '../img/1.svg';
import li2 from '../img/2.svg';
import li3 from '../img/3.svg';
import li4 from '../img/4.svg';
import li5 from '../img/5.svg';


const Step4 = (props) => {
    return (
        <main>
            <div className="steps">
                <div  className="step_left">
                    <img src={stepByStep4} alt=""/>
                </div>
                <div  className="step_left_m">
                    <img src={stepByStep4m} alt=""/>
                </div>
                <div className="step_center">
                    <h1>Step 4</h1>
                    <h1>
                        How to Buy a Product
                        with 100% BONUS!
                    </h1>
                    <ul>
                        <li>
                            <img src={li1} alt=""/>
                            <p>You need to Buy our Product on Amazon at the specified price $20.89!</p>
                        </li>
                        <li>
                            <img src={li2} alt=""/>
                            <p>After the purchase - Send us your Order Number or the Screenshot to our manager in FB Messenger</p>
                        </li>
                        <li>
                            <img src={li3} alt=""/>
                            <p>When you receive the product please use it and share product reviews</p>
                        </li>
                        <li>
                            <img src={li4} alt=""/>
                            <p>We will send you <strong>the 25$ Amazon Gift Card</strong> code within 24 hours after we get short review from you.</p>
                        </li>
                        <li>
                            <img src={li5} alt=""/>
                            <p>As a result, you will receive
                                our Product Free!</p>
                        </li>
                    </ul>
                        <MyButton step1>Get Offer</MyButton>
                        <div>
                            <a href="">I don't like offer terms</a>
                        </div>
                </div>
                <div className="step_right">
                    <div>
                        <img src={cream} alt=""/>
                    </div>
                </div>
            </div>
        </main>
    );
};

export default Step4;