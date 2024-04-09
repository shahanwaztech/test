import React from 'react';
import {Swiper, SwiperSlide} from 'swiper/react';
import {Autoplay, Pagination, Navigation} from 'swiper/modules';
import './App.css';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

const SliderData = [
    {
        id: 1,
        imgSrc: '/img1.webp',
        imgName: 'img1'
    },
    {
        id: 2,
        imgSrc: '/img2.webp',
        imgName: 'img2'
    },
    {
        id: 3,
        imgSrc: '/img3.webp',
        imgName: 'img3'
    },
    {
        id: 4,
        imgSrc: '/img4.webp',
        imgName: 'img4'
    },
    {
        id: 5,
        imgSrc: '/img5.webp',
        imgName: 'img5'
    },
    {
        id: 6,
        imgSrc: '/img6.webp',
        imgName: '/img6'
    },
    {
        id: 7,
        imgSrc: '/img7.webp',
        imgName: 'img7'
    },
    {
        id: 8,
        imgSrc: '/img8.webp',
        imgName: 'img8'
    },
    {
        id: 9,
        imgSrc: '/img9.webp',
        imgName: 'img9'
    }
]

const CardDetials = [
    {
        id:1,
        imgSrc:'img1.webp',
        imgAlt:'img1',
        title:'Lorem Impsum Dollar1',
        description:'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.',
        link:'https://tailwindcss.com/'
    },
    {
        id:2,
        imgSrc:'img2.webp',
        imgAlt:'img2',
        title:'Lorem Impsum Dollar2',
        description:'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.',
        link:'https://mui.com/material-ui/'
    },
    {
        id:3,
        imgSrc:'img3.webp',
        imgAlt:'img3',
        title:'Lorem Impsum Dollar3',
        description:'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.',
        link:'https://getbootstrap.com/'
    }
]

function App() {
    return (
        <div>
            <Swiper
                spaceBetween={30}
                centeredSlides={true}
                autoplay={{
                    delay: 2500,
                    disableOnInteraction: false,
                }}
                pagination={{
                    clickable: true,
                }}
                navigation={true}
                modules={[Autoplay, Pagination, Navigation]}
                className="mySwiper"
                style={{
                    "--swiper-navigation-color": "#000",
                    "--swiper-navigation-size": "30px",
                    "--swiper-pagination-bullet-width":"20px",
                    "--swiper-pagination-bullet-border-radius":"20px",
                    "--swiper-pagination-color":"#1a1a1a",
                    "--swiper-pagination-bullet-inactive-color":"#eee",
                    "--swiper-pagination-bullet-inactive-opacity": 0.9,
                    "--swiper-pagination-bottom": "14px",
                }}
            >
                {SliderData.map((slide) => (
                    <SwiperSlide key={slide.id}>
                        <img src={slide.imgSrc} alt={slide.imgName} className="imgContainer" />
                    </SwiperSlide>
                ))}
            </Swiper>
            <div>
                <h1 className="heading">Cards</h1>
                <div className="cardContainer">
                    {CardDetials.map((card) => (
                    <div onClick={() => window.open(`${card.link}`)} className="card" key={card.id}>
                        <img src={card.imgSrc} alt={card.imgAlt} className="cardImag" />
                        <h1 className="cardHeading">{card.title}</h1>
                        <p className="cardDescription">{card.description}</p>
                        <button onClick={() => window.open(`${card.link}`)} className="cardButton">Read More</button>
                    </div>
                    ))}
                </div>
            </div>
        </div>
    );
}

export default App;
