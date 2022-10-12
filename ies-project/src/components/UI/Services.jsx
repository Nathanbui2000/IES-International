import React from 'react'
import "../../styples/Services.css"
const serviceData = [
    {
        icon: 'ri-apps-line',
        title: 'App Development',
        description: "asdadw asd awd as dawd a daws da wd awd wa das awd a adw wdaw ",
    },
    {
        icon: 'ri-code-s-slash-line',
        title: 'Web Design',
        description: "asdadw asd awd as dawd a daws da wd awd wa das awd a adw wdaw ",
    },
    {
        icon: 'ri-landscape-line',
        title: 'Graphics Design',
        description: "asdadw asd awd as dawd a daws da wd awd wa das awd a adw wdaw ",
    }, 
    {
        icon: 'ri-rocket-line',
        title: 'Digital Marketing',
        description: "asdadw asd awd as dawd a daws da wd awd wa das awd a adw wdaw ",
    }, 
]
const Services = () => {
    return <section id = 'service'>
        <div className='container'>
            <div className='services_top-content'>
                <h6 className = 'subtitle'>Our Services</h6>
                <h2>Save Time Managing Your Bussiness With </h2>
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
