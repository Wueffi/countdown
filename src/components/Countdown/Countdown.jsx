import "./Countdown.css"
import ProgressBar from "../ProgressBar/ProgressBar"

export default function Countdown({ s }) {
    return (
        <div className="card countdown">
            <p className="big">{s.all.left}</p>
            <p className="muted">von {s.all.total} Schultagen (S3/S4) übrig bis zur Zeugniskonferenz, noch {s.calendar} ganze Tage</p>
            <ProgressBar pct={s.all.pct} />
            <div className="progress-label">
                <b>{s.all.pct.toFixed(1)}%</b>
                <span className="muted"> geschafft</span>
            </div>
        </div>
    )
}