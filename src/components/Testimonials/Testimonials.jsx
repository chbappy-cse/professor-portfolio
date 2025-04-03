import React, { useRef } from 'react';
import back_icon from '../../assets/back-icon.png';
import next_icon from '../../assets/next-icon.png';
import user_1 from '../../assets/user-1.png';
import user_2 from '../../assets/user-2.png';
import user_3 from '../../assets/user-3.png';
import user_4 from '../../assets/user-4.png';
import './Testimonials.css';

const Testimonials = () => {
    const slider = useRef();
    let tx = 0;
    const slideForword = ()=>{
        if (tx > -50) {
            tx -= 25;
        }
        slider.current.style.transform = `translateX(${tx}%)`;

    }
    const slideBackword = ()=>{
        if (tx < 0) {
            tx += 25;
        }
        slider.current.style.transform = `translateX(${tx}%)`;
    }


  return (
    <div className='testimonials' id='feedback'>
        <img onClick={slideForword} src={next_icon} alt="Next Icon" className='next-btn' />
        <img onClick={slideBackword} src={back_icon} alt="Back Icon" className='back-btn' />
        <div className="slider">
            <ul ref={slider}>
                <li>
                    <div className="slide">
                        <div className="user-info">
                            <img src={user_1} alt="Users" />
                            <div>
                                <h3>Sophia Williams</h3>
                                <span>San Francisco, USA</span>
                            </div>
                        </div>
                        <p>Professor Ch's classes are life-changing! His expertise in React.js helped me secure a position as a software engineer.</p>
                    </div>
                </li>
                <li>
                    <div className="slide">
                        <div className="user-info">
                            <img src={user_2} alt="Users" />
                            <div>
                                <h3>James Brown</h3>
                                <span>London, United Kingdom</span>
                            </div>
                        </div>
                        <p>Thanks to his blockchain development lessons, I built my first smart contract project.</p>
                    </div>
                </li>
                <li>
                    <div className="slide">
                        <div className="user-info">
                            <img src={user_3} alt="Users" />
                            <div>
                                <h3>Emma Brown</h3>
                                <span>Sydney, Australia</span>
                            </div>
                        </div>
                        <p>His practical approach to teaching is unmatched. The way he explains complex topics is brilliant!</p>
                    </div>
                </li>
                <li>
                    <div className="slide">
                        <div className="user-info">
                            <img src={user_4} alt="Users" />
                            <div>
                                <h3>Noah Johnson</h3>
                                <span>Toronto, Canada</span>
                            </div>
                        </div>
                        <p>Professor Ch turned my coding struggles into confidence. I am now working at a top tech company.</p>
                    </div>
                </li>
            </ul>
        </div>
    </div>
  )
}

export default Testimonials