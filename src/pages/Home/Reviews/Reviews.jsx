import React, { use } from 'react';
import { Autoplay, EffectCoverflow, Pagination } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import ReviewCard from './ReviewCard';

const Reviews = ({ReviewsPromise}) => {
    const reviews = use(ReviewsPromise);
    console.log(reviews);
    return (
        <div className='my-24'>
            <div className='text-center mb-24'>
                <h3 className='text-text-3xl text-center font-bold my-8'>What our customers are sayings</h3>
                <p>A posture corrector works by providing support and gentle alignment to your shoulders, back, and spine, encouraging you to maintain proper posture throughout the day. </p>
            </div>
            <div>
                <Swiper
                    loop={true}
                    effect={'coverflow'}
                    grabCursor={true}
                    centeredSlides={true}
                    slidesPerView={'3'}
                    coverflowEffect={{
                    rotate: 30,
                    stretch: '50%',
                    depth: 100,
                    modifier: 1,
                    scale: 0.8,
                    slideShadows: true,
                    }}
                    autoplay={{
                    delay: 2500,
                    disableOnInteraction: false,
                    }}
                    pagination={true}
                    modules={[EffectCoverflow, Pagination, Autoplay]}
                    className="mySwiper"
                >
                    {
                        reviews.map(review=> <SwiperSlide key={review.id}>
                    <ReviewCard review={review}></ReviewCard>
                    </SwiperSlide>
                    )}
                </Swiper>
            </div>
        </div>
    );
};

export default Reviews;