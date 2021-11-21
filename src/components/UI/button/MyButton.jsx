import React from 'react';
import cn from 'classnames';
import Main from "../../../pages/Main";
import Step1 from "../../../pages/Step1";
import Step2 from "../../../pages/Step2";
import Step3 from "../../../pages/Step3";
import Step4 from "../../../pages/Step4";
import Step5 from "../../../pages/Step5";

const MyButton = (props) => {
    return (
        <button className={cn(
            'button',
            {
                'button-step1': props.step1,
            },
            {
                'button-step2': props.step2,
            },
            {
                'button-step3': props.step3,
            },
            {
                'button-step5': props.step5,
            },

        )}>
            {props.children}
        </button>
    );
};

export default MyButton;