import React from 'react';
import up from "../../../img/up.svg";
import img1 from "../../../img/2a.svg";
import img2 from "../../../img/2b.svg";
import img3 from "../../../img/2c.svg";
import down from "../../../img/down.svg";
import img4 from "../../../img/2a 2.svg";
import cn from "classnames";

const MySlider = (props, cl, onClick) => {
    return (
        <div className="slider">
            <div className="slider_left_bar">
               <div className="slider_left_bar_block">
                   <div className="arrow">
                       <img src={up} alt=""/>
                   </div>
                   {/*{props.images.map(image =>*/}
                   {/*    <div*/}
                   {/*        key={props.image.id}*/}
                   {/*        onClick={event => onClick(event.target.)}*/}
                   {/*    >*/}
                   {/*        <img src={props.image.name} alt=""/>*/}
                   {/*    </div>*/}
                   {/*)}*/}
                   <div className="active">
                       <img src={img1} alt=""/>
                   </div>
                   <div>
                       <img src={img2} alt=""/>
                   </div>
                   <div>
                       <img src={img3} alt=""/>
                   </div>
                   <div className="arrow">
                       <img src={down} alt=""/>
                   </div>
               </div>
            </div>
            <div className="slider_track">
                <div>
                    <img src={img4} alt=""/>
                </div>
            </div>
        </div>
    );
};

export default MySlider;