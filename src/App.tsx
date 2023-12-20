import "./styles/styledGlobal.scss"
import { Header } from "./components/Header/Header";
import { RoutesMain } from "./routes/RoutesMain";
import { useContext } from "react";
import { PortfolioContext } from "./providers/PortfolioContext";

function App() {
  
  const { isDarkMode } = useContext(PortfolioContext)

  return (
    <div className={isDarkMode ? "darkmode" : "ligthmode"}>
      <Header />
      <RoutesMain />
    </div>
  )
}

export default App
