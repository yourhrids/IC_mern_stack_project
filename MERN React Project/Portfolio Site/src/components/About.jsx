import "../style/AboutStyle.css";
import Aurthor__img from "../assets/Aurthor-img.png";

const About = () => {
    return (
        <div className="about__section">
            <div className="container-w about__wrapper">
                <div className="about__banner">
                    <img
                        src={Aurthor__img}
                        alt="Aurthor Image"
                        className="aurthor__img"
                    />
                </div>
                <div className="about__content">
                    <span>About</span>
                    <h2>About Me</h2>
                    <p className="description">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce
                        varius faucibus massa sollicitudin amet augue. Nibh metus a semper
                        purus mauris duis. Lorem eu neque, tristique quis duis. Nibh
                        scelerisque ac adipiscing velit non nulla in amet pellentesque.
                        <br /> <br />
                        Sit turpis pretium eget maecenas. Vestibulum dolor mattis
                        consectetur eget commodo vitae. Amet pellentesque sit pulvinar lorem
                        mi a, euismod risus r.
                    </p>
                </div>
            </div>
        </div>
    );
};

export default About;
