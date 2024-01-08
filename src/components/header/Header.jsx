import { useState, useEffect } from 'react';
import './Header.css';

export default function Header() {
  const [toggle, showMenu] = useState(false);
  const [activeNav, setActiveNav] = useState('#home');

  useEffect(() => {
    window.addEventListener('scroll', () => {
      const header = document.querySelector('.header');
      if (scrollY >= 80) header.classList.add('scroll-header');
      header.classList.remove('scroll-header');
      return () => window.removeEventListener('scroll');
    });
  }, []);

  return (
    <header className='header'>
      <nav className='nav container'>
        <a href='index.html' className='nav_logo'>
          Nafiu
        </a>

        <div className={toggle ? 'nav_menu show-menu' : 'nav_menu'}>
          <ul className='nav_list'>
            <li className='nav_item'>
              <a
                href='#home'
                onClick={() => setActiveNav('#home')}
                className={
                  activeNav === '#home' ? 'nav_link active-link' : 'nav_link'
                }
              >
                <i className='uil uil-estate nav_icon'></i> Home
              </a>
            </li>

            <li className='nav_item'>
              <a
                href='#about'
                onClick={() => setActiveNav('#about')}
                className={
                  activeNav === '#about' ? 'nav_link active-link' : 'nav_link'
                }
              >
                <i className='uil uil-user nav_icon'></i> About
              </a>
            </li>

            <li className='nav_item'>
              <a
                href='#skills'
                onClick={() => setActiveNav('#skills')}
                className={
                  activeNav === '#skills' ? 'nav_link active-link' : 'nav_link'
                }
              >
                <i className='uil uil-file-alt nav_icon'></i> Skills
              </a>
            </li>

            <li className='nav_item'>
              <a
                href='#portfolio'
                onClick={() => setActiveNav('#portfolio')}
                className={
                  activeNav === '#portfolio'
                    ? 'nav_link active-link'
                    : 'nav_link'
                }
              >
                <i className='uil uil-scebery nav_icon'></i> Portfolio
              </a>
            </li>

            <li className='nav_item'>
              <a
                href='#contact'
                onClick={() => setActiveNav('#contact')}
                className={
                  activeNav === '#contact' ? 'nav_link active-link' : 'nav_link'
                }
              >
                <i className='uil uil-message nav_icon'></i> Contact
              </a>
            </li>
          </ul>

          <i className='uil uil-times nav_close'>X</i>
        </div>

        <div className='nav_toggle' onClick={() => showMenu(toggle => !toggle)}>
          <i className='uil uil-apps'>T</i>
        </div>
      </nav>
    </header>
  );
}
