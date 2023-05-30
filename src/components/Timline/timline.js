import React from "react";
import './timline.css'

import Fade from 'react-reveal/Fade'


const timelineData = [
    {
        text: 'Web Coder',
        date: 'August-25-2018',
        category: {
            tag: 'Intern Front-End',
            color: '#FFDB14'
        },
        link: {
            url: 'https://www.webcoder.az',
            text: 'Check'
        }
    },
    {
        text: 'Avirtel',
        date: 'February-01-2019',
        category: {
            tag: 'Front-end Developer',
            color: '#e17b77'
        },
        link: {
            url: 'https://www.avirtel.az',
            text: 'Check'
        }
    },
    {
        text: 'EuroDesing',
        date: 'December-01-2019',
        category: {
            tag: 'Front-End Developer',
            color: '#1DA1F2'
        },
        link: {
            url: 'http://www.eurodesign.az',
            text: 'Check'
        }
    },
    {
        text: 'Customar',
        date: 'August-15-2020',
        category: {
            tag: 'Front-End Developer',
            color: '#018f69'
        },
        link: {
            url: 'https://www.customar.tech',
            text: 'Check'
        }
    },

    {
        text: 'Alventures',
        date: 'February-14-2022',
        category: {
            tag: 'Front-End Developer',
            color: '#1DA1F2'
        },
        link: {
            url: 'https://al.ventures/',
            text: 'Check'
        }
    },

]

const Timeline = () =>
{
    return(

        <section className='skills' id='Timline' style={{ backgroundColor: "#1f2233" }}>
            <Fade left>
                <div className="main-title text-center mb-5">
                    <h2>My Resume</h2>
                </div>
                <div className="timeline-container">
                    {timelineData.map((data, idx) => (

                        <div className="timeline-item " >
                            <div className={`timeline-item-content `}>
                                <span className="tag" style={{ background: data.category.color }}>
                                    {data.category.tag}
                                </span>
                                <time>{data.date}</time>
                                <p>{data.text}</p>
                                {data.link && (
                                    <a
                                        href={data.link.url}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                    >
                                        {data.link.text}
                                    </a>
                                )}
                                <span className="circle" />
                            </div>
                        </div>
                    ))}
                </div>
            </Fade>
        </section>
    )

}
export default Timeline;