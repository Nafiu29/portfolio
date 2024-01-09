import RepoProvider from '../../context/RepoProvider';
import './Work.css';
import Works from './Works';

export default function Work() {
  return (
    <RepoProvider>
      <section className='work section' id='portfolio'>
        <h2 className='section_title'>Projects</h2>
        <span className='section_subtitle'>Most recent Works</span>

        <Works />
      </section>
    </RepoProvider>
  );
}
