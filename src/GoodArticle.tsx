import { goodModel } from "./models/goodModel"
import { useNavigate } from "react-router-dom"

interface goodProps {
    good: goodModel,
};

export default function GoodArticle({good}: goodProps) {
    const navigate = useNavigate();
    return (
        <>
            <h3>{good.name}</h3>
            <p>{good.desription}</p>
            <p>{good.stock.toString()}</p>
            <span>Автор - {good.designer.name}</span>
            <button onClick={() => {
                navigate({
                    pathname: `goods/${good.name}`
                }, {
                    state: good,
                })
            }}>Открыть</button>
            {/* <button></button> */}
        </>
    )
}