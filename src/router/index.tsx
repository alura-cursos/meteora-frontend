import { BrowserRouter, Route, Routes } from "react-router"
import Home from "../pages/Home"
import { Layout } from "../pages/Layout"

export const Router = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route element={<Layout />}>
                    <Route path="/" element={<Home />} />
                </Route>
            </Routes>
        </BrowserRouter>
    )
}