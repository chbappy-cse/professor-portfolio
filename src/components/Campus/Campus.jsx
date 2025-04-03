import React from 'react';
import gallery_1 from '../../assets/gallery-1.png';
import gallery_2 from '../../assets/gallery-2.png';
import gallery_3 from '../../assets/gallery-3.png';
import gallery_4 from '../../assets/gallery-4.png';
import whitw_arrow from '../../assets/white-arrow.png';
import './Campus.css';

const Campus = () => {
  return (
    <div className='campus'>
        <div className="gallery" id='gallery'>
            <img src={gallery_1} alt="Gallery" />
            <img src={gallery_2} alt="Gallery" />
            <img src={gallery_3} alt="Gallery" />
            <img src={gallery_4} alt="Gallery" />
        </div>
        <button className='button dark_button'>See more here <img src={whitw_arrow} alt="whitw arrow" /> </button>
    </div>
  )
}

export default Campus