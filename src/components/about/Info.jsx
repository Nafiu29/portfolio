export default function Info() {
  return (
    <div className='about_info grid'>
      <div className='about_box'>
        <i className='bx bx-award about_icon'>O</i>
        <h3 className='about_title'>Experiance</h3>
        <span className='about_subtitle'>1 Year</span>
      </div>

      <div className='about_box'>
        <i className='bx bx-briefcase-alt  about_icon'>B</i>
        <h3 className='about_title'>Projects</h3>
        <span className='about_subtitle'>1 Project completed</span>
      </div>

      <div className='about_box'>
        <i className='bx bx-support  about_icon'>S</i>
        <h3 className='about_title'>Support</h3>
        <span className='about_subtitle'>Online 24/7</span>
      </div>
    </div>
  );
}
