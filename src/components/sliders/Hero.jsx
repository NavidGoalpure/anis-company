import { sliderProps } from '@common/sliderProps';
import { Swiper, SwiperSlide } from 'swiper/react';

import Data from '@data/sliders/hero';
import Link from 'next/link';
import Image from 'next/image';
import Slide1 from './images/slide1.webp';
import Slide2 from './images/slide2.webp';
import Slide3 from './images/slide3.webp';

function getCorrectSlide(key) {
  switch (key) {
    case 0:
      return Slide1;
    case 1:
      return Slide2;
    default:
      return Slide3;
  }
}
const HeroSlider = () => {
  return (
    <section
      className='featured-slider-one'
      style={{ background: 'grey', minHeight: '100vh' }}
    >
      <div>
        <Swiper
          {...sliderProps.heroSlider}
          className='swiper-container ro f-slider-one'
        >
          {Data.items.map((item, key) => (
            <SwiperSlide key={`hs-slide-${key}`} className='swiper-slide'>
              <div className='f-slider-layer'>
                <Image src={getCorrectSlide(key)} alt={item.title} />
                <div className='f-slider-one-data'>
                  <h1>{item.title}</h1>
                  <p>{item.text}</p>
                  <Link href={item.button.link} className='theme-btn'>
                    {item.button.label}
                    <i className='fa-solid fa-angles-right' />
                  </Link>
                </div>
              </div>
            </SwiperSlide>
          ))}

          <div className='swiper-nav'>
            <button className='swiper-nav-prev'>
              <i className='fa-solid fa-angles-left' />
            </button>
            <button className='swiper-nav-next'>
              <i className='fa-solid fa-angles-right' />
            </button>
          </div>
        </Swiper>
      </div>
    </section>
  );
};
export default HeroSlider;
