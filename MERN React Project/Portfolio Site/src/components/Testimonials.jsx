import '../style/TestimonialsStyle.css'
import ReviewCard from './ReviewCard';

const Testimonials = () => {
    return (
        <div className='testimonial__section'>
            <div className="container-w testimonial__wrapper">
                <div className="testimonial__content">
                    <span>Clients Feedback</span>
                    <h2>Customer testimonials</h2>
                </div>
                <ReviewCard />
            </div>
        </div>
    );
};

export default Testimonials;