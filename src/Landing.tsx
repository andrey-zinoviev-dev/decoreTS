import { Outlet } from "react-router-dom";

export default function Landing() {
    return (
        <>
            <header></header>
            <main>
                <Outlet></Outlet>
            </main>
            <footer></footer>
        </>

        // <section></section>
    )
};