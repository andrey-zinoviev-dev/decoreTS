import { goodModel } from "./models/goodModel"
import { useNavigate } from "react-router-dom"
import "./GoodArticle.css";

interface goodProps {
    good: goodModel,
}

export default function GoodArticle({good}: goodProps) {
    const navigate = useNavigate();
    return (
        <article className="main__goods-ul-li-article">
            <h3>{good.name}</h3>
            <img className="article__img" src={good.cover}></img>
            <p>{good.desription}</p>
            <p>В наличии: {good.stock}</p>
            <span>Автор - {good.designer.name}</span>
            <button onClick={() => {
                navigate({
                    pathname: `goods/${good.name}`
                }, {
                    state: good,
                })
            }}>Открыть</button>
        </article>
    )
}