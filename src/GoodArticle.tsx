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
            {/* <div className="main__goods-ul-li-article-pics">
                <img className="main__goods-ul-li-article-designer" src={good.designer.avatar} alt={good.designer.name}></img>
                <div></div>
            </div> */}
            <img className="main__goods-ul-li-article-img" src={good.cover}></img>
            <div className="main__goods-ul-li-article-text">
                <h3>{good.name}</h3>
                <p>В наличии: {good.stock}</p>
                {/* <span>Автор - {good.designer.name}</span> */}
                <button onClick={() => {
                    navigate({
                        pathname: `goods/${good.name}`
                    }, {
                        state: good,
                    })
                }}>Открыть</button>
            </div>

        </article>
    )
}