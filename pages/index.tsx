import type {NextPage} from 'next'
import ShopeeMall from "../components/ShopeeMall";
import BestSeller from "../components/BestSeller";
import ProductItem from "../components/ProductItem";
import MoreButton from "../components/MoreButton";
import Footer from "../components/Footer";
import {useEffect, useState} from "react";

const Home: NextPage = () => {
    const [products, setProducts] = useState([]);

    useEffect(() => {
            const fetchData = async () => {
                const data = await fetch(`https://dummyjson.com/products`);
                const json = await data.json();
                setProducts(json.products);
            }
            fetchData();
        }, []
    )
    return (
        <div className={"w-full bg-[#f5f5f5]"}>
            <div className="container m-auto bg-white">
                <ShopeeMall/>
            </div>
            <div className={"container m-auto bg-white"}>
                <BestSeller/>
            </div>
            <div className={"container m-auto pb-10"}>
                <div className={"mt-10 shadow bg-white"}>
                    <div className="p-3 text-center border-b-2 border-red-600">
                        <p className={"uppercase text-red-500"}>Gợi ý hôm nay</p>
                    </div>
                </div>
                <div className={"grid grid-cols-6 gap-2"}>
                    {
                        products.map((item) => {
                            return ProductItem(item)
                        })
                    }
                </div>
                <div className={"mt-10 flex justify-center"}>
                    <MoreButton/>
                </div>
            </div>
            <Footer/>
        </div>
    )
}

export default Home;
