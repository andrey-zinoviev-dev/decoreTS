import { designers } from "./utils";
import "./MainDesigners.css"
export default function MainDesigners() {
    return (
        <section className="designers">
            <div className="container">
                <h2>Дизайнеры</h2>
                <ul>
                    {designers.map((designer) => {
                        return <li key={designer.name}>
                            <p>{designer.name}</p>
                            <img src={designer.cover}></img>
                            <span>Работы: {designer.works}</span>
                        </li>
                    })}
                </ul>
            </div>
        </section>
    )
}