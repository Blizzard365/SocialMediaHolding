import React from 'react';
import stepByStep3 from "../img/step_by_step3.svg";
import stepByStep3m from '../img/step_by_step3m.svg';
import cream from "../img/picture_giveaway_color.svg";
import MyButton from "../components/UI/button/MyButton";

const Step3 = () => {
    return (
        <main>
            <div className="steps">
                <div  className="step_left">
                    <img src={stepByStep3} alt=""/>
                </div>
                <div  className="step_left_m">
                    <img src={stepByStep3m} alt=""/>
                </div>
                <div className="step_center">
                    <h1>Step 3</h1>
                    <h1>Amazon Prime</h1>
                    <p>
                        Do you have an Amazon Prime account?
                    </p>
                    <p>
                        To be able to participate in this giveaway you need to have Amazon Prime.
                    </p>
                     <div className="btns">
                         <MyButton step2>Yes, i have</MyButton>
                         <MyButton step3>No, i don’t have</MyButton>
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

export default Step3;