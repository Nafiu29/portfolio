import {
  CSSIcon,
  GitIcon,
  GithubIcon,
  HTMLIcon,
  JavascriptIcon,
  JestIcon,
  NodeIcon,
  NpmIcon,
  PythonIcon,
  ReactIcon,
  ViteIcon,
} from './icons';

export default function Tools() {
  return (
    <div className='skills_content'>
      <h3 className='skills_title'>Tools</h3>

      <div className='skills_box'>
        <div className='skills_group'>
          <div className='skills_data'>
            <i className='bx bx-badge-ckeck'>
              <HTMLIcon />
            </i>

            <div>
              <h3 className='skills_name'> HTML</h3>
              <span className='skills_level'>Intermediate</span>
            </div>
          </div>

          <div className='skills_data'>
            <i className='bx bx-badge-ckeck'>
              <CSSIcon />
            </i>

            <div>
              <h3 className='skills_name'>CSS</h3>
              <span className='skills_level'>Beginner</span>
            </div>
          </div>

          <div className='skills_data'>
            <i className='bx bx-badge-ckeck'>
              <JavascriptIcon />
            </i>

            <div>
              <h3 className='skills_name'>JavaScript</h3>
              <span className='skills_level'>Intermediate</span>
            </div>
          </div>

          <div className='skills_data'>
            <i className='bx bx-badge-ckeck'>
              <ReactIcon />
            </i>

            <div>
              <h3 className='skills_name'>React</h3>
              <span className='skills_level'>Beginner</span>
            </div>
          </div>
        </div>

        <div className='skills_group'>
          <div className='skills_data'>
            <i className='bx bx-badge-ckeck'>
              <JestIcon />
            </i>

            <div>
              <h3 className='skills_name'>Jest</h3>
              <span className='skills_level'>Beginner</span>
            </div>
          </div>

          <div className='skills_data'>
            <i className='bx bx-badge-ckeck'>
              <GitIcon />
            </i>

            <div>
              <h3 className='skills_name'>Git</h3>
              <span className='skills_level'>Beginner</span>
            </div>
          </div>

          <div className='skills_data'>
            <i className='bx bx-badge-ckeck'>
              <GithubIcon />
            </i>

            <div>
              <h3 className='skills_name'>GitHub</h3>
              <span className='skills_level'>Beginner</span>
            </div>
          </div>

          <div className='skills_data'>
            <i className='bx bx-badge-ckeck'>
              <NpmIcon />
            </i>

            <div>
              <h3 className='skills_name'>NPM</h3>
              <span className='skills_level'>Beginner</span>
            </div>
          </div>
        </div>

        <div className='skills_group'>
          <div className='skills_data'>
            <i className='bx bx-badge-ckeck'>
              <NodeIcon />
            </i>

            <div>
              <h3 className='skills_name'>Node.js</h3>
              <span className='skills_level'>Beginner</span>
            </div>
          </div>

          <div className='skills_data'>
            <i className='bx bx-badge-ckeck'>
              <ViteIcon />
            </i>

            <div>
              <h3 className='skills_name'>Vite</h3>
              <span className='skills_level'>Beginner</span>
            </div>
          </div>

          <div className='skills_data'>
            <i className='bx bx-badge-ckeck'>
              <PythonIcon />
            </i>

            <div>
              <h3 className='skills_name'>Python</h3>
              <span className='skills_level'>Beginner</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
