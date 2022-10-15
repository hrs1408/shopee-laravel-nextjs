import Image from 'next/image'
import React from "react";

type props = {
    name: string;
    price: number;
    image: string;
}

const ProductItem: React.FC<props> = (props) => {
    return (
        <div className={"group border border-transparent hover:border-red-600 transition-all cursor-pointer"}>
            <div className={"p-2"}>
                <div className={"w-full flex justify-center"}>
                    <Image
                        className={"object-cover"}
                        src={"https://cf.shopee.vn/file/f59f05c108b521ff794fa9d4630c5882"}
                        width={"150"}
                        height={"150"}
                    />
                </div>
                <p className={"pt-1 truncate"}>
                    Main Huananzhi X99 F8D PLUS
                </p>
                <div className={"flex justify-between items-center pt-4"}>
                    <p className={"price text-red-600 font-bold"}>
                        đ3.900.000
                    </p>
                    <div className="sold text-gray-400 text-sm">
                        Đã bán 3
                    </div>
                </div>
            </div>
            <button className={"flex justify-center py-1 w-full bg-red-600 hidden group-hover:block"}>
                <p className={"text-white text-sm"}>Tìm sản phẩm tương tự</p>
            </button>
        </div>
    )
}

export default ProductItem;