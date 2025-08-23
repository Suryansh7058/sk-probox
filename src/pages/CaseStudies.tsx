import React from 'react'

const CaseStudies: React.FC = () => {
  const caseStudies = [
    {
      id: 1,
      title: "Cloud Migration Success",
      company: "TechCorp Inc.",
      industry: "Technology",
      challenge: "Legacy system migration to AWS cloud infrastructure",
      solution: "Implemented hybrid cloud strategy with zero-downtime migration",
      results: "40% cost reduction, 99.9% uptime, 3x faster deployment",
      image: "/assets/thumbs/cloud-migration.svg"
    },
    {
      id: 2,
      title: "AI-Powered Automation",
      company: "ManufacturePro",
      industry: "Manufacturing",
      challenge: "Manual quality control processes causing production delays",
      solution: "Computer vision AI system for automated quality inspection",
      results: "60% faster inspection, 95% accuracy, 25% cost savings",
      image: "/assets/thumbs/ai-enterprise.svg"
    },
    {
      id: 3,
      title: "Digital Transformation",
      company: "Retail Solutions",
      industry: "Retail",
      challenge: "Outdated e-commerce platform limiting growth",
      solution: "Modern headless CMS with microservices architecture",
      results: "200% faster page load, 150% increase in conversions",
      image: "/assets/thumbs/digital-maturity.svg"
    }
  ]

  return (
    <div className="container-default py-8">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            📊 Case Studies
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Discover how we've helped organizations transform their digital infrastructure, 
            implement cutting-edge solutions, and achieve remarkable results.
          </p>
        </div>

        {/* Case Studies Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {caseStudies.map((study) => (
            <div key={study.id} className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
              {/* Image */}
              <div className="h-48 bg-gradient-to-br from-blue-50 to-indigo-100 rounded-t-xl flex items-center justify-center p-6">
                <img 
                  src={study.image} 
                  alt={study.title}
                  className="h-24 w-24 opacity-80"
                />
              </div>
              
              {/* Content */}
              <div className="p-6">
                <div className="flex items-center justify-between mb-3">
                  <span className="text-sm font-medium text-blue-600 bg-blue-50 px-3 py-1 rounded-full">
                    {study.industry}
                  </span>
                  <span className="text-xs text-gray-500">{study.company}</span>
                </div>
                
                <h3 className="text-xl font-semibold text-gray-900 mb-3">
                  {study.title}
                </h3>
                
                <div className="space-y-3 mb-4">
                  <div>
                    <h4 className="text-sm font-medium text-gray-700 mb-1">Challenge</h4>
                    <p className="text-sm text-gray-600">{study.challenge}</p>
                  </div>
                  
                  <div>
                    <h4 className="text-sm font-medium text-gray-700 mb-1">Solution</h4>
                    <p className="text-sm text-gray-600">{study.solution}</p>
                  </div>
                  
                  <div>
                    <h4 className="text-sm font-medium text-gray-700 mb-1">Results</h4>
                    <p className="text-sm text-gray-600 font-medium text-green-600">
                      {study.results}
                    </p>
                  </div>
                </div>
                
                <button className="w-full px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors">
                  Read Full Case Study
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div className="bg-gradient-to-r from-blue-600 to-indigo-600 rounded-2xl p-8 text-center text-white">
          <h2 className="text-3xl font-bold mb-4">
            Ready to Start Your Success Story?
          </h2>
          <p className="text-xl mb-6 opacity-90">
            Let's discuss how we can help transform your business with innovative technology solutions.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="px-8 py-3 bg-white text-blue-600 font-semibold rounded-lg hover:bg-gray-50 transition-colors">
              📞 Contact Us
            </button>
            <button className="px-8 py-3 border-2 border-white text-white font-semibold rounded-lg hover:bg-white hover:text-blue-600 transition-colors">
              💼 Get Proposal
            </button>
          </div>
        </div>

        {/* Statistics */}
        <div className="grid md:grid-cols-4 gap-6 mt-12">
          <div className="text-center">
            <div className="text-3xl font-bold text-blue-600 mb-2">50+</div>
            <div className="text-gray-600">Projects Completed</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-blue-600 mb-2">95%</div>
            <div className="text-gray-600">Client Satisfaction</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-blue-600 mb-2">3x</div>
            <div className="text-gray-600">Average Performance Gain</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-blue-600 mb-2">24/7</div>
            <div className="text-gray-600">Support Available</div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default CaseStudies
