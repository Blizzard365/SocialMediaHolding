import React from 'react';
import banner_picture from '../img/banner_picture.svg';

const MyHeader = (props) => {
    return (
        <header>
            <div className="header_left">
                <h1>{props.title}</h1>
                <h3>{props.description}</h3>
            </div>
            <div className="header_right">
                <img src={banner_picture} alt=""/>
            </div>
        </header>
    );
};

export default MyHeader;