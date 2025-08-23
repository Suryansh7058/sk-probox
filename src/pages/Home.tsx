
import Section from '../components/Section'
import { Stat, InfoCard } from '../components/Common'
import { Metric } from '../components/UI'

export default function Home(){
  return (
    <>
      <section className="gradient-hero text-white">
        <div className="container-default grid md:grid-cols-2 gap-10 py-16 md:py-24 items-center">
          <div>
            <h1>Architecting</h1>
            <p className="mt-4 text-white/90 max-w-xl">
              Transform your business with cutting-edge technology solutions.
              We don't just deliver services—we architect digital transformations that drive measurable results.
            </p>
            <div className="mt-6 flex gap-3">
              <a className="btn-primary" href="#">Schedule Consultation</a>
              <a className="btn-outline" href="#">View Success Stories</a>
            </div>
            <div className="mt-6 flex gap-3">
              <Stat value="128" label="Active Projects" />
              <Stat value="98%" label="Client Satisfaction" />
              <Stat value="$2.4M" label="Cost Savings Generated" />
            </div>
          </div>
          <div className="browser-mock">
            <div className="toolbar"><span className="dot"></span><span className="dot"></span><span className="dot"></span><div className="ml-3 text-sm text-slate-500">probox-infotech.com</div></div>
            <div className="p-6 grid sm:grid-cols-3 gap-4">
              <div className="card p-4 bg-blue-50 border-blue-100">
                <div className="text-2xl font-semibold text-primary">Cloud</div>
                <p className="text-slate-600 text-sm mt-1">Migration & cost optimization</p>
              </div>
              <div className="card p-4">
                <div className="text-2xl font-semibold text-primary">AI</div>
                <p className="text-slate-600 text-sm mt-1">Automation & ML</p>
              </div>
              <div className="card p-4">
                <div className="text-2xl font-semibold text-primary">Infra</div>
                <p className="text-slate-600 text-sm mt-1">Secure foundations</p>
              </div>
              <div className="sm:col-span-3 card p-5">
                <div className="font-semibold">Featured Case Study</div>
                <p className="text-slate-600 text-sm mt-1">40% cost reduction & 3x faster deployments for TechFlow Solutions.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Section title="Comprehensive Technology Solutions" subtitle="From cloud migration to AI implementation, we deliver end-to-end digital transformation services that drive measurable business outcomes.">
        <div className="grid md:grid-cols-3 gap-6">
          <InfoCard title="Cloud Solutions" body="Migrate, optimize, and scale your infrastructure to reduce costs while improving performance." cta="Learn More" />
          <InfoCard title="AI & Automation" body="Implement intelligent automation solutions to streamline operations and unlock value." cta="Learn More" />
          <InfoCard title="Digital Infrastructure" body="Build scalable, secure, and resilient digital foundations for growth." cta="Learn More" />
        </div>
      </Section>

      <Section title="Trusted by Industry Leaders">
        <div className="grid sm:grid-cols-3 gap-6">
          <Metric value="40%" label="Infrastructure Cost Reduction"/>
          <Metric value="3x" label="Deployment Speed Increase"/>
          <Metric value="99.9%" label="System Uptime Achieved"/>
        </div>
      </Section>

      <Section title="Innovation Lab" subtitle="Stay ahead with our cutting-edge research, whitepapers, and tools.">
        <div className="grid md:grid-cols-2 gap-6 items-start">
          <div className="space-y-3">
            <a className="card p-4 flex justify-between items-center" href="/resources"><div>AI in Enterprise 2025</div><span className="badge">Whitepaper</span></a>
            <a className="card p-4 flex justify-between items-center" href="/resources"><div>Cloud Security Best Practices</div><span className="badge">Guide</span></a>
            <a className="btn bg-primary text-white mt-4 inline-flex" href="/resources">Access Innovation Lab</a>
          </div>
          <div className="browser-mock">
            <div className="toolbar"><span className="dot"></span><span className="dot"></span><span className="dot"></span></div>
            <div className="p-6 grid grid-cols-2 gap-4">
              <div className="card p-4"><div className="font-semibold">K8s Security</div><p className="text-sm text-slate-600">Best practices</p></div>
              <div className="card p-4"><div className="font-semibold">AI Model Ops</div><p className="text-sm text-slate-600">Deployment tips</p></div>
              <div className="card p-4 col-span-2"><div className="font-semibold">ROI Calculator</div><p className="text-sm text-slate-600">Estimate your savings</p></div>
            </div>
          </div>
        </div>
      </Section>
    </>
  )
}
