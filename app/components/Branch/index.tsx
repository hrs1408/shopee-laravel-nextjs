import Image from 'next/image';

const Branch = () => {
    return (
        <div className={"relative flex justify-center items-center max-w-[180px] m-auto"}>
            <div>
                <Image src={"https://cf.shopee.vn/file/e3f6d87dee0fbab3ae58e98b31c5407c_xhdpi"} width={"201px"}
                       height={"241px"}/>
                <p className={"text-red-600 font-medium text-xl absolute bottom-0 left-1/2 -translate-x-1/2 w-full text-center"}>Mua
                    1 tặng
                    2</p>
            </div>
        </div>
    )
}

export default Branch;