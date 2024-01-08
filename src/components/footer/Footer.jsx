import './Footer.css';

export default function Footer() {
  return (
    <footer className='footer'>
      <div className='footer_container'>
        <h1 className='footer_title'>Nafiu</h1>

        <ul className='footer_list'>
          <li>
            <a href='#about' className='footer_link'>
              About
            </a>
          </li>

          <li>
            <a href='#' className='footer_link'>
              portfolio
            </a>
          </li>
        </ul>

        <div className='footer_social'>
          <a
            href='https://github.com/users/nafiu29'
            className='footer_social-link'
            target='_black'
          >
            <i className='bx bx1-facebook'>I</i>
          </a>
          <a
            href='https://github.com/users/nafiu29'
            className='footer_social-link'
            target='_black'
          >
            <i className='bx bx1-facebook'>F</i>
          </a>
          <a
            href='https://github.com/users/nafiu29'
            className='footer_social-link'
            target='_black'
          >
            <i className='bx bx1-facebook'>G</i>
          </a>
        </div>

        <span className='footer_copy'>&#169; Nafiu. All rigths reserved</span>
      </div>
    </footer>
  );
}
