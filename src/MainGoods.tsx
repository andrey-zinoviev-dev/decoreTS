import { goods } from "./utils";

import GoodArticle from "./GoodArticle";

import PromoContainer from "./PromoContainer";

import "./MainGoods.css"

export default function MainGoods() {


    return (
        <>
            <PromoContainer />
            <section className="main__goods">
                {/* <h3 className="main__goods-headline">Товары</h3> */}
                <ul className="main__goods-ul">
                    {goods.map((good) => {
                        return <li className="main__goods-ul-li" key={good.name}>
                            <GoodArticle good={good}></GoodArticle>
                        </li>
                    })}
                </ul>
            </section>
        </>

    )
}