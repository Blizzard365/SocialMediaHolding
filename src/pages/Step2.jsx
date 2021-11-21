import React from 'react';
import stepByStep2 from "../img/step_by_step2.svg";
import post from '../img/facebook_post.svg';
import stepByStep2m from '../img/step_by_step2m.svg';
import MyButton from "../components/UI/button/MyButton";
import press from '../img/press_here_block.svg';
import press_m from '../img/red_arrow.svg';
import press_md from '../img/red_arrow_md.svg';

const Step2 = () => {
    return (
        <main>
            <div className="steps">
                <div  className="step_left">
                    <img src={stepByStep2} alt=""/>
                </div>
                <div  className="step_left_m">
                    <img src={stepByStep2m} alt=""/>
                </div>
                <div className="step_center">
                    <h1>Step 2</h1>
                    <h1>Share Facebook post</h1>
                    <p>
                        To participate in this giveaway please share this giveaway offer with your friends.
                        Not only your friends will appreciate this offer but you will receive $10 Amazon Gift Card for each of
                        your friends that participates in this giveaway!
                    </p>
                    <MyButton step1>continue</MyButton>
                </div>
                <div className="step_right1">
                    <div className="post">
                        <img src={post} alt=""/>
                    </div>
                </div>
            </div>
            <div className="step_down">
                <img src={press} alt=""/>
            </div>
            <div className="step_down_m">
                <img src={press_m} alt=""/>
                <p>Press here</p>
            </div>
            <div className="step_down_md">
                <p>Press here</p>
                <img src={press_md} alt=""/>
            </div>
        </main>
    );
};

export default Step2;