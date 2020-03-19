import React, {Component} from 'react';
//import Reveal from 'react-reveal/Reveal/';
import SectionTitleTwo from '../component/Banner/SectionTitleTwo';
class ContactTwo extends Component {
    render(){
        return(
            <section className="contact-area contact-area-two bg_color" id="contacts">
                <div className="container">
                    <div className="row ">
                        <div className="col-lg-12 col-md-12 ">
                            <div className="get_info">
                                <SectionTitleTwo stitle="Get in Touch" btitle="Talk or Meet with Me"/>
                                <div className="media get_item">
                                    <i className="flaticon-phone"></i>
                                    <div className="media-body">
                                        <h6>Whatsapp Me Now
                                            <br></br>
                                           <span style={{fontSize: '.8rem', color: 'rgba(151, 151, 151, 0.667)'}}> Just click on the number <span role='img' aria-label='emoji saying "i dont know"'>🤷🏻‍♂️</span></span>
                                        </h6>
                                        <a href="https://api.whatsapp.com/send?phone=543512188777&text=Hey%20Enzo!%20I%20visited%20your%20website%20and%20I'd%20like%20to%20work%20with%20you">+54 9 3512188777</a>
                                    </div>
                                </div>
                                <div className="media get_item">
                                    <i className="flaticon-chat"></i>
                                    <div className="media-body">
                                        <h6>Contact Me</h6>
                                        <p>enzo21barrera@gmail.com</p>
                                    </div>
                                </div>
                                <div className="media get_item">
                                    <i className="flaticon-pin"></i>
                                    <div className="media-body">
                                        <h6>Get Me Here</h6>
                                        <p>Córdoba, Argentina</p>
                                    </div>
                                </div>
                                <div className="media get_item">
                                    <i className="flaticon-sound"></i>
                                    <div className="media-body">
                                        <h6>Videochat?</h6>
                                        <p>Ok! Let's do a videocall <span role="img" aria-label='smiling-emoji'>😄</span></p>
                                    </div>
                                </div>
                            </div>
                        </div>
       {/*                  <div className="col-lg-7 col-md-12">
                            <Reveal effect="fadeInRight" duration={800}>
                                <div className="input_form">
                                    <SectionTitleTwo stitle="Contact me" btitle="Let me"/>
                                    <form action="contact_process.php" id="contactForm">
                                        <div className="row">
                                            <div className="col-lg-6">
                                                <input type="text" id="name" name="name" className="form-control" placeholder="Your Name*"/>
                                            </div>
                                            <div className="col-lg-6">
                                                <input type="email" className="form-control" id="email" name="email" placeholder="Your Email*"/>
                                            </div>
                                            <div className="col-lg-6">
                                                <input type="text" id="subject" name="subject" className="form-control" placeholder="Subject*"/>
                                            </div>
                                            <div className="col-lg-6">
                                                <input type="text" className="form-control" id="phone" name="phone" placeholder="Phone*"/>
                                            </div>
                                        </div>
                                        <textarea name="message" id="message" className="form-control" rows="6" placeholder="Your Message ..."></textarea>
                                        <button type="submit" className="btn send_btn theme_btn">Send Message</button>
                                    </form>
                                    <div id="success">Your message succesfully sent!</div>
                                    <div id="error">Opps! There is something wrong. Please try again</div>
                                </div>
                            </Reveal>
                        </div>
            */}         </div>
                </div>
            </section>
        )
    }
}

export default ContactTwo;