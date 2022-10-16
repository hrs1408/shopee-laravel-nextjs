import ReadMoreButton from "../ReadMoreButton";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import {Swiper, SwiperSlide} from 'swiper/react';
import {Navigation} from "swiper";
import TopProduct from "../TopProduct";

const BestSeller = () => {
    return (
        <div className={"mt-10 shadow"}>
            <div className="flex p-3 items-center border-b">
                <p className={"text-red-500 uppercase font-medium"}>Tìm kiếm hàng đầu</p>
                <div className={"ml-auto"}>
                    <ReadMoreButton/>
                </div>
            </div>
            <div className="p-2">
                <Swiper
                    slidesPerView={6}
                    spaceBetween={10}
                    navigation={true}
                    modules={[Navigation]}
                    breakpoints={{
                        640: {
                            slidesPerView: 2,
                            spaceBetween: 20,
                        },
                        768: {
                            slidesPerView: 4,
                            spaceBetween: 40,
                        },
                        1024: {
                            slidesPerView: 6,
                            spaceBetween: 50,
                        },
                    }}
                    className="mySwiper"
                >
                    <SwiperSlide>
                        <TopProduct/>
                    </SwiperSlide>
                    <SwiperSlide>
                        <TopProduct/>
                    </SwiperSlide>
                    <SwiperSlide>
                        <TopProduct/>
                    </SwiperSlide>
                    <SwiperSlide>
                        <TopProduct/>
                    </SwiperSlide>
                    <SwiperSlide>
                        <TopProduct/>
                    </SwiperSlide>
                    <SwiperSlide>
                        <TopProduct/>
                    </SwiperSlide>
                    <SwiperSlide>
                        <TopProduct/>
                    </SwiperSlide>
                </Swiper>
            </div>
        </div>
    )
}

export default BestSeller;