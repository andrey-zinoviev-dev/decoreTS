import { categories } from "./utils"
import "./Header.css"
export default function Header() {
  return (
    <header className="header">
      <p className="header-p">DECOREdans</p>
      <nav>
        <ul className="header__ul">
          {categories.map((category) => {
            return <li className="header__ul-li" key={category}>
              <button className="header__ul-li-btn">
                <p className="header__ul-li-btn-p">{category}</p>
              </button>
            </li>
          })}
        </ul>
      </nav>
    </header>
  )
}