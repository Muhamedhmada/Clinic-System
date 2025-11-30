import './SponserSection.css'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Scrollbar, A11y  , Autoplay} from 'swiper/modules';
// Core modules imports are same as usual
import { Navigation, Pagination  } from 'swiper/modules';
import img1 from '../../../Assets/Images/Logo.png'
import img2 from '../../../Assets/Images/Logo.png'
import img3 from '../../../Assets/Images/Logo.png'
import img4 from '../../../Assets/Images/Logo.png'
function SponserSection(){
  return(
    <div className="sponserSection-container container">
      <div className="sponserSection-content content">
      <Swiper
           autoplay={{
            delay: 0, // 3 ثواني بين كل سلايد
            disableOnInteraction: false, // يكمل بعد ما المستخدم يتفاعل
          }}
          speed={10000} // كل ما تزود الرقم، يكون أبطأ و"أنعم"
          modules={[Navigation, Pagination, Scrollbar, A11y , Autoplay]}
          spaceBetween={30}
          slidesPerView={2}
          navigation
          pagination={{clickable: true}}
          scrollbar={{draggable: true}}
          breakpoints={{
            992: {
              slidesPerView: 4
            },
            676:{
              slidesPerView:3
            }
          }}
        >
          <SwiperSlide>
            <div className='image'>
              <img src={img1} alt='image_one' loading="lazy" />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className='image'>
              <img src={img2} alt='image_one' loading="lazy"/>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className='image'>
              <img src={img3} alt='image_one' loading="lazy"/>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className='image'>
              <img src={img4} alt='image_one' loading="lazy"/>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className='image'>
              <img src={img1} alt='image_one' loading="lazy"/>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className='image'>
              <img src={img2} alt='image_one' loading="lazy"/>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className='image'>
              <img src={img3} alt='image_one' loading="lazy"/>
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
    </div>
  )
}
export default SponserSection