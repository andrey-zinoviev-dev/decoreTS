import React from "react"
import { categories } from "./utils"
import "./Header.css"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { Link } from "react-router-dom"
import { faBars, faX } from "@fortawesome/free-solid-svg-icons"
export default function Header() {
  const [menuClicked, setMenuClicked] = React.useState(false);

  return (
    <>
      <header className="header">
        <div className="container">
          <div className="header__wrapper">
            <p className="header__p">DECOREdans</p>
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
            <button className="header__button" onClick={() => {
              setMenuClicked(true);
            }}>
                <FontAwesomeIcon icon={faBars} />
            </button>
          </div>
        </div>
      </header>
      {menuClicked && <div className="sidebar">
        <div>
          <p className="header__p">DECOREdans</p>
          <button>
            <FontAwesomeIcon icon={faX} onClick={() => {
              setMenuClicked(false);
            }}/>
          </button>
        </div>
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
      </div>}
    </>

  )
}