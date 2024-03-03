import Data from '../../data/sections/about.json';

const AboutSection = () => {
  return (
    <section className='gap no-top about-style-one'>
      <div className='container'>
        <div className='row'>
          <div className='col-lg-6'>
            <div className='about-data-left'>
              <figure>
                <img src={Data.image1.url} alt={Data.image1.alt} />
              </figure>
              <figure className='about-image'>
                <img src={Data.image2.url} alt={Data.image2.alt} />
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
