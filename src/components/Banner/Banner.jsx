import img1 from '../../assets/img/bg-1.jpg'
import img2 from '../../assets/img/bg-2.jpg'
import img3 from '../../assets/img/bg-3.jpg'
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/effect-fade';

// import required modules
import { EffectFade,Autoplay, Pagination } from 'swiper/modules';

const Banner = () => {
    return (
        <div>
            <Swiper
                slidesPerView={1}
                effect={'fade'}
                loop={true}
                autoplay={{
                    delay: 3500,
                    disableOnInteraction: false,
                }}
                pagination={{
                    dynamicBullets: true,

                }}
                modules={[EffectFade, Pagination, Autoplay]}
                className="mySwiper"
            >
                <SwiperSlide>

                    <div className='bg-cover bg-no-repeat bg-center h-[600px] flex flex-col gap-5 justify-center items-center bg-slate-950' style={{
                        backgroundImage: `url(${img1})`,
                    }}>

                        <h1 className='text-5xl font-bold'>Earn Anytime, Anywhere</h1>
                        <p className='text-3xl font-medium'>With QuickTask, earning is flexible, fast, and right at your fingertips.</p>

                    </div>

                </SwiperSlide>
                <SwiperSlide>

                    <div className='bg-cover bg-no-repeat bg-center h-[600px] flex flex-col gap-5 justify-center items-center bg-slate-950' style={{
                        backgroundImage: `url(${img2})`,
                    }}>

                        <h1 className='text-5xl font-bold'>Create and Manage Tasks with Ease</h1>
                        <p className='text-3xl font-medium'>Empower your ideas by leveraging a seamless platform for task creation and management.</p>

                    </div>

                </SwiperSlide>
                <SwiperSlide>

                    <div className='bg-cover bg-no-repeat bg-center h-[600px] flex flex-col gap-5 justify-center items-center bg-slate-950' style={{
                        backgroundImage: `url(${img3})`,
                    }}>

                        <h1 className='text-5xl font-bold'>Turn Small Tasks into Big Rewards</h1>
                        <p className='text-3xl font-medium'>Join thousands of users earning coins by completing quick and simple tasks.</p>

                    </div>

                </SwiperSlide>

            </Swiper>

        </div>
    );
};

export default Banner;