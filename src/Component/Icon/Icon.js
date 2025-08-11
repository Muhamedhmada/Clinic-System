function Icon({icon , func }){
  return (
    <div className='icon'
      onClick={func}
      style={{display:"flex" , alignItems:"center" , justifyContent:"center" , cursor:"pointer"}}
    >
      {icon}
    </div>
  );
}
export default Icon