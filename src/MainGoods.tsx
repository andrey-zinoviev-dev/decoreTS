import { goods, filters } from "./utils";

import GoodArticle from "./GoodArticle";


import "./MainGoods.css"
import BlogSection from "./BlogSection";
import MainDesigners from "./MainDesigners";
import Subscribe from "./Subscribe";

// console.log(filters);

export default function MainGoods() {


    return (
        <>
            <section className="main__goods">
                <div className="container">
                    <ul className="main__goods-ul main__goods-ul_filters">
                        {filters.map((filter) => {
                            return <li key={filter.name}>
                                <p>{filter.name}</p>
                            </li>
                        })}
                    </ul>
                    <ul className="main__goods-ul">
                        {goods.map((good) => {
                            return <li className="main__goods-ul-li" key={good.name}>
                                <GoodArticle good={good}></GoodArticle>
                            </li>
                        })}
                    </ul>
                    <button>Посмотреть все</button>
                </div>
            </section>
            {/* <BlogSection /> */}
            <Subscribe />
            <MainDesigners />
        </>

    )
}