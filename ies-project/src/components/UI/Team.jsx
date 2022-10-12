import React from 'react'
import "../../styples/Team.css"
import Jolene from '../../images/JolenePngPhoto.png'

const Team = () => {
    return <selection id = 'team'>
        <div className ='team_content'>
            <h6 className = 'subtitile'>
                Our Team
            </h6>
            <h2>
                Meet With  
                <span className = 'highlight'>
                Our Team
                </span>
            </h2>
            <div className = 'team_item'>
                <div className = 'team_img'>
                    <div>
                        <img src = {Jolene} alt = ''>
                        </img>
                    </div>
                    <div className = 'team_details'>
                        <h4>Manager</h4>
                        <p className = 'description'></p>
                    </div>
                </div>
            </div>
        </div>


    </selection>
}
export default Team;
