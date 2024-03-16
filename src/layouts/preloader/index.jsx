import appData from '@data/app.json';
import PreloaderImage from './images/Black-Home.svg';
const Preloader = () => {
  return (
    <div className='preloader'>
      <figure>
        <img src={PreloaderImage.src} alt={'black home'} />
      </figure>
    </div>
  );
};
export default Preloader;
