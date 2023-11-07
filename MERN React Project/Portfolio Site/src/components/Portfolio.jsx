import '../style/PortfolioStyle.css'
import { FaDribbble } from 'react-icons/fa'
import { BsArrowUpRight } from 'react-icons/bs'
const Portfolio_data = [
    {
        "id": 1, "name": "Ahuse", "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros.", "image": "../src/assets/portfolio-1.png"
    },
    {
        "id": 2, "name": "App Dashboard", "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros.", "image": "../src/assets/portfolio-2.png"
    }
    ,
    {
        "id": 3, "name": "Easy Rent", "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros.", "image": "../src/assets/portfolio-3.png"
    }
]

const Portfolio = () => {

    return (
        <div className='portfolio__section'>
            <div className="container-w portfolio__wrapper">
                <div className="portfolio__content">
                    <div>
                        <span className='recent' >Recent Projects</span>
                        <h2>My Portfolio</h2>
                    </div>
                    <div>
                        <button>
                            <a href="/"> <FaDribbble />  Visit My Dribbble</a>
                        </button>
                    </div>
                </div>
                <div className='portfolio__container' >
                    {
                        Portfolio_data.map(project => <div key={project.id} className='single__portfolio' >
                            <img src={project.image} alt="" className='portfolio__image' />
                            <div className='portfolio__meta'>
                                <h3 className='portfolio__title' >{project.name}</h3>
                                <p className='portfolio__description' >{project.description}</p>
                                <p className='link_dribble' >
                                    <a href="/">View In Dribbble  </a>  < BsArrowUpRight />
                                </p>
                            </div>
                        </div>
                        )
                    }
                </div>
            </div>
        </div>
    );
};

export default Portfolio;