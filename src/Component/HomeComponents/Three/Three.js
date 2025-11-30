import Header from '../../common/Header/Header'
// import img from '../../../Assets/Images/hands.jpg'
import './Three.css'
function Three(){
  return(
    <div className="three-container container">
      <Header header="We Offer Different Services To Improve Your Health" desc="Lorem ipsum dolor sit amet consectetur adipiscing elit praesent aliquet. pretiumts"/>
      <div className="three-content content">
        <div className='information'>
          <div className="info">
            <h2 className='h-after-effect'>who we are</h2>
            <div>   
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas pharetra antege vel est lobortis, a commodo magna rhoncus. In quis nisi non emet quam pharetra commodo.</p>
              <br />
              <p>Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.</p>
            </div>
          </div>
          <div className="image">
            {/* <img src={img} alt="imagee" /> */}
          </div>
        </div>
      </div>
    </div>
  )
}
export default Three