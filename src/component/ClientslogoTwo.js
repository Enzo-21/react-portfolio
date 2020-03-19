import React, {Component} from 'react';
import SectionTitleTwo from '../component/Banner/SectionTitleTwo';
class ClientslogoTwo extends Component {
    render(){
        return(
            <div className="clients_logo_area_two bg_color">
                <div className="c_round"></div>
                <div className="container">
                    <div className="row">
                        <div className="col-lg-6">
                            <div className="clients_content_two">
                                <SectionTitleTwo stitle="My stack" btitle="These are some of the best technologies I use"/>
                                <p>As a full-stack MERN developer I work with MongoDB for creating databases, Express as backend framework, React.js for developing the frontend, and Node.js for server-side work. But this is just the top of the iceberg. There are more technologies that I use on my everyday work that help me be creative and develope beautifull, high quality software. </p>
                                <p className='text-center'></p>

                                {/* <div className="clients_item">
                                    <h2>1K</h2>
                                    <h6>Total Clients</h6>
                                </div>
                                <div className="clients_item">
                                    <h2>50</h2>
                                    <h6>Sponsers</h6>
                                </div> */}
                            </div>
                        </div>
                        <div className="col-lg-6">
                            <div className="clients_intrigration">
                                <a href=".#" className="c_items"><img src={require('../image/asan.png')} alt=""/></a>
                                <a href=".#" className="c_items"><img src={require('../image/slack.png')} alt=""/></a>
                                <a href=".#" className="c_items"><img src={require('../image/Avast.png')} alt=""/></a>
                                <a href=".#" className="c_items middle"><img src={require('../image/h_pijom1.png')} alt=""/></a>
                                <a href=".#" className="c_items"><img src={require('../image/torrent.png')} alt=""/></a>
                                <a href=".#" className="c_items"><img src={require('../image/cool.png')} alt=""/></a>
                                <a href=".#" className="c_items"><img src={require('../image/twitter.png')} alt=""/></a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
export default ClientslogoTwo;