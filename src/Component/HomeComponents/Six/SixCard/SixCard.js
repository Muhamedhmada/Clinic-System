function SixCard({icon ,header , desc}){
  return (
    <div className='card'>
      <div className='icon'>
          {icon}
      </div>
      <div className='info'>
        <h3>{header}</h3>
        <p>
         {desc}
        </p>
      </div>
    </div>
  );
}
export default SixCard