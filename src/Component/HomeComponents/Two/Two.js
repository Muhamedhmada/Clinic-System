import { Calender, Home, Smile, User } from '../../../Assets/SVGS'
import './Two.css'
import CountUp from 'react-countup';
import { useInView } from 'react-intersection-observer';
import Icon from '../../common/Icon/Icon';
function Two(){
  const { ref, inView } = useInView({
    triggerOnce: true, // يشتغل مرة واحدة بس
    threshold: 0.5,     // العنصر لازم يكون نصه ظاهر ع الأقل
  });

  return(
    <div className="two-container container"  ref={ref}>
      {inView&&<div className="two-content content">
        <div className="cards">
          <div className="card">
            <Icon icon={<Home width="30px"/>}/>
            <div>
              <h2>
                <CountUp
                  start={0}
                  end={3468}
                >
                </CountUp>
              </h2>
              <p>Hospital Rooms</p>
            </div>
          </div>
          <div className="card">
            <Icon icon={<User width="30px"/>}/>
            <div>
              <h2>
              <CountUp
                  start={0}
                  end={557}
                >
                </CountUp>
              </h2>
              <p>Specialist Doctors</p>
            </div>
          </div>
          <div className="card">
            <Icon icon={<Calender width="30px"/>}/>
            <div>
              <h2>
              <CountUp
                  start={0}
                  end={4379}
                >
                </CountUp>
              </h2>
              <p>Happy Patients</p>
            </div>
          </div>
          <div className="card">
            <Icon icon={<Smile width="30px"/>}/>
            <div>
              <h2>
              <CountUp
                  start={0}
                  end={32}
                >
                </CountUp>
              </h2>
              <p>Years of Experience</p>
            </div>
          </div>
        </div>
      </div>}
    </div>
  )
}
export default Two