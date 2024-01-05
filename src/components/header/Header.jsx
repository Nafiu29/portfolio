import { useState } from 'react';
import './Header.css';

export default function Header() {
  const [toggle, showMenu] = useState(false);

  return (
    <header className='header'>
      <nav className='nav container'>
        <a href='index.html' className='nav_logo'>
          Nafiu
        </a>

        <div className={toggle ? 'nav_menu show-menu' : 'nav_menu'}>
          <ul className='nav_list grid'>
            <li className='nav_item'>
              <a href='#home' className='nav-link active-link'>
                <i className='uil uil-estate nav_icon'></i> Home
              </a>
            </li>

            <li className='nav_item'>
              <a href='#about' className='nav-link active-link'>
                <i className='uil uil-user nav_icon'></i> About
              </a>
            </li>

            <li className='nav_item'>
              <a href='#skills' className='nav-link active-link'>
                <i className='uil uil-file-alt nav_icon'></i> Skills
              </a>
            </li>

            <li className='nav_item'>
              <a href='#service' className='nav-link active-link'>
                <i className='uil uil-scebery nav_icon'></i> Services
              </a>
            </li>

            <li className='nav_item'>
              <a href='#portfolio' className='nav-link active-link'>
                <i className='uil uil-scebery nav_icon'></i> Portfolio
              </a>
            </li>

            <li className='nav_item'>
              <a href='#contact' className='nav-link active-link'>
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
