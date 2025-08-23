
export function Badge({children}:{children:React.ReactNode}) {
  return <span className="px-2.5 py-1 rounded-full bg-slate-100 text-slate-700 text-sm">{children}</span>
}

export function Metric({value, label}:{value:string; label:string}) {
  return (
    <div className="text-center card p-4">
      <div className="text-3xl font-semibold text-primary">{value}</div>
      <div className="text-slate-600 mt-1">{label}</div>
    </div>
  )
}

export function CategoryCard(
  {title, desc, iconSrc}:{title:string; desc:string; iconSrc:string}
){
  return (
    <div className="card p-5">
      <div className="flex items-start gap-3">
        <img src={iconSrc} alt="" className="h-10 w-10 p-1.5 rounded-lg bg-blue-50" />
        <div>
          <h4 className="font-semibold">{title}</h4>
          <p className="text-slate-600 text-sm">{desc}</p>
        </div>
      </div>
    </div>
  )
}
