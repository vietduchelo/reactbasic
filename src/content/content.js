import React, { Component } from 'react';
import './../content/content.css';
import slider1 from './../img/slider1.jpg';
import slider2 from './../img/slider2.jpg';
class Content extends Component {
    render() {
        return (
            <div id="myCarousel" classNameName="carousel slide" data-ride="carousel">
                <ol className="carousel-indicators">
                    <li data-target="#myCarousel" data-slide-to="0" className="active"></li>
                    <li data-target="#myCarousel" data-slide-to="1"></li>
                    <li data-target="#myCarousel" data-slide-to="2"></li>
                </ol>
                <div className="carousel-inner">
                    <div className="item active">
                        <img id="slider" src={slider1} alt="Los Angeles"  />
                    </div>

                    <div className="item">
                        <img id="slider" src={slider2} alt="Chicago" />
                    </div>
                </div>
                {/* <a className="left carousel-control" href="#myCarousel" data-slide="prev">
                    <span className="glyphicon glyphicon-chevron-left"></span>
                    <span className="sr-only">Previous</span>
                </a>
                <a class="right carousel-control" href="#myCarousel" data-slide="next">
                    <span class="glyphicon glyphicon-chevron-right"></span>
                    <span class="sr-only">Next</span>
                </a> */}
            </div>
        );
    }
}

export default Content;
