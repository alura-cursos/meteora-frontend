import { Outlet } from "react-router"
import { Navbar } from "../../components/Navbar"
import { Footer } from "../../components/Footer"

export const Layout = () => {
    return (
        <>
            <Navbar />
            <Outlet />
            <Footer>
                2024 © Desenvolvido por Alura | Projeto fictício sem fins comerciais.
            </Footer>
        </>
    )
}