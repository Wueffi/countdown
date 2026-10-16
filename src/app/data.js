const raw = "S3, 2;Wochenende, 2;S3, 5;Wochenende, 2;Klassenfahrt, 5;Wochenende, 2;S3, 5;Wochenende, 2;S3, 5;Wochenende, 2;S3, 5;Wochenende, 2;S3, 5;Wochenende, 2;S3, 5;Wochenende, 2;S3, 5;Ferien, 16;S3, 5;Wochenende, 2;S3, 4;LEG, 1;Wochenende, 2;S3, 5;Wochenende, 2;S3, 5;Wochenende, 2;S3, 4;TOS, 1;Wochenende, 2;Ausflugstag, 1;S3, 4;Wochenende, 2;S3, 5;Ferien, 16;S3, 4;Zeugnis S3, 1;Wochenende, 2;S4, 5;Wochenende, 2;S4, 5;Wochenende, 2;S4, 4;Halbjahrespause, 1;Wochenende, 2;S4, 5;Wochenende, 2;S4, 5;Wochenende, 2;S4, 1;LEG, 1;S4, 3;Wochenende, 2;S4, 5;Ferien, 16;S4, 5;Wochenende, 2;S4, 4;Karfreitag, 1;Wochenende, 2;Ostermontag, 1;S4, 4;Wochenende, 2;S4, 1";

const start = Date.UTC(2026, 7, 20)
export const end = Date.UTC(2027, 3, 5)

export const days = raw.split(";").flatMap(r => {
    const[l, n] = r.split(", ");
    return Array(+n).fill(l)
}).map((label, i) => {
    const date = new Date(start + i * 864e5);
    const wd = date.getUTCDay();
    return{date, label, weekend:wd === 0 || wd === 6, counts: /^S[34]$/.test(label), type:label}
})

export const fmt = d => `${
    String(d.getUTCDate()).padStart(2, "0")
}.${
    String(d.getUTCMonth()+1).padStart(2, "0")
}.${
    d.getUTCFullYear()
}`

export const info = d => d.weekend&&d.label !== "Wochenende" ? `Wochenende - ${
    d.label
}`:d.label

export const today = () => {
    const n = new Date();
    return Date.UTC(n.getFullYear(), n.getMonth(), n.getDate())
}

export const stats = t => {
    const s = type => {
        const all = days.filter(
            d => d.counts && (!type || d.type === type)
        );
        const left=all.filter(
            d => +d.date >= t
        ).length;
        const total = all.length;
        return{total, left, pct:total ? (total - left) / total * 100:0}
    };
    return{all:s(), a:s("S3"), b:s("S4"), calendar:Math.max(0, Math.round((end - t) / 864e5))}
}

export const upcoming = t => days.filter(
    d => +d.date >= t).slice(0, 6)

console.table(
    days
        .map(d => ({
            date: fmt(d.date),
            label: d.label,
            remaining: +d.date >= today()
        }))
);