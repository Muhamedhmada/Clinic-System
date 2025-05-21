import { Facebook, Instagram, LinkedIn, Twitter } from '../../../Assets/SVGS';
import './Footer.css'
function Footer(){
  const date = new Date()
  return (
    <>
      <div className='footer-container container'>
        <div className='footer-content content'>
          <h2>Clinic Name</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quam iusto
            ipsa odit laudantium adipisci, quis vero in ut, a, voluptas beatae
            nostrum. Corrupti officia obcaecati iste repellat veniam ut quidem.
          </p>
          <div className="icons">
            <div className="icon">
              <Facebook width="20px"/>
            </div>
            <div className="icon">
              <LinkedIn width="20px"/>
            </div>
            <div className="icon">
              <Instagram width="20px"/>
            </div>
            <div className="icon">
              <Twitter width="20px"/>
            </div>
          </div>
          <ul>
            <li><a href="/">home</a></li>
            <li><a href="/">about</a></li>
            <li><a href="/contact-us">contact us</a></li>
          </ul>
        </div>
      </div>
      <div className="copyRight">
        <p>designed with love by M-hamada &copy; {date.getFullYear()}  </p>
      </div>
    </>
  );
}
export default Footer