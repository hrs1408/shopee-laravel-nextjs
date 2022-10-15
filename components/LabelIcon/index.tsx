import Image from 'next/image'

const LabelIcon = () => {
    return (
        <div className={"flex justify-center items-center ml-[15px]"}>
            <Image src={"https://deo.shopeemobile.com/shopee/shopee-pcmall-live-sg/homepage/6c502a2641457578b0d5f5153b53dd5d.png"} width={"17px"} height={"17px"}/>
            <p className={"text-[#333] mr-[15px] ml-[5px] capitalize font-normal"}>7 ngày miễn phí trả hàng</p>
        </div>
    )
}

export default LabelIcon;