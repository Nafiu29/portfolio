import ContactIllustration from './ContactIllustration';
import './Contact.css';
import { usePersonal } from '../../hooks/usePersonal';

export default function Contact() {
  const { personal } = usePersonal();
  return (
    <section className='contact section' id='contact'>
      <h2 className='section_title'>Get in touch</h2>
      <span className='section_subtitle'>Contact me</span>

      <div className='contact_container container grid'>
        <div className='contact_content'>
          <h3 className='content_title'>Talk to me</h3>

          <div className='contact_info'>
            <div className='contact_card'>
              <i className='bx bx contact_card-icon'>
                <svg
                  width='30px'
                  height='30px'
                  viewBox='0 0 24 24'
                  fill='none'
                  xmlns='http://www.w3.org/2000/svg'
                >
                  <path
                    d='M4 7.00005L10.2 11.65C11.2667 12.45 12.7333 12.45 13.8 11.65L20 7'
                    stroke='#000000'
                    strokeWidth='2'
                    strokeLinecap='round'
                    strokeLinejoin='round'
                  />
                  <rect
                    x='3'
                    y='5'
                    width='18'
                    height='14'
                    rx='2'
                    stroke='#000000'
                    strokeWidth='2'
                    strokeLinecap='round'
                  />
                </svg>
              </i>

              <h3 className='contact_card-title'>Email</h3>
              <span className='contact_card-data'>{personal[0].email}</span>

              <a href='mailto:nafiu2911@gmail.com' className='contact_button'>
                Write me{' '}
                <i className='bx right-arrow-alt conatc_button-icon'>
                  <svg
                    width='15px'
                    height='15px'
                    viewBox='0 0 24 24'
                    fill='none'
                    xmlns='http://www.w3.org/2000/svg'
                  >
                    <path
                      d='M4 12H20M20 12L14 6M20 12L14 18'
                      stroke='#1C274C'
                      strokeWidth='1.5'
                      strokeLinecap='round'
                      strokeLinejoin='round'
                    />
                  </svg>
                </i>
              </a>
            </div>

            <div className='contact_card'>
              <i className='bx bx contact_card-icon'>
                <svg
                  width='30px'
                  height='30px'
                  viewBox='0 0 24 24'
                  fill='none'
                  xmlns='http://www.w3.org/2000/svg'
                >
                  <path
                    d='M6.014 8.00613C6.12827 7.1024 7.30277 5.87414 8.23488 6.01043L8.23339 6.00894C9.14051 6.18132 9.85859 7.74261 10.2635 8.44465C10.5504 8.95402 10.3641 9.4701 10.0965 9.68787C9.7355 9.97883 9.17099 10.3803 9.28943 10.7834C9.5 11.5 12 14 13.2296 14.7107C13.695 14.9797 14.0325 14.2702 14.3207 13.9067C14.5301 13.6271 15.0466 13.46 15.5548 13.736C16.3138 14.178 17.0288 14.6917 17.69 15.27C18.0202 15.546 18.0977 15.9539 17.8689 16.385C17.4659 17.1443 16.3003 18.1456 15.4542 17.9421C13.9764 17.5868 8 15.27 6.08033 8.55801C5.97237 8.24048 5.99955 8.12044 6.014 8.00613Z'
                    fill='#0F0F0F'
                  />
                  <path
                    fillRule='evenodd'
                    clipRule='evenodd'
                    d='M12 23C10.7764 23 10.0994 22.8687 9 22.5L6.89443 23.5528C5.56462 24.2177 4 23.2507 4 21.7639V19.5C1.84655 17.492 1 15.1767 1 12C1 5.92487 5.92487 1 12 1C18.0751 1 23 5.92487 23 12C23 18.0751 18.0751 23 12 23ZM6 18.6303L5.36395 18.0372C3.69087 16.4772 3 14.7331 3 12C3 7.02944 7.02944 3 12 3C16.9706 3 21 7.02944 21 12C21 16.9706 16.9706 21 12 21C11.0143 21 10.552 20.911 9.63595 20.6038L8.84847 20.3397L6 21.7639V18.6303Z'
                    fill='#0F0F0F'
                  />
                </svg>
              </i>

              <h3 className='contact_card-title'>Whatsapp</h3>
              <span className='contact_card-data'>{personal[0].whatsapp}</span>

              <a href='api.whatsapp.com/user_123' className='contact_button'>
                Write me{' '}
                <i className='bx right-arrow-alt conatc_button-icon'>
                  <svg
                    width='15px'
                    height='15px'
                    viewBox='0 0 24 24'
                    fill='none'
                    xmlns='http://www.w3.org/2000/svg'
                  >
                    <path
                      d='M4 12H20M20 12L14 6M20 12L14 18'
                      stroke='#1C274C'
                      strokeWidth='1.5'
                      strokeLinecap='round'
                      strokeLinejoin='round'
                    />
                  </svg>
                </i>
              </a>
            </div>

            <div className='contact_card'>
              <i className='bx bx contact_card-icon'>
                <svg
                  width='30px'
                  height='30px'
                  viewBox='0 0 24 24'
                  fill='none'
                  xmlns='http://www.w3.org/2000/svg'
                >
                  <path
                    d='M17.3 9.6C17.6314 9.15817 17.5418 8.53137 17.1 8.2C16.6582 7.86863 16.0314 7.95817 15.7 8.4L13.3918 11.4776L11.2071 9.29289C11.0021 9.08791 10.7183 8.98197 10.4291 9.00252C10.1399 9.02307 9.87393 9.16809 9.7 9.4L6.7 13.4C6.36863 13.8418 6.45817 14.4686 6.9 14.8C7.34183 15.1314 7.96863 15.0418 8.3 14.6L10.6082 11.5224L12.7929 13.7071C12.9979 13.9121 13.2817 14.018 13.5709 13.9975C13.8601 13.9769 14.1261 13.8319 14.3 13.6L17.3 9.6Z'
                    fill='#0F0F0F'
                  />
                  <path
                    fillRule='evenodd'
                    clipRule='evenodd'
                    d='M12 23C10.7764 23 10.0994 22.8687 9 22.5L6.89443 23.5528C5.56462 24.2177 4 23.2507 4 21.7639V19.5C1.84655 17.492 1 15.1767 1 12C1 5.92487 5.92487 1 12 1C18.0751 1 23 5.92487 23 12C23 18.0751 18.0751 23 12 23ZM6 18.6303L5.36395 18.0372C3.69087 16.4772 3 14.7331 3 12C3 7.02944 7.02944 3 12 3C16.9706 3 21 7.02944 21 12C21 16.9706 16.9706 21 12 21C11.0143 21 10.552 20.911 9.63595 20.6038L8.84847 20.3397L6 21.7639V18.6303Z'
                    fill='#0F0F0F'
                  />
                </svg>
              </i>

              <h3 className='contact_card-title'>Messanger</h3>
              <span className='contact_card-data'>{personal[0].facebook}</span>

              <a href='m.me/nafiu' className='contact_button'>
                Write me{' '}
                <i className='bx right-arrow-alt conatc_button-icon'>
                  <svg
                    width='15px'
                    height='15px'
                    viewBox='0 0 24 24'
                    fill='none'
                    xmlns='http://www.w3.org/2000/svg'
                  >
                    <path
                      d='M4 12H20M20 12L14 6M20 12L14 18'
                      stroke='#1C274C'
                      strokeWidth='1.5'
                      strokeLinecap='round'
                      strokeLinejoin='round'
                    />
                  </svg>
                </i>
              </a>
            </div>
          </div>
        </div>

        <div className='contact_content'>
          <ContactIllustration />
        </div>
      </div>
    </section>
  );
}
