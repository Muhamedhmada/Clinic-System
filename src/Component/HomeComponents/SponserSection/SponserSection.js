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
          speed={5000} // كل ما تزود الرقم، يكون أبطأ و"أنعم"
          modules={[Navigation, Pagination, Scrollbar, A11y , Autoplay]}
          spaceBetween={10}
          slidesPerView={1}
          navigation
          pagination={{clickable: true}}
          scrollbar={{draggable: true}}
          onSwiper={(swiper) => console.log(swiper)}
          onSlideChange={() => console.log("slide change")}
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
            500:{
              slidesPerView:1
            }
          }}
        >
          <SwiperSlide>
            <div className='image'>
              <img src={img1} alt='image_one' />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className='image'>
              <img src={img2} alt='image_one' />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className='image'>
              <img src={img3} alt='image_one' />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className='image'>
              <img src={img4} alt='image_one' />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className='image'>
              <img src={img1} alt='image_one' />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className='image'>
              <img src={img2} alt='image_one' />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className='image'>
              <img src={img3} alt='image_one' />
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
    </div>
  )
}
export default SponserSection