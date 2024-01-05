import Frontend from './Frontend';
import './Skills.css';

export default function Skills() {
  return (
    <section className='slills section' id='skills'>
      <h2 className='section_title'>Skills</h2>
      <span className='section_subtitle'>My technical skills</span>

      <div className='skills_container container grid'>
        <Frontend />
        <Backend />
      </div>
    </section>
  );
}
