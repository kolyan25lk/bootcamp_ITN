import React from 'react';
import './Facts.scss';

const SlideFacts = ({item}) => {
    return (
        <div className="facts-slide">
              <img src={item.imgUrl} alt="slide image"/>
            <p className="facts-slide-desc">
                {item.desc}
           </p>
        </div>
    );
};

export default SlideFacts;