export default function WorksItem({ item }) {
  return (
    <div className='work_card' key={item.id}>
      <img src={item.image} alt='' className='work_img' />
      <h3 className='work_title'>{item.title}</h3>
      <a href='' className='work_button'>
        Demo <i className='bx bx-right-arrow-alt work_button-icon'>I</i>
      </a>
    </div>
  );
}
