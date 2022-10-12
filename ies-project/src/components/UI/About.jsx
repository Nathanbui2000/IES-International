import React from 'react'
import '../../styples/About.css'
import aboutImage from '../../images/AboutUs (1).png'
const chooseData = [
    {
        icon: 'ri-wifi-line',
        title: 'First working process',
        desc: 'asdjh jlsdahf jkdsha kjfhads lkjfhlaksjdhfklas dhfkljadsh lkf adsh'
    },
    {
        icon: 'ri-team-line',
        title: 'Dedicated Team',
        desc: 'asdjh jlsdahf jkdsha kjfhads lkjfhlaksjdhfklas dhfkljadsh lkf adsh'
    },
    {
        icon: 'ri-customer-service-2-line',
        title: '24/7 Customer Service',
        desc: 'asdjh jlsdahf jkdsha kjfhads lkjfhlaksjdhfklas dhfkljadsh lkf adsh'
    },
]
const About = () => {
    return <section id = 'about'>
        <div className = "container">
            <div className='about_wrapper'>
                <div className = 'about_content'>
                    <h6 className = 'subtitle'>Why Choose Us</h6>
                    <h2>Specialist In Aviding Clients On</h2>
                    <h2 className = 'highlight'>Finicial Challenges</h2>
                    <p className = 'description about_content-desc' >asdadwssssssssda asd asd asd as das das das ads asd as dsa</p>

                    <div className = "choose_item-wrapper">
                        {
                            chooseData.map((item,index) => (
                                <div className = 'choose_us-item' key ={index}>
                                    <span className = 'choose_us-icon'>
                                        <i class={item.icon}></i>                   
                                    </span>
                                    <div>
                                        <h4 className = 'choose_us-title'>{item.title}</h4>
                                        <p className = 'description'> {item.desc}</p>
                                    </div>
                                </div>
                            ))
                        }
                    </div>
                </div>
                <div className = 'about_image'>
                        <img src = {aboutImage} alt =''></img>
                </div>

            </div>
        </div>
    </section>
}
export default About
