
export function Stat({value, label}:{value:string; label:string}){
  return (
    <div className="text-white stat">
      <div className="text-2xl font-semibold">{value}</div>
      <div className="text-sm opacity-90">{label}</div>
    </div>
  )
}

export function InfoCard({title, body, cta}:{title:string; body:string; cta?:string}){
  return (
    <div className="card p-6">
      <h3 className="mb-2">{title}</h3>
      <p className="mb-4">{body}</p>
      {cta && <a href="#" className="text-primary font-medium">{cta} →</a>}
    </div>
  )
}
