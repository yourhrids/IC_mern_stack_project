import '../style/HomeStyle.css'
import hero__img from '../assets/hero-img.png'

const Home = () => {
    return (
        <div className='section-padding margin-top'>
            <div className="container-w home__wrapper grid">
                <div className="home__left-content">
                    <div className="text__content">
                        <span>Hey, I am John</span>
                        <h1 className="heading-one">
                            I create <span>product design</span> and brand experience
                        </h1>
                        <p className="description">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique.
                        </p>
                        <a href="" className="btn getIn__btn">Get In Touch</a>
                    </div>
                </div>
                <div className="home__right-content">
                    <div className="home-banner">
                        <img src={hero__img} alt="" />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Home;