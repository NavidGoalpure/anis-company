import { useEffect } from 'react';
import { scrollAnimation } from '@common/scrollAnims';

import Footer from './footers/Index';
import Header from './headers/Index';

const Layouts = ({
  children,
  header,
  footer,
  noHeader,
  noFooter,
  contactButton,
  cartButton,
}) => {
  useEffect(() => {
    scrollAnimation();
  }, []);

  return (
    <>
      {!noHeader && (
        <Header
          header={header}
          contactButton={contactButton}
          cartButton={cartButton}
        />
      )}

      {children}

      {!noFooter && <Footer footer={footer} />}

      <button id='scrollTop' className='scrollTopStick'>
        <i className='fa-solid fa-arrow-up' />
      </button>
    </>
  );
};
export default Layouts;
