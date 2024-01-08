import './Work.css';
import Works from './Works';

export default function Work() {
  return (
    <section className='work section' id='portfolio'>
      <h2 className='section_title'>Portfolio</h2>
      <span className='section_subtitle'>Most recent Works</span>

      <Works />
    </section>
  );
}