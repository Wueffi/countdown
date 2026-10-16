import "./Split.css"
import ProgressBar from "../ProgressBar/ProgressBar"

const Part = ({name, x, color}) => (
    <div className="card split-card">
        <h2>{name}-Tage</h2>

        <div className="split-number">{x.left}</div>
        <span className="muted"> von {x.total} übrig</span>

        <ProgressBar pct={x.pct} color={color}/>

        <span className="split-percent">{x.pct.toFixed(1)}%</span>
    </div>
)

export default function Split({s}) {
    return (
        <div className="split">
            <Part name="S3" x={s.a} color="#38bdf8"/>
            <Part name="S4" x={s.b} color="#a78bfa"/>
        </div>
    )
}