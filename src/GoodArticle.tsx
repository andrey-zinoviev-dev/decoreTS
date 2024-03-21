import { goodModel } from "./models/goodModel"
import { useNavigate } from "react-router-dom"
import "./GoodArticle.css";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
// import { icon } from "@fortawesome/fontawesome-svg-core";
interface goodProps {
    good: goodModel,
}

export default function GoodArticle({good}: goodProps) {
    const navigate = useNavigate();
    return (
        <article className="main__goods-ul-li-article">
            <button className="main__goods-ul-li-article-button" onClick={() => {
                navigate({
                    pathname: `goods/${good.name}`
                })
            }}>
            <img className="main__goods-ul-li-article-img" src={good.cover}></img>
            <div className="main__goods-ul-li-article-text">
                <span className="main__goods-ul-li-article-text-main-span">{good.name}</span>
                <span className="main__goods-ul-li-article-text-main-span">{good.price}</span>
            </div>
            </button>
        </article>
    )
}