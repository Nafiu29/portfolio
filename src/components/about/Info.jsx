import { usePersonal } from '../../hooks/usePersonal';

export default function Info() {
  const { personal } = usePersonal();

  return (
    <div className='about_info grid'>
      {personal[2].about.map((a, i) => (
        <div key={i} className='about_box'>
          <i className='bx bx-award about_icon'>{a.icon}</i>
          <h3 className='about_title'>{a.progress}</h3>
          <span className='about_subtitle'>{a.completion}</span>
        </div>
      ))}
    </div>
  );
}
