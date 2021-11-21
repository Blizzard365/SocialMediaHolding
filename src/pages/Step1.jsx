import React from 'react';
import cream from '../img/picture_giveaway_color.svg';
import stepByStep1 from '../img/step_by_step.svg';
import stepByStep1m from '../img/step_by_step1m.svg';
import MyButton from "../components/UI/button/MyButton";

const Step1 = (props) => {
    return (
        <main>
            <div className="steps">
                <div  className="step_left">
                    <img src={stepByStep1} alt=""/>
                </div>
                <div  className="step_left_m">
                    <img src={stepByStep1m} alt=""/>
                </div>
                <div className="step_center">
                    <h1>Step 1</h1>
                    <h1>Lorem ipsum dolor
                        sit amet</h1>
                    <p>
                        Aliquam urna arcu, scelerisque vel viverra sed, pellentesque sit amet metus. Curabitur at luctus massa.
                        Vestibulum pretium sem tortor, vitae mattis odio accumsan vitae. Fusce id luctus erat:
                    </p>
                    <ol>
                        <li>Mauris rutrum interdum condimentum.</li>
                        <li>Donec commodo quis arcu eget pretium.</li>
                    </ol>
                    <MyButton step1>Agree and continue</MyButton>
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

export default Step1;