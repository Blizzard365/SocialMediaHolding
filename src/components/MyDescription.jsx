import React from 'react';

import MyButton from "./UI/button/MyButton";
import stars from "../img/stars.svg";
import amazon from "../img/amazon_prime_logo.svg";


const MyDescription = () => {
    return (
        <div className="description">
            <div className="description_top">
                <div>
                    <h4>Best seller</h4>
                    <div className="description_top_stars">
                        <img src={stars} alt=""/>
                        <p>(1731 reviews)</p>
                    </div>
                </div>
                <h5>Acne Treatment Cystic Acne heals, repairs & renews</h5>
            </div>
            <div className="description_middle">
                <h6>Description:</h6>
                <p className="description_middle_p">Addictively refreshing gel-cream leaves skin
                    plump, dewy, glowing.</p>
                <div className="items_left">
                    <p>items left: 12</p>
                </div>
            </div>
            <div className="description_bottom">
                <div>
                    <p>us$25.89</p>
                    <h5>$0.00 FREE</h5>
                </div>
                <MyButton >SELECT</MyButton>
                <div className="logo">
                    <img src={amazon} alt=""/>
                </div>
            </div>
        </div>
    );
};

export default MyDescription;