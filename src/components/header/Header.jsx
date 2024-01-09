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
                <i className='uil uil-estate nav_icon'>
                  <svg
                    width='20px'
                    height='20px'
                    viewBox='0 0 24 24'
                    fill='none'
                    xmlns='http://www.w3.org/2000/svg'
                  >
                    <path
                      fillRule='evenodd'
                      clipRule='evenodd'
                      d='M2.5192 7.82274C2 8.77128 2 9.91549 2 12.2039V13.725C2 17.6258 2 19.5763 3.17157 20.7881C4.34315 22 6.22876 22 10 22H14C17.7712 22 19.6569 22 20.8284 20.7881C22 19.5763 22 17.6258 22 13.725V12.2039C22 9.91549 22 8.77128 21.4808 7.82274C20.9616 6.87421 20.0131 6.28551 18.116 5.10812L16.116 3.86687C14.1106 2.62229 13.1079 2 12 2C10.8921 2 9.88939 2.62229 7.88403 3.86687L5.88403 5.10813C3.98695 6.28551 3.0384 6.87421 2.5192 7.82274ZM9 17.25C8.58579 17.25 8.25 17.5858 8.25 18C8.25 18.4142 8.58579 18.75 9 18.75H15C15.4142 18.75 15.75 18.4142 15.75 18C15.75 17.5858 15.4142 17.25 15 17.25H9Z'
                      fill='#1C274C'
                    />
                  </svg>
                </i>{' '}
                Home
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
                <i className='uil uil-user nav_icon'>
                  <svg
                    width='20px'
                    height='20px'
                    viewBox='0 0 512 512'
                    version='1.1'
                    xmlns='http://www.w3.org/2000/svg'
                    xmlnsXlink='http://www.w3.org/1999/xlink'
                  >
                    <title>about</title>
                    <g
                      id='Page-1'
                      stroke='none'
                      strokeWidth='1'
                      fill='none'
                      fillRule='evenodd'
                    >
                      <g
                        id='about-white'
                        fill='#000000'
                        transform='translate(42.666667, 42.666667)'
                      >
                        <path
                          d='M213.333333,3.55271368e-14 C95.51296,3.55271368e-14 3.55271368e-14,95.51168 3.55271368e-14,213.333333 C3.55271368e-14,331.153707 95.51296,426.666667 213.333333,426.666667 C331.154987,426.666667 426.666667,331.153707 426.666667,213.333333 C426.666667,95.51168 331.154987,3.55271368e-14 213.333333,3.55271368e-14 Z M213.333333,384 C119.227947,384 42.6666667,307.43872 42.6666667,213.333333 C42.6666667,119.227947 119.227947,42.6666667 213.333333,42.6666667 C307.44,42.6666667 384,119.227947 384,213.333333 C384,307.43872 307.44,384 213.333333,384 Z M240.04672,128 C240.04672,143.46752 228.785067,154.666667 213.55008,154.666667 C197.698773,154.666667 186.713387,143.46752 186.713387,127.704107 C186.713387,112.5536 197.99616,101.333333 213.55008,101.333333 C228.785067,101.333333 240.04672,112.5536 240.04672,128 Z M192.04672,192 L234.713387,192 L234.713387,320 L192.04672,320 L192.04672,192 Z'
                          id='Shape'
                        ></path>
                      </g>
                    </g>
                  </svg>
                </i>{' '}
                About
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
                <i className='uil uil-file-alt nav_icon'>
                  <svg
                    fill='#000000'
                    version='1.1'
                    id='Capa_1'
                    xmlns='http://www.w3.org/2000/svg'
                    xmlnsXlink='http://www.w3.org/1999/xlink'
                    width='20px'
                    height='20px'
                    viewBox='0 0 426.229 426.229'
                    xmlSpace='preserve'
                  >
                    <g>
                      <path
                        d='M356.605,85.625v-9.202c0-30.142-24.523-54.663-54.662-54.663H124.287c-30.141,0-54.664,24.521-54.664,54.663v9.202
		C30.762,88.481,0,120.93,0,160.507v168.799c0,41.447,33.719,75.162,75.163,75.162h275.904c41.445,0,75.162-33.715,75.162-75.162
		V160.507C426.229,120.929,395.461,88.473,356.605,85.625z M96.955,76.424c0-15.073,12.258-27.331,27.332-27.331h177.657
		c15.064,0,27.332,12.258,27.332,27.331v6.984H96.955V76.424z M75.163,112.676h275.904c26.379,0,47.83,21.459,47.83,47.83v49.291
		H264.176c-1.016,0-1.996,0.126-2.941,0.334c-0.957-0.208-1.938-0.334-2.951-0.334c-7.547,0-13.666,6.118-13.666,13.666
		c0,17.368-14.133,31.502-31.501,31.502c-17.371,0-31.503-14.134-31.503-31.502c0-7.548-6.118-13.666-13.666-13.666
		c-1.013,0-1.993,0.126-2.95,0.334c-0.945-0.208-1.926-0.334-2.941-0.334H27.332v-49.291
		C27.332,134.135,48.785,112.676,75.163,112.676z M351.066,377.136H75.163c-26.378,0-47.831-21.459-47.831-47.83v-92.178h128.617
		c6.188,25.863,29.435,45.169,57.166,45.169s50.979-19.306,57.167-45.169h128.615v92.178
		C398.896,355.677,377.445,377.136,351.066,377.136z'
                      />
                    </g>
                  </svg>
                </i>{' '}
                Skills
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
                <i className='uil uil-scebery nav_icon'>
                  <svg
                    fill='#000000'
                    width='20px'
                    height='20px'
                    viewBox='0 -64 640 640'
                    xmlns='http://www.w3.org/2000/svg'
                  >
                    <path d='M384 320H256c-17.67 0-32 14.33-32 32v128c0 17.67 14.33 32 32 32h128c17.67 0 32-14.33 32-32V352c0-17.67-14.33-32-32-32zM192 32c0-17.67-14.33-32-32-32H32C14.33 0 0 14.33 0 32v128c0 17.67 14.33 32 32 32h95.72l73.16 128.04C211.98 300.98 232.4 288 256 288h.28L192 175.51V128h224V64H192V32zM608 0H480c-17.67 0-32 14.33-32 32v128c0 17.67 14.33 32 32 32h128c17.67 0 32-14.33 32-32V32c0-17.67-14.33-32-32-32z' />
                  </svg>
                </i>{' '}
                Project
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
                <i className='uil uil-message nav_icon'>
                  <svg
                    width='20px'
                    height='20px'
                    viewBox='0 0 16 16'
                    xmlns='http://www.w3.org/2000/svg'
                  >
                    <path
                      d='m 8 1 c -1.65625 0 -3 1.34375 -3 3 s 1.34375 3 3 3 s 3 -1.34375 3 -3 s -1.34375 -3 -3 -3 z m -1.5 7 c -2.492188 0 -4.5 2.007812 -4.5 4.5 v 0.5 c 0 1.109375 0.890625 2 2 2 h 6 v -1 h -3 v -4 h 3 v -1.972656 c -0.164062 -0.019532 -0.332031 -0.027344 -0.5 -0.027344 z m 4.5 0 v 3 h -3 v 2 h 3 v 3 h 2 v -3 h 3 v -2 h -3 v -3 z m 0 0'
                      fill='#2e3436'
                    />
                  </svg>
                </i>{' '}
                Contact
              </a>
            </li>
          </ul>

          <i className='uil uil-times nav_close'>X</i>
        </div>

        <div className='nav_toggle' onClick={() => showMenu(toggle => !toggle)}>
          <i className='uil uil-apps'>
            <svg
              width='20px'
              height='20px'
              viewBox='0 0 24 24'
              version='1.1'
              xmlSpace='preserve'
              xmlns='http://www.w3.org/2000/svg'
              xmlnsXlink='http://www.w3.org/1999/xlink'
            >
              <g id='Layer_1' />

              <g id='Layer_2'>
                <g>
                  <path d='M18,4c-0.6,0-1,0.4-1,1v14c0,0.6,0.4,1,1,1s1-0.4,1-1V5C19,4.4,18.6,4,18,4z' />

                  <path d='M12,4c-0.6,0-1,0.4-1,1v14c0,0.6,0.4,1,1,1s1-0.4,1-1V5C13,4.4,12.6,4,12,4z' />

                  <path d='M6,4C5.4,4,5,4.4,5,5v14c0,0.6,0.4,1,1,1s1-0.4,1-1V5C7,4.4,6.6,4,6,4z' />
                </g>
              </g>
            </svg>
          </i>
        </div>
      </nav>
    </header>
  );
}
