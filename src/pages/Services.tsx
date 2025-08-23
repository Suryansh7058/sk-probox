
import Section from '../components/Section'

function ProcessStep({index, title, body}:{index:number; title:string; body:string}){
  return (
    <div className="flex gap-3 items-start">
      <div className="h-8 w-8 rounded-full bg-primary text-white flex items-center justify-center">{index}</div>
      <div>
        <h4 className="font-semibold">{title}</h4>
        <p className="text-slate-700">{body}</p>
      </div>
    </div>
  )
}

export default function Services(){
  return (
    <>
      <section className="gradient-hero text-white hero-angle">
        <div className="container-default py-16 md:py-24">
          <div className="grid md:grid-cols-2 gap-10 items-center relative z-10">
            <div>
              <h1>Comprehensive</h1>
              <p className="mt-3 text-white/90 max-w-2xl">
                From cloud transformation to AI implementation, we deliver end-to-end digital solutions that drive measurable business outcomes.
              </p>
              <div className="mt-6 grid grid-cols-3 gap-3">
                <div className="stat"><div className="text-2xl font-semibold">6</div><div className="text-sm">Core Service Areas</div></div>
                <div className="stat"><div className="text-2xl font-semibold">50+</div><div className="text-sm">Technology Partners</div></div>
                <div className="stat"><div className="text-2xl font-semibold">200+</div><div className="text-sm">Successful Projects</div></div>
              </div>
            </div>
            <div className="browser-mock">
              <div className="toolbar"><span className="dot"></span><span className="dot"></span><span className="dot"></span></div>
              <div className="p-6 grid grid-cols-2 gap-4">
                <div className="card p-4"><div className="font-semibold">Cloud</div><p className="text-sm text-slate-600">AWS • Azure • GCP</p></div>
                <div className="card p-4"><div className="font-semibold">Kubernetes</div><p className="text-sm text-slate-600">Infra at scale</p></div>
                <div className="card p-4"><div className="font-semibold">AI & Automation</div><p className="text-sm text-slate-600">ML • RPA</p></div>
                <div className="card p-4"><div className="font-semibold">Security</div><p className="text-sm text-slate-600">Zero-trust</p></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Section title="Cloud Transformation" subtitle="Migrate, optimize, and scale with confidence">
        <div className="grid md:grid-cols-2 gap-8">
          <div className="card p-6 space-y-3">
            <div className="flex flex-wrap gap-2">
              <span className="badge">AWS</span>
              <span className="badge">Microsoft Azure</span>
              <span className="badge">Google Cloud</span>
              <span className="badge">Kubernetes</span>
              <span className="badge">Docker</span>
              <span className="badge">Terraform</span>
            </div>
            <ul className="list-disc pl-6 text-slate-700 space-y-1">
              <li>Cost Optimization: reduce infrastructure costs by 30–50%.</li>
              <li>Enhanced Security with enterprise-grade frameworks.</li>
              <li>Scalable Architecture that grows with your business.</li>
            </ul>
          </div>
          <div className="card p-6 space-y-4">
            <h3 className="">Migration Process Workflow</h3>
            <div className="space-y-4">
              <ProcessStep index={1} title="Discovery & Assessment" body="Comprehensive infrastructure audit and migration planning." />
              <ProcessStep index={2} title="Architecture Design" body="Cloud-native architecture with security and compliance." />
              <ProcessStep index={3} title="Migration & Testing" body="Phased migration with minimal downtime and thorough testing." />
              <ProcessStep index={4} title="Optimization & Support" body="Continuous monitoring and performance optimization." />
            </div>
          </div>
        </div>
      </Section>

      <Section title="Success Stories">
        <div className="grid md:grid-cols-3 gap-6">
          <div className="card p-5">
            <div className="badge mb-3">Cloud Migration</div>
            <p>Migrated legacy infrastructure to AWS, reducing costs by 45% while improving performance and reliability.</p>
            <div className="mt-3 font-semibold text-primary">45% cost reduction</div>
          </div>
          <div className="card p-5">
            <div className="badge mb-3">AI Implementation</div>
            <p>Implemented predictive maintenance AI, reducing equipment downtime by 60% and maintenance costs by 30%.</p>
            <div className="mt-3 font-semibold text-primary">60% downtime reduction</div>
          </div>
          <div className="card p-5">
            <div className="badge mb-3">Cybersecurity</div>
            <p>Implemented zero-trust security framework, achieving 100% compliance and preventing security incidents.</p>
            <div className="mt-3 font-semibold text-primary">100% compliance</div>
          </div>
        </div>
      </Section>
    </>
  )
}
