import React from "react";
import './timline.css'

import Fade from 'react-reveal/Fade'


const timelineData = [
    {
        text: 'Web Coder',
        date: 'Avgust-25-2018',
        category: {
			tag: 'Intern Front-End',
			color: '#FFDB14'
		},
        link: {
            url: 'https://www.webcoder.az',
            text: 'Check it'
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
        date: 'Decamber-01-2019',
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
        text:'Customar',
        date: 'Avgust-15-2020',
        category: {
			tag: 'Front-End Developer',
			color: '#018f69'
		},
        link: {
            url:'https://www.customar.tech',
            text: 'Check'
        }
    },
 
]


const TimelineItem = ({ data }) => (
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
);

const Timeline = () =>
    timelineData.length > 0 && (
        <section className='skills' id='Timline' style={{backgroundColor:"#1f2233"}}>
            <Fade left>
            <div className="main-title text-center mb-5">
                <h2>My Resume</h2>
            </div>
        <div className="timeline-container">
            {timelineData.map((data, idx) => (
                <TimelineItem data={data} key={idx} />
            ))}
        </div>
        </Fade>
        </section>
    );

export default Timeline;