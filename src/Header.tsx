import { categories } from "./utils"
import "./Header.css"
export default function Header() {
  return (
    <header className="header">
      <p className="header-p">DECOREdans</p>
      <nav>
        <ul className="header-ul">
          {categories.map((category) => {
            return <li className="header-ul-li" key={category}>
              <button>{category}</button>
            </li>
          })}
        </ul>
      </nav>
    </header>
  )
}