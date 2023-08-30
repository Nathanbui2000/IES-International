import React from 'react'
import "../../styples/Team.css"
import Jolene from '../../images/JolenePngPhoto.png'

const Team = () => {
    // Sample data for multiple team members
    const teamMembers = [
        { 
            name: "Jolene",
            imageUrl: Jolene, 
            role: "Manager", 
            description: "Lorem ipsum dolor sit amet." 
        },

        { 
            name: "John", 
            imageUrl: Jolene, 
            role: "Developer", 
            description: "Consectetur adipiscing elit." 
        },

        { 
            name: "John", 
            imageUrl: Jolene, 
            role: "Developer", 
            description: "Consectetur adipiscing elit." 
        },
        
        // Add more team members here
    ];

    return (
        <section id="team">
            <div className="container">
                <div className = 'team_top_center'>
                    <div className="team_top-content">
                        <h6 className="subtitle">Our Team</h6>
                        <h2 className='team_word'>Meet Our Dedicated</h2>
                        <h2 className="highlight">Team Members</h2>
                    </div>
                </div>
                <div className="team_wrapper">
                    {teamMembers.map((member, index) => (
                        <div key={index} className="team_item">
                            <div className="team_img">
                                <img src={member.imageUrl} alt={`${member.name}'s photo`} />
                            </div>
                            <div className="team_details">
                                <h3 className="team_member_name">{member.name}</h3>
                                <p className="team_member_role">{member.role}</p>
                                <p className="description">{member.description}</p>
                                <div className="team_member_social">
                                    <span>
                                        <i className="ri-linkedin-box-fill"></i>
                                    </span>
                                    <span>
                                        <i className="ri-whatsapp-line"></i>
                                    </span>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Team;