import { links } from "./utils";
import "./Footer.css"
import { socialMediaLinks } from "./utils";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
export default function Footer() {
  return (
    <footer className="footer">
      <p>&copy; 2024 DECOREdans</p>
      <ul>
        {links.map((link) => {
          return <li key={link}>
            <a>{link}</a>
          </li>
        })}
      </ul>
      <ul>
        {socialMediaLinks.map((socialLink) => {
          return <li key={socialLink.link}>
            <a href={socialLink.link}>
              <FontAwesomeIcon icon={socialLink.icon} />
            </a>
          </li>
        })}
      </ul>

    </footer>
  )
}