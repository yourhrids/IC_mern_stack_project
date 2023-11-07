// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

import star from '../assets/Stars.png'

const testimonial_data = [
    {
        id: 1, aurthor_name: "Dianne Russell", aurthor__image: "src/assets/Dianne.png", company: "Starbucks", comment: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra."
    },
    {
        id: 2, aurthor_name: "Kristin Watson", aurthor__image: "src/assets/Watson.png", company: "Louis Vuitton", comment: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra."
    },
    {
        id: 3, aurthor_name: "Kathryn Murphy", aurthor__image: "src/assets/Murphy.png", company: "McDonald's", comment: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra."
    },
    {
        id: 4, aurthor_name: "Dianne Russell", aurthor__image: "src/assets/Dianne.png", company: "Starbucks", comment: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra."
    },
    {
        id: 5, aurthor_name: "Kristin Watson", aurthor__image: "src/assets/Watson.png", company: "Louis Vuitton", comment: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra."
    },
    {
        id: 6, aurthor_name: "Kathryn Murphy", aurthor__image: "src/assets/Murphy.png", company: "McDonald's", comment: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra."
    }
]

const ReviewCard = () => {
    return (
        <>
            <Swiper
                slidesPerView={1}
                spaceBetween={10}
                pagination={{
                    clickable: true,
                }}
                breakpoints={{
                    640: {
                        slidesPerView: 1,
                        spaceBetween: 20,
                    },
                    768: {
                        slidesPerView: 2,
                        spaceBetween: 40,
                    },
                    1024: {
                        slidesPerView: 3,
                        spaceBetween: 50,
                    },
                }}

                className="mySwiper"
            >
                {/* testimonial carousel with mapping */}
                {
                    testimonial_data.map(review => <SwiperSlide key={review.id} className='single__testimonials'>
                        <img src={star} alt="" />
                        <p className="testimonial__comment">{review.comment}</p>

                        <div className="aurthor__meta">
                            <img src={review.aurthor__image} alt="" className='author__img' />
                            <div className="content">
                                <h3>{review.aurthor_name}</h3>
                                <span>{review.company}</span>
                            </div>
                        </div>

                    </SwiperSlide>)
                }
            </Swiper>
        </>
    );
};

export default ReviewCard;