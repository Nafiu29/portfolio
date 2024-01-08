import WorkItems from './WorkItems';
import { projectNav, projectsData } from './Data';
import { useState } from 'react';
import { useEffect } from 'react';

export default function Works() {
  const [item, setItem] = useState({ name: 'all' });
  const [projects, setPrjects] = useState([]);
  const [active, setActive] = useState(0);

  useEffect(() => {
    if (item.name !== 'all') setPrjects(projectsData);
    setPrjects(
      projectsData.filter(
        project => project.category.toLowerCase() === item.name
      )
    );
  }, [item]);

  const onClick = (e, i) => {
    setItem({ name: e.target.textContent.toLowerCase() });
    setActive(i);
  };

  return (
    <div>
      <div className='work_filters'>
        {projectNav.map((nav, i) => (
          <span
            onClick={e => onClick(e, i)}
            key={i}
            className={`${
              active === i ? 'work_item active-work' : 'work_item'
            }`}
          >
            {nav.name}
          </span>
        ))}
      </div>

      <div className='work_container container grid'>
        {projects.map(p => (
          <WorkItems key={p.id} item={p} />
        ))}
      </div>
    </div>
  );
}
