
import Section from '../components/Section'
import { InfoCard } from '../components/Common'
import { CategoryCard } from '../components/UI'
import { useMemo, useState } from 'react'

const ALL = [
  { id: 'ai',   title: 'AI in Enterprise 2025: Implementation Strategies', body: 'Comprehensive guide to AI strategies, ROI frameworks, common pitfalls, and optimization techniques.', thumb: '/assets/thumbs/ai-enterprise.svg', cta: 'Download PDF' },
  { id: 'cm',   title: 'Cloud Migration Best Practices', body: 'Expert insights on successful cloud migration strategies across industries.', thumb: '/assets/thumbs/cloud-migration.svg', cta: 'Watch Now' },
  { id: 'dm',   title: 'Digital Maturity Assessment', body: 'Evaluate your organization’s digital maturity and get a personalized roadmap.', thumb: '/assets/thumbs/digital-maturity.svg', cta: 'Start Assessment' },
  { id: 'csf',  title: 'Cloud Security Framework Implementation', body: 'Research-backed security frameworks for cloud migration.', thumb: '/assets/thumbs/cloud-migration.svg', cta: 'Download Guide' },
  { id: 'devops', title: 'DevOps Automation Strategies', body: 'Modern delivery strategies, patterns and tools.', thumb: '/assets/thumbs/ai-enterprise.svg', cta: 'Watch Video' },
  { id: 'roi',  title: 'ROI Calculator for Cloud Migration', body: 'Estimate expected cost savings over 3 years.', thumb: '/assets/thumbs/digital-maturity.svg', cta: 'Use Calculator' },
]

export default function Resources(){
  const [q, setQ] = useState('')
  const filtered = useMemo(
    () => ALL.filter(x => x.title.toLowerCase().includes(q.toLowerCase()) || x.body.toLowerCase().includes(q.toLowerCase())),
    [q]
  )

  return (
    <>
      <section className="gradient-hero text-white">
        <div className="container-default grid md:grid-cols-2 gap-10 items-center py-16 md:py-24">
          <div>
            <h1>Knowledge</h1>
            <p className="mt-4 text-white/90 max-w-2xl">Access comprehensive technical documentation, industry insights, and educational content that keeps you ahead of digital transformation trends.</p>
            <div className="mt-6">
              <input
                value={q}
                onChange={e => setQ(e.target.value)}
                className="w-full md:w-3/4 rounded-xl border border-white/30 bg-white/10 px-4 py-3 placeholder-white/70 focus:outline-none"
                placeholder="Search resources, whitepapers, tutorials..." />
            </div>
          </div>
          <div className="browser-mock">
            <div className="toolbar"><span className="dot"></span><span className="dot"></span><span className="dot"></span></div>
            <div className="p-5 grid sm:grid-cols-2 gap-4">
              <CategoryCard iconSrc="/assets/icons/whitepaper.svg" title="Whitepapers" desc="In-depth research and analysis on emerging trends." />
              <CategoryCard iconSrc="/assets/icons/guide.svg" title="Technical Guides" desc="Step-by-step implementation playbooks & docs." />
              <CategoryCard iconSrc="/assets/icons/video.svg" title="Video Library" desc="Webinars, demos, and expert sessions." />
              <CategoryCard iconSrc="/assets/icons/tools.svg" title="Interactive Tools" desc="Calculators and assessments." />
            </div>
          </div>
        </div>
      </section>

      <Section title="Featured Resources" subtitle="Our most popular and impactful content">
        <div className="grid lg:grid-cols-3 gap-6">
          {ALL.slice(0,3).map(x => (
            <div className="card p-5" key={x.id}>
              <img src={x.thumb} alt="" className="h-36 w-full rounded-xl object-cover mb-4" />
              <h3 className="">{x.title}</h3>
              <p className="text-slate-600 mt-2">{x.body}</p>
              <a className="btn bg-primary text-white mt-4">{x.cta}</a>
            </div>
          ))}
        </div>
      </Section>

      <Section title="All Resources">
        <div className="grid md:grid-cols-3 gap-6">
          {filtered.map(x => (
            <div className="card p-6" key={x.id}>
              <h3 className="mb-2">{x.title}</h3>
              <p className="mb-4">{x.body}</p>
              <a href="#" className="text-primary font-medium">{x.cta} →</a>
            </div>
          ))}
        </div>
      </Section>
    </>
  )
}
