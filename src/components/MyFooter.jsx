import React from 'react';
import how1 from '../img/how_to_1.svg';
import how2 from '../img/how_to_2.svg';
import how3 from '../img/how_to_3.svg';
import how4 from '../img/how_to_4.svg';
import how5 from '../img/how_to_5.svg'
import arrow from '../img/arrow.svg';

const MyFooter = () => {
    return (
        <footer>
            <div className="footer_top">
                <h1>How does it work?</h1>
                <div className="footer_top_block">
                    <div className="footer_col">
                        <div>
                            <img src={how1} alt=""/>
                        </div>
                        <div className="footer_arrow">
                            <img src={arrow} alt=""/>
                        </div>
                        <div>
                            <img src={how2} alt=""/>
                        </div>
                    </div>
                    <div className="footer_col">
                        <div id="arrow2" className="footer_arrow">
                            <img src={arrow} alt=""/>
                        </div>
                    </div>
                   <div className="footer_col">
                       <div>
                           <img src={how3} alt=""/>
                       </div>
                       <div className="footer_arrow">
                           <img src={arrow} alt=""/>
                       </div>
                       <div>
                           <img src={how4} alt=""/>
                       </div>
                    </div>
                    <div className="footer_col">
                        <div id="arrow2" className="footer_arrow">
                            <img src={arrow} alt=""/>
                        </div>
                    </div>
                    <div className="footer_col">
                        <div>
                            <img src={how5} alt=""/>
                        </div>
                    </div>
                </div>
            </div>
            <div className="footer_middle">
                  <div className="col-4 col">
                      <ul>
                          <li>Privacy and Terms</li>
                          <li><a href="">Privacy Policy</a></li>
                          <li><a href="">Terms of use</a></li>
                      </ul>
                  </div>
                  <div className="col-4 col">
                      <ul>
                          <li>Need Help?</li>
                          <li><a href="">mail@gmail.com</a></li>
                      </ul>
                  </div>
                <div className="col-4">
                    <ul>
                        <li>Social</li>
                        <li><a href="">Facebook</a></li>
                        <li><a href="">Instagram</a></li>
                    </ul>
                </div>
            </div>
            <div className="footer_bottom">
                <p>© All Rights Reserved</p>
            </div>
        </footer>
    );
};

export default MyFooter;