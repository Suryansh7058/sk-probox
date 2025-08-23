
export default function Section({title, subtitle, children}:{title?:string; subtitle?:string; children:React.ReactNode}){
  return (
    <section className="section">
      <div className="container-default">
        {title && <h2 className="text-center">{title}</h2>}
        {subtitle && <p className="mt-3 text-center max-w-2xl mx-auto">{subtitle}</p>}
        <div className="mt-8">{children}</div>
      </div>
    </section>
  )
}
