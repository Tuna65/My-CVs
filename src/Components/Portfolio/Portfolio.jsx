import React from 'react';

import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import { Pagination } from 'swiper';

import './Portfolio.css';
import fashions from '../../img/fashionBlog.jpg';
import interior from '../../img/interiorDesign.jpg';
import lecatering from '../../img/leCatering.jpg';
import myfood from '../../img/myfood.jpg';
import portlofio from '../../img/portfolio.jpg';
import social from '../../img/socialMedia.jpg';
import ReactJS from './ReactJS/ReactJS';

const projects = [
    {
        title: 'Portlofio',
        img: portlofio,
        path: 'https://tuna65.github.io/Portfolio---DONE/',
        html: '3',
        css: '27',
        js: '16',
    },
    {
        title: 'Social',
        img: social,
        path: 'https://tuna65.github.io/Social-Media-Template---DONE/',
        html: '1',
        css: '27',
        js: '17',
    },
    {
        title: 'Myfood',
        img: myfood,
        path: 'https://tuna65.github.io/Food-Blog-Template---DONE/',
        html: '1',
        css: '27',
        js: '17',
    },
    {
        title: 'Lecatering',
        img: lecatering,
        path: '',
        html: '10',
        css: '10',
        js: '10',
    },
    {
        title: 'Interior',
        img: interior,
        path: 'https://tuna65.github.io/Interior-Design-Template---DONE/',
        html: '1',
        css: '27',
        js: '17',
    },
    {
        title: 'Fashions',
        img: fashions,
        path: 'https://tuna65.github.io/Fashion-Blog-Template---DONE/',
        html: '1',
        css: '27',
        js: '17',
    },
];
function Portlofio() {
    return (
        <div className="p-wrapper" id="Project">
            <h3>All Project</h3>
            <h2>HTML-CSS-JS</h2>
            <Swiper
                slidesPerView={1}
                spaceBetween={10}
                pagination={{
                    clickable: true,
                }}
                breakpoints={{
                    '@0.00': {
                        slidesPerView: 1,
                        spaceBetween: 10,
                    },
                    '@0.75': {
                        slidesPerView: 2,
                        spaceBetween: 20,
                    },
                    '@1.00': {
                        slidesPerView: 3,
                        spaceBetween: 40,
                    },
                    '@1.50': {
                        slidesPerView: 4,
                        spaceBetween: 50,
                    },
                }}
                modules={[Pagination]}
                className="mySwiper"
            >
                {projects.map((project, index) => {
                    return (
                        <SwiperSlide key={index}>
                            <a href={project.path} className="p-swiper">
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
            <ReactJS />
        </div>
    );
}

export default Portlofio;
