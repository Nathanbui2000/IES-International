import React from 'react';
import "../../styples/Newsletter.css"
const Newsletter = () =>{
    return (
        <section className="newsletter">
            <div className="container">
                <div className="newsletter_wrapper">
                    <div className="newsletter_content">
                        <h6 className="subtitle">
                            Let's work 
                        </h6>
                        <h2>Explore the <span className="highlight">hidden ideas</span></h2>
                        <h2>and subscribe!</h2>
                    </div>

                    <div className="newsletter_form">
                        <input type="email" placeholder = "Email" id="" />
                        <button className="secondary_btn">Subcribe Now</button>
                    </div>

                </div>
            </div>
        </section>

           
    )
}

export default Newsletter