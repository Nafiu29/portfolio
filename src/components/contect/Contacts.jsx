import { ContactIllustration } from '../skills/icons';
import './Contact.css';

export default function Contact() {
  return (
    <section className='contact section' id='contact'>
      <h2 className='section_title'>Get in touch</h2>
      <span className='section_subtitle'>Contact me</span>

      <div className='contact_container container grid'>
        <div className='contact_content'>
          <h3 className='content_title'>Talk to me</h3>

          <div className='contact_info'>
            <div className='contact_card'>
              <i className='bx bx contact_card-icon'>O</i>

              <h3 className='contact_card-title'>Email</h3>
              <span className='contact_card-data'>nafiu2911@gmail.com</span>

              <a href='mailto:nafiu2911@gmail.com' className='contact_button'>
                Write me{' '}
                <i className='bx right-arrow-alt conatc_button-icon'>O</i>
              </a>
            </div>

            <div className='contact_card'>
              <i className='bx bx contact_card-icon'>O</i>

              <h3 className='contact_card-title'>Whatsapp</h3>
              <span className='contact_card-data'>0905 5400 421</span>

              <a href='api.whatsapp.com/user_123' className='contact_button'>
                Write me{' '}
                <i className='bx right-arrow-alt conatc_button-icon'>O</i>
              </a>
            </div>

            <div className='contact_card'>
              <i className='bx bx contact_card-icon'>O</i>

              <h3 className='contact_card-title'>Messanger</h3>
              <span className='contact_card-data'>user.fb123</span>

              <a href='m.me/nafiu' className='contact_button'>
                Write me{' '}
                <i className='bx right-arrow-alt conatc_button-icon'>O</i>
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
