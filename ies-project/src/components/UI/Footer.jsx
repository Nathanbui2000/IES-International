import React from 'react';

const quickLinks01 = [
    {
        path: '#',
        display: 'Facebook Page'
    },
    {
        path: '#',
        display: 'Instagram Page'
    },
    {
        path: '#',
        display: 'Linkedln Page'
    },
    {
        path: '#',
        display: 'Marketing'
    },
    {
        path: '#',
        display: 'Marketing'
    },
    
]
const Footer = () =>
{
    return (
        <footer className="footer">
            <div className="footer_wrapper">
                <div className="footer_logo">
                    <h2>Digency</h2>
                    <p className="description">Grow with us</p>
                    <p className="small_text description">Description on footer go here</p>
                </div>
                <div className="footer_quick-links">
                    <div className="quick_links-title">Solution</div>
                    <ul className="quick_links">

                        {
                            quickLinks01.map((item,index) =>(
                                <li className="quick_link-item">
                                    
                                </li>
                            ))
                        }
                    </ul>
                </div>
            </div>
        </footer>
    )
}

export default Footer;