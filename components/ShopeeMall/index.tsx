import ProductItem from "../ProductItem";

const ShopeeMall = () => {
    return (
        <div>
            <div className="head p-3 flex items-center">
                <a href="#" className={"uppercase text-red-600 font-bold"}>
                    Shopee mall
                </a>
            </div>
            <div className="grid grid-cols-6">
                <ProductItem/>
            </div>
        </div>
    )
}

export default ShopeeMall;