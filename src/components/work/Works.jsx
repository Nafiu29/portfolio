import { useRepo } from '../../hooks/useRepo';
import img from '../../assets/work1.jpg';

function WorksItem({ item }) {
  return (
    <div className='work_card' key={item.id}>
      <img src={img} alt='' className='work_img' />
      <h3 className='work_title'>{item.name}</h3>
      <a href={item.html_url} className='work_button'>
        github{' '}
        <i className='bx bx-right-arrow-alt work_button-icon'>
          <svg
            width='20px'
            height='20px'
            viewBox='0 0 24 24'
            fill='none'
            xmlns='http://www.w3.org/2000/svg'
          >
            <path
              d='M4 12H20M20 12L14 6M20 12L14 18'
              stroke='#000'
              strokeWidth='1.5'
              strokeLinecap='round'
              strokeLinejoin='round'
            />
          </svg>
        </i>
      </a>
    </div>
  );
}

export default function Works() {
  const { repo } = useRepo();

  return (
    <div>
      <div className='work_container container grid'>
        {repo.map(p => (
          <WorksItem key={p.id} item={p} />
        ))}
      </div>
    </div>
  );
}
