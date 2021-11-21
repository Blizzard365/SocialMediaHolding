import React from 'react';
import stepByStep5 from "../img/step_by_step5.svg";
import MyButton from "../components/UI/button/MyButton";
import cream from "../img/picture_giveaway_color.svg";
import icon from '../img/amazon_ico.svg';
import stepByStep5m from '../img/step_by_step5m.svg';

const Step5 = (props) => {
    return (
        <main>
            <div className="steps">
                <div  className="step_left">
                    <img src={stepByStep5} alt=""/>
                </div>
                <div  className="step_left_m">
                    <img src={stepByStep5m} alt=""/>
                </div>
                <div className="step_center">
                    <h1>Step 5</h1>
                    <h1>Buy and Provide order ID
                        to our Manager</h1>
                    <p>
                        Click the button <strong>GO TO AMAZON</strong> and  <strong>Buy a Product</strong>
                    </p>
                    <MyButton step1 step5>Go to amazon <img className="icon" src={icon} alt=""/></MyButton>
                    <p className="step5_p">
                        Click on the button below and <strong>Provide Order ID</strong> <strong>to our Manager</strong>
                        in FB Messenger
                    </p>
                    <p className="step5_p_italic">(If you have any questions, you can ask them to our Manager)</p>
                    <MyButton step1>provide order id</MyButton>
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

export default Step5;