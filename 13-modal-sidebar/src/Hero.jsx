import React from 'react';
import phoneImg from './images/phone.png';
import { useGlobalContext } from './context';

const Hero = () => {
  const { closeSubmenu } = useGlobalContext();
  return (
    <section className='hero' onMouseOver={closeSubmenu}>
      <div className='hero-center'>
        <article className='hero-info'>
          <h1>
            Financial infrastructure <br />
            for the internet
          </h1>
          <p>
          Millions of companies of all sizes use React banking online and in person to accept payments, send payouts, automate financial processes, and ultimately grow revenue.
          </p>
          <button className='btn'>Start now</button>
        </article>
        <article className='hero-images'>
          <img src={phoneImg} className='phone-img' alt='phone' />
        </article>
      </div>
    </section>
  );
};

export default Hero;
