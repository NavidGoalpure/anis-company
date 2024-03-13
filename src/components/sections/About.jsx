import Data from '../../data/sections/about.json';
import AboutImage1 from '@pageComponents/home/images/about-1.webp';
import AboutImage2 from '@pageComponents/home/images/about-2.webp';
import Image from 'next/image';
console.log('navid AboutImage1=', AboutImage1);
const AboutSection = () => {
  return (
    <section className='gap no-top about-style-one'>
      <div className='container'>
        <div className='row'>
          <div className='col-lg-6'>
            <div className='about-data-left'>
              <figure>
                <img
                  src={AboutImage1.src}
                  alt={Data.image1.alt}
                  // width={550}
                  // height={667}
                  // fill={true}
                  // style={{ objectFit: 'cover' }}
                />
              </figure>
              <figure className='about-image'>
                <img
                  src={AboutImage2.src}
                  alt={Data.image2.alt}
                  // width={550}
                  // height={667}
                  // fill={true}
                  // style={{ objectFit: 'cover' }}
                />
              </figure>
            </div>
          </div>
          <div className='col-lg-6'>
            <div className='about-data-right'>
              <span className='about-info'>{Data.subtitle}</span>
              <div className='about-info'>
                <br />
                <p>{Data.text}</p>
                <br />
                <br />
                <br />
                <br />
                <br />
                <br />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
