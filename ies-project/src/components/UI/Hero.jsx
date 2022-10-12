import React from 'react';
import "../../styples/hero.css"
import heroDarkImage from '../../images/LVC Logo.png'
const Hero = () => 
{
    return <secction className = 'hero_sections'>
        <div className = 'container'>
            <div className = 'hero_wrapper'>
                <div className = 'hero_content'>
                    <div>
                        <h2>We're Creating Perfect</h2>
                        <h2>Digital Products To </h2>
                        <h2 className = 'highlight'> Promote Your  Brand</h2>
                    </div>
                    <p className = 'description'>asdawdasdawdsad awd as daw dsa aw dwa sda wn asdasd a sd as da sd as da d as d as das asd as d asd as das s d</p>
                    <div className = 'hero_btns'>
                        <button className = 'primary_btn'> Get Started Now </button>
                        <button className = 'secondary_btn'> Discover More </button>
                    </div>
                </div>
                <div className = 'hero_img'>
                    <img src = {heroDarkImage} alt = 'hero-img'></img>
                </div>

            </div>
        </div>
    </secction>
}
export default Hero;