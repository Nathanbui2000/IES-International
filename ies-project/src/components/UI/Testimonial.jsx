import React from "react";
import Slider from "react-slick";
import "../../styples/Testimonial.css"
import Nathan from "../../images/Nathan.png"
import Jolene from "../../images/JolenePngPhoto.png"
const Testimonial = () =>
{
    const setting = {
        dots: false,
        infinite: true,
        speed: 1000,
        autoplay: true,
        autoplaySpeed: 1800,
        slidestoShow: 1,
        slidesToScroll: 1,
        swipeToSlide: true,
    }
    return <section>
        <div className="container">
            <div className="slider_content-top">
                <h6 className="subtitle">
                    Testimonial
                </h6>
                <h2>
                    Trusted by more than {""} <span className="highlight">5,000 customers</span>
                </h2>
                <div className="slider_warpper">
                    <Slider {...setting}>
                        <div className="slider_item">
                            <p className="description">
                                    Hello Description here
                            </p>
                            <div className = "customer_details">
                                <div className="customer_img">
                                    <img src = {Nathan} alt = ""></img>
                                </div>
                                <div>
                                    <h5 className="customer_name">
                                    Nathan Bui  
                                    </h5>
                                    <p className="description">TA, Academic Tutor, the University of Sydney</p>
                                </div>
                            </div>
                        </div>

                        <div className="slider_item">
                            <p className="description">
                                    Hello Description here
                            </p>
                            <div className = "customer_details">
                                <div className="customer_img">
                                    <img src = {Jolene} alt = ""></img>
                                </div>
                                <div>
                                    <h5 className="customer_name">
                                    Jolene Bui
                                    </h5>
                                    <p className="description">Migration Lawyer</p>
                                </div>
                            </div>
                        </div>

                        <div className="slider_item">
                            <p className="description">
                                    Hello Description here
                            </p>
                            <div className = "customer_details">
                                <div className="customer_img">
                                    <img src = {Nathan} alt = ""></img>
                                </div>
                                <div>
                                    <h5 className="customer_name">
                                    Nathan Bui  
                                    </h5>
                                    <p className="description">TA, Academic Tutor, the University of Sydney</p>
                                </div>
                            </div>
                        </div>
                    </Slider>
                </div>
            </div>
        </div>
    
    </section>
    
}

export default Testimonial;