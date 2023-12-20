import { Route, Routes } from "react-router-dom"
import { HomePage } from "../pages/HomePage"
import { AboutPage } from "../pages/AboutPage"
import { PortifolioPage } from "../pages/PortfolioPage"
import { ContactPage } from "../pages/ContactPage"

export const RoutesMain = () => {
    return (
        <Routes>
            <Route path="/" element={<HomePage />}/>            
            <Route path="/about" element={<AboutPage />}/>            
            <Route path="/portfolio" element={<PortifolioPage />}/>            
            <Route path="/contact" element={<ContactPage />}/>            
        </Routes>
    )
}