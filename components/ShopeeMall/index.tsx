import Image from 'next/image';
import LabelIcon from "../LabelIcon";
import ReadMoreButton from "../ReadMoreButton";
import Branch from "../Branch";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import {Swiper, SwiperSlide} from 'swiper/react';

import {Pagination, Navigation, Autoplay} from "swiper";

const ShopeeMall = () => {

    return (
        <div className={"shadow"}>
            <div className="head p-3 flex items-center border-b">
                <a href="#" className={"uppercase text-red-600 font-bold pr-[15px] border-r"}>
                    Shopee mall
                </a>
                <LabelIcon/>
                <LabelIcon/>
                <LabelIcon/>
                <div className={"ml-auto"}>
                    <ReadMoreButton/>
                </div>
            </div>
            <div className="w-100 flex p-2">
                <div className="mall-slider w-[390px]">
                    <Swiper
                        pagination={true}
                        modules={[Pagination, Autoplay]}
                        autoplay={{
                            delay: 2500,
                            disableOnInteraction: false,
                        }}
                        className="mySwiper">
                        <SwiperSlide className={"w-full h-full"}>
                            <Image src={"https://cf.shopee.vn/file/46d7f9a94e3ffc4dad52f13b15548dbb"} width={"390px"}
                                   height={"464px"} layout={"fixed"}/>
                        </SwiperSlide>
                        <SwiperSlide className={"w-full h-full"}>
                            <Image src={"https://cf.shopee.vn/file/ef2f4ef44598cc01c8fd7b0efb8ec625"} width={"390px"}
                                   height={"464px"} layout={"fixed"}/>
                        </SwiperSlide>
                        <SwiperSlide className={"w-full h-full"}>
                            <Image src={"https://cf.shopee.vn/file/b0c4c5d41f01cd6c8c2424811d3796ac"} width={"390px"}
                                   height={"464px"} layout={"fixed"}/>
                        </SwiperSlide>
                        <SwiperSlide className={"w-full h-full"}>
                            <Image src={"https://cf.shopee.vn/file/08e23d0ef22734265301b5b4c2374b90"} width={"390px"}
                                   height={"464px"} layout={"fixed"}/>
                        </SwiperSlide>
                    </Swiper>
                </div>
                <div className="branch w-[68%]">
                    <Swiper
                        slidesPerView={4}
                        navigation={true}
                        modules={[Navigation]}
                        className="mySwiper">
                        <SwiperSlide className={""}>
                            <Branch/>
                            <Branch/>
                        </SwiperSlide>
                        <SwiperSlide className={""}>
                            <Branch/>
                            <Branch/>
                        </SwiperSlide>
                        <SwiperSlide className={""}>
                            <Branch/>
                            <Branch/>
                        </SwiperSlide>
                        <SwiperSlide className={""}>
                            <Branch/>
                            <Branch/>
                        </SwiperSlide>
                        <SwiperSlide className={""}>
                            <Branch/>
                            <Branch/>
                        </SwiperSlide>
                        <SwiperSlide className={""}>
                            <Branch/>
                            <Branch/>
                        </SwiperSlide>
                        <SwiperSlide className={""}>
                            <Branch/>
                            <Branch/>
                        </SwiperSlide>
                    </Swiper>
                </div>
            </div>
        </div>
    )
}

export default ShopeeMall;