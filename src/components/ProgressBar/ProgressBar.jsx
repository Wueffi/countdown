import "./ProgressBar.css"

export default function ProgressBar({pct, color = "#818cf8"}) {
    return (
        <div className="bar">
            <div style={{width: `${pct}%`, background: color}} />
        </div>
    )
}