import { Link, Outlet } from "react-router-dom";
import Header from "./Header";
import Footer from "./Footer";
import "./Landing.css"
import { socialMediaLinks } from "./utils";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
export default function Landing() {
    return (
        <>
            <Header />
            <main className="main">
                <ul className="main__links">
                    {socialMediaLinks.map((link) => {
                        return <li key={link.link}>
                            <Link className="main__links-link" to={link.link}>
                                <FontAwesomeIcon icon={link.icon} />
                            </Link>
                        </li>
                    })}
                </ul>
                <Outlet />
            </main>
            <Footer />
        </>

        // <section></section>
    )
}