import { categories } from "./utils"
import "./Header.css"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { Link } from "react-router-dom"
export default function Header() {
  return (
    <header className="header">
      <div className="container">
        <div className="header__wrapper">
          <p className="header-p">DECOREdans</p>
          <nav>
            <ul className="header__ul">
              {categories.map((category) => {
                return <li className="header__ul-li" key={category.name}>
                  <Link to={category.link} className="header__ul-li-btn">
                    <FontAwesomeIcon className="header__ul-li-btn-svg" icon={category.art} />
                    <p className="header__ul-li-btn-p">{category.name}</p>
                  </Link>
                </li>
              })}
            </ul>
          </nav>
        </div>
      </div>
    </header>
  )
}