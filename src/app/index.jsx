import { createRoot } from "react-dom/client"
import "./index.css"
import { today, stats, upcoming } from "./data"
import Countdown from "../components/Countdown/Countdown"
import Split from "../components/Split/Split"
import Upcoming from "../components/Upcoming/Upcoming"

function App() {
    const t = today();
    const s = stats(t);
    return(
        <div className="app">
            <Countdown s={s} />
            <Split s={s} />
            <Upcoming days = {upcoming(t)} t={t} />
        </div>
    )
}

createRoot(document.getElementById("root")).render(<App />)