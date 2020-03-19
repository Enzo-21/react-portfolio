import React, {Component} from 'react';
import Fade from 'react-reveal/Fade';
class FooterTwo extends Component{
    render(){
        let jhonData = this.props.jhonData;
        
        const year = new Date()
        return(
            <section className="footer-area-two">
                <div className="container">
                    <div className="row footer-content">
                        <div className="col-sm-4">
                            <Fade top cascade>
                                <ul className="list_style">
                                    {
                                        jhonData.socialLinks.map(item =>{
                                            return(
                                                <li key={item.name}>
                                                    <a target='blank' href={item.url}><i className={item.className}></i></a> 
                                                </li>
                                            )
                                        })
                                    }
                                </ul>
                            </Fade>
                        </div>
                        <div className="col-sm-8 text-right">
                            <h6>Made with love by <a target='blank' no-opener no-referrer href="https://instagram.com/enzobarrera21">Enzo Barrera</a></h6>
                            <p>© {year.getFullYear()} - All Rights Reserved</p>
                        </div>
                    </div>
                </div>
            </section>
        )
    }
}
export default FooterTwo;