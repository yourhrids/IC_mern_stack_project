import '../style/ContactStyle.css'

const Contact = () => {
    return (
        <div className='contact__section'>
            <div className="container-w contact__wrapper">
                <div className="contact__content">
                    <span>Get In Touch</span>
                    <h2>Contact me</h2>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. </p>
                </div>
                <div className="contact__form">
                    <form action="">
                        <div className="form__name">
                            <div className="first_name">
                                <label htmlFor="fName">First Name</label>
                                <input type="text" name="" id="fName" />
                            </div>
                            <div className="last_name">
                                <label htmlFor="lName">Last Name</label>
                                <input type="text" name="" id="lName" />
                            </div>
                        </div>
                        <div className="form__data">
                            <div className="form__email">
                                <label htmlFor="email">Email</label>
                                <input type="email" id='email' />
                            </div>
                            <div className="form__tel">
                                <label htmlFor="tel">Phone Number</label>
                                <input type="tel" id='tel' />
                            </div>
                        </div>
                        <div className="form__textarea">
                            <label htmlFor="message">Message</label>
                            <textarea name="Type your message..." id="message" ></textarea>
                        </div>
                        <div className="form__btn">
                            <button type='submit' >Submit</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Contact;