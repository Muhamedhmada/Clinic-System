import Header from '../../common/Header/Header'
import './Five.css'
import img1 from '../../../Assets/Images/patient1.avif'
import img2 from '../../../Assets/Images/patient2.avif'
import img3 from '../../../Assets/Images/patient3.avif'
import img4 from '../../../Assets/Images/patient4.avif'
import img5 from '../../../Assets/Images/patient5.jpg'
import img6 from '../../../Assets/Images/patient6.avif'
import img7 from '../../../Assets/Images/patient7.avif'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Scrollbar, A11y  , Autoplay} from 'swiper/modules';
// Core modules imports are same as usual
import { Navigation, Pagination  } from 'swiper/modules';


function Five(){
  return (
    <div className='five-container container'>
      <Header
        header='We Maintain Cleanliness Rules Inside Our Hospital'
        desc='Lorem ipsum dolor sit amet consectetur adipiscing elit praesent aliquet. pretiumts'
      />
      <div className='five-content content'>
        <Swiper
           autoplay={{
            delay: 3000, // 3 ثواني بين كل سلايد
            disableOnInteraction: true, // يكمل بعد ما المستخدم يتفاعل
          }}
          modules={[Navigation, Pagination, Scrollbar, A11y , Autoplay]}
          spaceBetween={10}
          slidesPerView={1}
          navigation
          pagination={{clickable: true}}
          scrollbar={{draggable: true}}
          breakpoints={{
            1200: {
              slidesPerView: 4,
            },
            992: {
              slidesPerView: 3,
            },
            768: {
              slidesPerView: 2,
            },
            500: {
              slidesPerView: 1,
            },
          }}
        >
          <SwiperSlide>
            <div className='image'>
              <img src={img1} alt='image_one' loading="lazy"/>
              <button>view details</button>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className='image'>
              <img src={img2} alt='image_one' loading="lazy"/>
              <button>view details</button>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className='image'>
              <img src={img3} alt='image_one' loading="lazy"/>
              <button>view details</button>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className='image'>
              <img src={img4} alt='image_one' loading="lazy"/>
              <button>view details</button>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className='image'>
              <img src={img5} alt='image_one' loading="lazy"/>
              <button>view details</button>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className='image'>
              <img src={img6} alt='image_one' loading="lazy"/>
              <button>view details</button>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className='image'>
              <img src={img7} alt='image_one' loading="lazy"/>
              <button>view details</button>
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
    </div>
  );
}
export default Five