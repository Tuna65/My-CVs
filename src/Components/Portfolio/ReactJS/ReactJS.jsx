import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/effect-flip';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import { EffectFlip, Pagination, Navigation } from 'swiper';

import './ReactJS.css';

import img1 from '../../../img/cafe-rjs.jpg';
import img2 from '../../../img/cv-rjs.jpg';

function ReactJS() {
    const projects = [
        {
            title: 'Cafe Demo',
            img: img1,
            path: 'https://tuna-cafe-demo-web.netlify.app/',
            html: '3',
            css: '27',
            js: '16',
        },
        {
            title: 'Social',
            img: img2,
            path: 'https://tuna65-cv.netlify.app/',
            html: '1',
            css: '27',
            js: '17',
        },
    ];
    return (
        <div className="r-wrapper">
            <h2>REACT-JS</h2>
            <Swiper
                effect={'flip'}
                grabCursor={true}
                pagination={true}
                navigation={true}
                modules={[EffectFlip, Pagination, Navigation]}
                className="react-swiper"
            >
                {projects.map((project, index) => {
                    return (
                        <SwiperSlide key={index}>
                            <a href={project.path} className="r-swiper">
                                <h1>{project.title}</h1>
                                <img src={project.img} alt="" />
                                <span>
                                    HTML: {project.html}% - CSS: {project.css}% - JS: {project.js}%
                                </span>
                            </a>
                        </SwiperSlide>
                    );
                })}
            </Swiper>
        </div>
    );
}

export default ReactJS;
