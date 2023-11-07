import '../style/SkillsStyle.css'

const Skill_data = [
    {
        id: 1, title: 'Strategy & Direction', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique.', image: 'src/assets/Skill-1.svg'
    },
    {
        id: 2, title: 'Branding & Logo', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique.', image: 'src/assets/Skill-2.svg'
    },
    {
        id: 3, title: 'UI & UX Design', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique.', image: 'src/assets/Skill-3.svg'
    },
    {
        id: 4, title: 'Webflow Development', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique.', image: 'src/assets/Skill-4.svg'
    }
]

const Skills = () => {
    return (
        <div className='skill__section'>
            <div className="container-w skill_wrapper">
                <div className="skill_heading">
                    <h3>My Skills</h3>
                    <h2>My Expertise</h2>
                </div>

                {/* Skills card */}
                <div className="skills_card">
                    {
                        Skill_data.map(value => <div className='single__card' key={value.id}>
                            <img src={value.image} alt="" className='card__img' />
                            <h3 className='card__title'>{value.title}</h3>
                            <p className="card__description">{value.description}</p>
                        </div>
                        )
                    }
                </div>
            </div>
        </div>
    );
};

export default Skills;