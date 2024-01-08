import { useEffect } from 'react';
import './Scrollup.css';

export default function Scrollup() {
  const scrollUpButton = () => {
    const scrollUp = document.querySelector('.scrollup');
    if (screenY >= 560) scrollUp.classList.add('show-scroll');
    scrollUp.classList.remove('show-scroll');
  };

  useEffect(() => {
    window.addEventListener('scroll', scrollUpButton);
    return () => window.removeEventListener('scroll', scrollUpButton);
  });

  return (
    <a href='#' className='scrollup'>
      <i className='uil uil-arrow-up scrollup_icon'>I</i>
    </a>
  );
}
