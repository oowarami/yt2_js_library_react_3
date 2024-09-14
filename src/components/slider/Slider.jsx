import { Navigation, Pagination } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

const Slider = () => {
  return (
    <Swiper
      modules={[Navigation, Pagination]}
      spaceBetween={50}
      slidesPerView={1}
      pagination={{ clickable: true }}
      className='w-full h-full'
    >
      <SwiperSlide className='bg-white text-black mb-4 text-center min-h-[20vh]'>Slide 1</SwiperSlide>
      <SwiperSlide className='bg-white text-black mb-4 text-center min-h-[20vh]'>Slide 2</SwiperSlide>
      <SwiperSlide className='bg-white text-black mb-4 text-center min-h-[20vh]'>Slide 3</SwiperSlide>
    </Swiper>
  );
};

export default Slider;