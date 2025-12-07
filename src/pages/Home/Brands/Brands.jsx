import React from 'react';
import 'swiper/css';
import { Swiper, SwiperSlide } from 'swiper/react';
import amazon from '../../../assets/brands/amazon.png';
import amazon_vector from '../../../assets/brands/amazon_vector.png';
import casio from '../../../assets/brands/casio.png';
import moonstar from '../../../assets/brands/moonstar.png';
import randstad from '../../../assets/brands/randstad.png';
import star from '../../../assets/brands/star.png';
import star_people from '../../../assets/brands/start_people.png';
import { Autoplay } from 'swiper/modules';

const brandLogos = [amazon, amazon_vector, casio, moonstar, randstad, star, star_people];
const Brands = () => {
  return (
    <div className='my-12'>
      <h2 className='text-2xl md:text-4xl font-bold text-center mb-12'>We've helped thousands of sales teams</h2>
      <Swiper
        slidesPerView={3}
        centeredSlides={true}
        spaceBetween={30}
        grabCursor={true}
        loop={true}
        modules={[Autoplay]}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
      >
        {
          brandLogos.map((logo, index) => <SwiperSlide key={index}>
            <img src={logo} alt="" />
          </SwiperSlide>)
        }
      </Swiper>
    </div>
  );
};

export default Brands;