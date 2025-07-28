import './HomeLandPage.css'
import {useNavigate} from 'react-router-dom'
function HomeLandPage(){
  const nav = useNavigate()
  return (
    <div className='homeLandPage-container container'>
      <div className='homeLandPage-content content'>
        <h2>
          we provide <span>medical</span> services
          that you can <span>trust!</span>
        </h2>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam
          perspiciatis excepturi rem distinctio deserunt unde provident
          voluptate laborum quidem placeat facere, dicta fugiat facilis modi
          labore eum rerum atque porro!
        </p>
        <div className="btns">
          <button onClick = {()=>nav('/booking')}>get appointment</button>
          <button>learn more</button>
        </div>
      </div>
    </div>
  );
}
export default HomeLandPage