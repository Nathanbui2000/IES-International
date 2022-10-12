import React from 'react';
import ".//Header.css";
const nav_links = [
    {
        path:"#home",
        display:"Home"
    },
    {
        path:"#about",
        display:"About"
    },
    {
        path:"#home",
        display:"Home"
    },
    {
        path:"#service",
        display:"Service"
    },
    {
        path:"#project",
        display:"Project"
    },
    {
        path:"#blog",
        display:"Blog"
    },   
]
const Header = () =>
{
    return (
        <header className = 'header'>
            <div className= 'container'>
                <div className = 'nav_wrapper'>
                    <div className = 'logo'>
                        <h2>IES International </h2>
                    </div>
                    {/* =========== navigation===========*/}
                    <div className = 'navigation'>
                        <ul className = 'menu'> 
                        {
                            nav_links.map((item,index) => (
                                <li className ='menu_item'>
                                    <a 
                                    href ={item.path}
                                    className = 'menu_link'>
                                        {item.display}
                                    </a>
                                </li>
                            ))
                        }
                        </ul>
                    </div>

                    {/*=============== Light Mode =========================*/}
                    <div className ="light_mode">
                        <span>
                            <i class="ri-sun-line">Light Mode</i>
                        </span>
                    </div>
                </div>
            </div>
        </header>
    )
}
export default Header