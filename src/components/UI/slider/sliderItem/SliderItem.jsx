import React from 'react';

import cl from './SliderItem.scss'

const SliderItem = (props) => {
    return (
        <div className={cl.slider_item}>
            <div>
                {props.item}
            </div>
        </div>
    );
};

export default SliderItem;