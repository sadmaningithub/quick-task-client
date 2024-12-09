import Title from "../Title/Title";

// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';


// import required modules
import { Pagination} from 'swiper/modules';

const Testimonial = () => {
    return (
        <div className="mb-24">
            <div>
                <Title Heading={'Testimonial'} subHeading={'What users have to say about us.'}></Title>
            </div>
            <div>
                <Swiper
                    slidesPerView={3}
                    spaceBetween={30}
                    loop={true}
                    pagination={{
                        clickable: true,
                    }}
                    navigation={true}
                    modules={[Pagination]}
                    className="mySwiper"
                >
                    <SwiperSlide>
                        <div className="flex flex-col items-center border-2 space-y-3 p-10">
                            <div className="avatar">
                                <div className="max-w-24 rounded-full">
                                    <img src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp" />
                                </div>
                            </div>

                            <p>Awesome this platform is really good.</p>
                            <span className="w-12 h-1 my-2 rounded-lg bg-violet-600"></span>
                            <h3>John</h3>
                            <h3>Worker, QuickTask</h3>

                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className="flex flex-col items-center border-2 space-y-3 p-10">
                            <div className="avatar">
                                <div className="max-w-24 rounded-full">
                                    <img src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp" />
                                </div>
                            </div>

                            <p>Awesome this platform is really good.</p>
                            <span className="w-12 h-1 my-2 rounded-lg bg-violet-600"></span>
                            <h3>John</h3>
                            <h3>Worker, QuickTask</h3>

                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className="flex flex-col items-center border-2 space-y-3 p-10">
                            <div className="avatar">
                                <div className="max-w-24 rounded-full">
                                    <img src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp" />
                                </div>
                            </div>

                            <p>Awesome this platform is really good.</p>
                            <span className="w-12 h-1 my-2 rounded-lg bg-violet-600"></span>
                            <h3>John</h3>
                            <h3>Worker, QuickTask</h3>

                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className="flex flex-col items-center border-2 space-y-3 p-10">
                            <div className="avatar">
                                <div className="max-w-24 rounded-full">
                                    <img src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp" />
                                </div>
                            </div>

                            <p>Awesome this platform is really good.</p>
                            <span className="w-12 h-1 my-2 rounded-lg bg-violet-600"></span>
                            <h3>John</h3>
                            <h3>Worker, QuickTask</h3>

                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className="flex flex-col items-center border-2 space-y-3 p-10">
                            <div className="avatar">
                                <div className="max-w-24 rounded-full">
                                    <img src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp" />
                                </div>
                            </div>

                            <p>Awesome this platform is really good.</p>
                            <span className="w-12 h-1 my-2 rounded-lg bg-violet-600"></span>
                            <h3>John</h3>
                            <h3>Worker, QuickTask</h3>

                        </div>
                    </SwiperSlide>
                    <SwiperSlide><div className="flex flex-col items-center border-2 space-y-3 p-10">
                        <div className="avatar">
                            <div className="max-w-24 rounded-full">
                                <img src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp" />
                            </div>
                        </div>

                        <p>Awesome this platform is really good.</p>
                        
                        <span className="w-12 h-1 my-2 rounded-lg bg-violet-600"></span>
                        <h3>John</h3>
                        <h3>Worker, QuickTask</h3>

                    </div></SwiperSlide>

                </Swiper>
            </div>
        </div>
    );
};

export default Testimonial;