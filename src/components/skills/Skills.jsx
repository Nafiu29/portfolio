import Backends from './Backends';
import Frontends from './Frontends';
import './Skills.css';

export default function Skills() {
  return (
    <section className='skills section' id='skills'>
      <h2 className='section_title'>Skills</h2>
      <span className='section_subtitle'>My technical skills</span>

      <div className='skills_container container grid'>
        <Frontends />
        <Backends />
      </div>
    </section>
  );
}
