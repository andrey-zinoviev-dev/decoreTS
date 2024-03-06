import { useNavigate } from "react-router-dom"
import { goods } from "./utils";
import { goodModel } from "./models/goodModel";
import GoodArticle from "./GoodArticle";
interface goodInterface {
    good: goodModel,
}

export default function MainGoods() {
    const navigate = useNavigate();

    return (
        <section>
            <h3>Товары</h3>
            <ul>
                {goods.map((good) => {
                    return <li>
                        <article>
                            <GoodArticle good={good}></GoodArticle>
                        </article>
                    </li>
                })}
            </ul>
        </section>
    )
}