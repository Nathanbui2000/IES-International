import React from "react";
import '../../styples/Blog.css';
import videoImg from "../../images/video-content.webp"

const blogData = 
[
    {
        imgUrl: videoImg, 
        title: "Video",
        desc: "To know more about our work. Watch some video",
        link: "#"
    },
    {
        imgUrl: videoImg, 
        title: "Article",
        desc: "Do you want to improve the way your visa application work",
        link: "#"
    },
    {
        imgUrl: videoImg, 
        title: "Case Study",
        desc: "to study more about visa application",
        link: "#"
    }
]

const Blog = () =>
{
    return <section>
        <div
        className="container"
        >
            <div
            className="blog_top-content"
            >
                <h6
                className="subtitle">
                    Our Blog
                </h6>
                <h2>Let's have a look from our 
                    <span className="highlight"> recent blog</span>
                </h2>
                <div className = 'blog_wrapper'>
                    {blogData.map ((item,index) =>(
                        <div>
                            <h3>{item.title}</h3>
                            <div className= 'blog_item' key = {index}>
                                <h3>{item.title}</h3> 
                                <div className="blog_img">
                                    <img src = {item.imgUrl} alt = ""/> 
                                </div> 
                                <p className = "description blog_desc">
                                    {item.desc}
                                </p>
                                <a href = {item.link} className = "learn_more">
                                    <i class = 'ri-arrow-right-line'>

                                    </i>
                                </a>
                            </div>
                            <div>
                                
                            </div>
                            
                        </div>
                    ))}
                </div>
            </div>
        </div>
    </section>
}
export default Blog;