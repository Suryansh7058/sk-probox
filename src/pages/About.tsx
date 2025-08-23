
import Section from '../components/Section'
import { InfoCard } from '../components/Common'

export default function About(){
  return (
    <>
      <section className="gradient-hero text-white">
        <div className="container-default py-16 md:py-24">
          <div className="max-w-3xl">
            <h1>Architecting Digital</h1>
            <p className="mt-3 text-white/90">From traditional IT consulting to digital transformation leadership, discover the story behind ProBox InfoTech and the passionate team driving innovation across industries.</p>
            <div className="mt-6 grid grid-cols-2 md:grid-cols-4 gap-3">
              <div className="stat"><div className="text-2xl font-semibold">12+</div><div className="text-sm">Years of Excellence</div></div>
              <div className="stat"><div className="text-2xl font-semibold">200+</div><div className="text-sm">Projects</div></div>
              <div className="stat"><div className="text-2xl font-semibold">95%</div><div className="text-sm">Client Satisfaction</div></div>
              <div className="stat"><div className="text-2xl font-semibold">50+</div><div className="text-sm">Tech Partners</div></div>
            </div>
          </div>
        </div>
      </section>

      <Section title="Our Journey" subtitle="From humble beginnings to industry leadership, explore milestones that shaped ProBox InfoTech.">
        <div className="grid md:grid-cols-2 gap-6">
          <div className="card p-6">
            <h3>Foundation & Vision — 2013</h3>
            <p className="mt-2">ProBox InfoTech was founded with a vision to bridge the gap between business goals and technology execution. We began as a small team delivering modernization projects for SMEs and grew into a transformation partner.</p>
            <div className="mt-4 grid grid-cols-3 gap-3">
              <div className="h-2 rounded bg-primary/20"></div>
              <div className="h-2 rounded bg-primary/40"></div>
              <div className="h-2 rounded bg-primary"></div>
            </div>
          </div>
          <div className="browser-mock">
            <div className="toolbar"><span className="dot"></span><span className="dot"></span><span className="dot"></span></div>
            <div className="p-6 grid grid-cols-2 gap-4">
              <div className="card p-4"><div className="font-semibold">Leadership</div><p className="text-sm text-slate-600">Visionaries & builders</p></div>
              <div className="card p-4"><div className="font-semibold">Core Values</div><p className="text-sm text-slate-600">Innovation • Integrity</p></div>
              <div className="card p-4 col-span-2"><div className="font-semibold">Culture of Innovation</div><p className="text-sm text-slate-600">Learning, community, balance</p></div>
            </div>
          </div>
        </div>
      </Section>

      <Section title="Our Core Values">
        <div className="grid md:grid-cols-4 gap-6">
          <InfoCard title="Innovation" body="Continuously explore new ideas, solutions, and technologies." />
          <InfoCard title="Partnership" body="Win as a team with our clients to achieve long-term success." />
          <InfoCard title="Excellence" body="Deliver the highest standards of quality and reliability." />
          <InfoCard title="Integrity" body="Operate with transparency and accountability." />
        </div>
      </Section>

      <Section title="Why Choose ProBox InfoTech?">
        <div className="grid md:grid-cols-3 gap-6">
          <InfoCard title="True Partnership" body="We act as an extension of your team to achieve outcomes aligned to your strategy." />
          <InfoCard title="Complete Transparency" body="Clear pricing, reporting, and delivery with full visibility." />
          <InfoCard title="Business Impact" body="Focus on initiatives that deliver measurable impact and ROI." />
        </div>
        <div className="mt-6 flex gap-3">
          <a className="btn-primary" href="#">Schedule Consultation</a>
          <a className="btn bg-white text-primary border border-slate-200" href="#">View Success Stories</a>
        </div>
      </Section>
    </>
  )
}
