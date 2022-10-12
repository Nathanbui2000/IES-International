import React from 'react'
import "../../styples/Services.css"
const serviceData = [
    {
        icon: 'ri-apps-line',
        title: 'Students Visa',
        description: "asdadw asd awd as dawd a daws da wd awd wa das awd a adw wdaw ",
    },
    {
        icon: 'ri-code-s-slash-line',
        title: 'Partner Visa',
        description: "asdadw asd awd as dawd a daws da wd awd wa das awd a adw wdaw ",
    },
    {
        icon: 'ri-landscape-line',
        title: 'Busssiness Visa',
        description: "asdadw asd awd as dawd a daws da wd awd wa das awd a adw wdaw ",
    }, 
    {
        icon: 'ri-rocket-line',
        title: 'Investment Visa',
        description: "asdadw asd awd as dawd a daws da wd awd wa das awd a adw wdaw ",
    }, 
]
const Services = () => {
    return <section id = 'service'>
        <div className='container'>
            <div className='services_top-content'>
                <h6 className = 'subtitle'>Our Services</h6>
                <h2>Save Time Managing Your Application  With </h2>
                <h2 className = 'highlight'>Our Best Serivces</h2>
            </div>
            <div className = 'service_item-wrapper'>
                {
                    serviceData.map((item,index) => (
                        <div className = 'service_item' key = {index}>
                            <span className = 'service_icon'>
                                <i class={item.icon}></i>
                            </span>
                            <h3 className = 'service_title'>{item.title}</h3>
                            <p className = 'description'>
                                {item.description}
                            </p>
                        </div>
                    ))
                }
            </div>
        </div>
    </section>
}

export default Services
