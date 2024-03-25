// import "./BlogSection.css";
import "./Event.css";
import img from "./assets/test-img.png"
export default function BlogSection() {
    return (
        <section className="event">
            <div className="container">
                <div className="event__wrapper" style={{backgroundImage: `url(${img})`}}>
                    <span>25.10.2024</span>
                    <h3>Воркшоп по trap tube ловушкам</h3>
                    <p>Будем создавать ловушки для студий, музыкальных школ и звукорежиссеров</p>
                    <button>Записаться</button>
                </div>
            </div>
        </section>
    )
}