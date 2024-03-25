import "./Subscribe.css";
import Event from "./Event";
export default function Subscribe() {
    return (
        <section className="subscribe">
            <div className="container">
                <h3>Здесь можно подписаться на наши новости, чтобы всегда найти лучшие элементы декора локальных дизайнеров</h3>
                <form>
                    <input placeholder="почта, чтобы быть в курсе" name="email"></input>
                    <button>Подписаться</button>
                </form>
                <Event />
            </div>
        </section>
    )
}