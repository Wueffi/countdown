import "./Upcoming.css"
import { fmt, info } from "../../app/data"

export default function Upcoming({days, t}) {
    return (
        <div className="card upcoming">
            <h2>Heute und die nächsten 5 Tage</h2>
            <div className="days">
                {days.map(d => (
                    <div key={+d.date} className={`day${+d.date === t ? " today" : ""}`}>
                        <span className="day-date">{fmt(d.date)}</span>
                        <span className="day-info">{info(d)}</span>
                    </div>
                ))}
            </div>
        </div>
    )
}