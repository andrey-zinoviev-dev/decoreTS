import { goodModel } from "./models/goodModel"
import { useNavigate } from "react-router-dom"
import "./GoodArticle.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { icon } from "@fortawesome/fontawesome-svg-core";
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
                <div className="main__goods-ul-li-article-text-main">
                    <span>{good.name}</span>
                    <div className="main__goods-ul-li-article-text-main-author">
                        <span className="main__goods-ul-li-article-text-main-author-name">{good.designer.name}</span>
                        <img className="main__goods-ul-li-article-text-main-author-pic" src={good.designer.avatar} alt="" />
                    </div>
                    {/* <span className="main__goods-ul-li-article-text-main-author">{good.designer.name}</span> */}
                </div>
                {/* <div className="main__goods-ul-li-article-text-designer">
                    <img src={good.designer.avatar}></img>
                    <div className="main__goods-ul-li-article-text-designer-div">
                        <h3>{good.designer.name}</h3>
                        <FontAwesomeIcon className="svg-arrow" icon={faArrowRight} />
                    </div>
                </div> */}
                <p>В наличии: {good.stock} <div></div></p>
                {/* <span>Автор - {good.designer.name}</span> */}
                <button className="main__goods-ul-li-article-btn" onClick={() => {
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