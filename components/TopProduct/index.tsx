import Image from 'next/image';

const TopProduct = () => {
    return (
        <a href="">
            <div className={"p-2 relative"}>
                <div className="flex justify-center items-center">
                    <Image className={"object-cover"} src={"https://cf.shopee.vn/file/63d7bef820b88a57b5ae4713eb2d20d7"}
                           width={"200"} height={"200"}/>
                </div>
                <div className="bg-[rgba(0,0,0,.26)] w-[92.5%] text-center p-1 absolute bottom-10">
                    <p className="text-white text-sm">Bán 2k+ / tháng</p>
                </div>
                <div className="text-md pt-2 ">
                    <p className='text-stone-700 line-clamp-2'>Áo Thun Local Brand</p>
                </div>
                <div className="absolute top-0 left-15">
                    <Image
                        src={"https://deo.shopeemobile.com/shopee/shopee-pcmall-live-sg/homepage/06720e49514cbd94b7552496b4de454a.png"}
                        width={"34"} height={"40"}/>
                </div>
            </div>
        </a>
    )
}

export default TopProduct;