import { Outlet } from "react-router-dom";


import Header from "../Components/Header";

export default function AppLayout() {
    return (
        <>
            <header><Header /></header>
            <main>
                <Outlet />
            </main>
            <footer>footer here</footer>
        </>
    )
}