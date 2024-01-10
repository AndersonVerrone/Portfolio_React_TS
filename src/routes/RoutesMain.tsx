import { Route, Routes, useLocation } from "react-router-dom"
import { HomePage } from "../pages/HomePage"
import { AboutPage } from "../pages/AboutPage"
import { PortifolioPage } from "../pages/PortfolioPage"
import { ContactPage } from "../pages/ContactPage"
import { AnimatePresence } from "framer-motion"

export const RoutesMain = () => {
    const location = useLocation()

    return (
        <AnimatePresence mode="wait">
            <Routes location={location} key={location.pathname}>
                <Route path="/" element={<HomePage />}/>            
                <Route path="/about" element={<AboutPage />}/>            
                <Route path="/portfolio" element={<PortifolioPage />}/>            
                <Route path="/contact" element={<ContactPage />}/>            
            </Routes>
        </AnimatePresence>
    )
}