import React from 'react';
import SlideFacts from "./SlideFacts.js";
import SwiperCore, {Navigation, Pagination} from 'swiper';
import {Swiper, SwiperSlide} from 'swiper/react';
import 'swiper/swiper.scss';
import 'swiper/components/navigation/navigation.scss';
import 'swiper/components/pagination/pagination.scss';
import './Facts.scss';

SwiperCore.use([Navigation, Pagination])

const Facts = ({title, slides}) => {
const factsSlides = slides.map((slideInfo) => <SwiperSlide key={slideInfo.id}>
<SlideFacts item={slideInfo} />
</SwiperSlide>);

    return (
        <section className="facts container">
         <h2 className="facts-title">{title}</h2>
         <div className="swiper-button-prev"/>
         <Swiper
         navigation={{
                    nextEl: '.swiper-button-next',
                    prevEl: '.swiper-button-prev',
                }}
          pagination={{
                      el:'.facts-pagination',
                      clickable: false,
                  renderBullet:function(index, className) {
                      return `<span class="facts-pagination-bullet ${className}"></span>`;
                  },
              }}         
          spaceBetween={40}
          slidesPerView={3}
          centeredSlides={false}
          slidesPerGroup={3}

         >
        {factsSlides}
         </Swiper>
         <div className="swiper-button-next"/>
         <div className="facts-pagination"/>
       </section>
    );
};

export default Facts;