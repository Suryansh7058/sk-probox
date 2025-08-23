import React, { useState } from 'react'

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    message: '',
    service: 'general'
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle form submission here
    console.log('Form submitted:', formData)
    alert('Thank you for your message! We\'ll get back to you soon.')
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  return (
    <div className="container-default py-8">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            📞 Contact Us
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Ready to transform your business? Let's discuss how our innovative 
            technology solutions can help you achieve your goals.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <div className="bg-white rounded-xl shadow-lg p-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-6">
              Send us a message
            </h2>
            
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                    Full Name *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors"
                    placeholder="John Doe"
                  />
                </div>
                
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors"
                    placeholder="john@company.com"
                  />
                </div>
              </div>
              
              <div>
                <label htmlFor="company" className="block text-sm font-medium text-gray-700 mb-2">
                  Company
                </label>
                <input
                  type="text"
                  id="company"
                  name="company"
                  value={formData.company}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors"
                  placeholder="Your Company"
                />
              </div>
              
              <div>
                <label htmlFor="service" className="block text-sm font-medium text-gray-700 mb-2">
                  Service of Interest
                </label>
                <select
                  id="service"
                  name="service"
                  value={formData.service}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors"
                >
                  <option value="general">General Inquiry</option>
                  <option value="cloud">Cloud Solutions</option>
                  <option value="ai">AI & Automation</option>
                  <option value="infrastructure">Digital Infrastructure</option>
                  <option value="security">Cybersecurity</option>
                  <option value="consulting">Consulting</option>
                </select>
              </div>
              
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                  Message *
                </label>
                <textarea
                  id="message"
                  name="message"
                  required
                  rows={5}
                  value={formData.message}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors resize-none"
                  placeholder="Tell us about your project or how we can help..."
                />
              </div>
              
              <button
                type="submit"
                className="w-full px-6 py-3 bg-gradient-to-r from-blue-600 to-indigo-600 text-white font-semibold rounded-lg hover:from-blue-700 hover:to-indigo-700 transition-all duration-200 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5"
              >
                📤 Send Message
              </button>
            </form>
          </div>

          {/* Contact Information */}
          <div className="space-y-8">
            {/* Company Info */}
            <div className="bg-gradient-to-br from-blue-50 to-indigo-100 rounded-xl p-6">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">
                🏢 ProBox InfoTech
              </h3>
              <p className="text-gray-700 mb-4">
                Architecting digital futures through innovative technology solutions.
              </p>
              <div className="space-y-2 text-sm text-gray-600">
                <p>📍 San Francisco, CA</p>
                <p>🌐 www.proboxinfotech.com</p>
                <p>📧 hello@proboxinfotech.com</p>
              </div>
            </div>

            {/* Services */}
            <div className="bg-white rounded-xl shadow-lg p-6">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">
                ⚡ Our Services
              </h3>
              <ul className="space-y-2 text-gray-600">
                <li>☁️ Cloud Migration & Optimization</li>
                <li>🤖 AI & Machine Learning Solutions</li>
                <li>🏗️ Digital Infrastructure Design</li>
                <li>🔒 Cybersecurity & Compliance</li>
                <li>📱 Custom Software Development</li>
                <li>💼 Technology Consulting</li>
              </ul>
            </div>

            {/* Response Time */}
            <div className="bg-green-50 border border-green-200 rounded-xl p-6">
              <h3 className="text-xl font-semibold text-green-800 mb-2">
                ⏰ Response Time
              </h3>
              <p className="text-green-700">
                We typically respond to all inquiries within <strong>24 hours</strong> 
                during business days.
              </p>
            </div>
          </div>
        </div>

        {/* Additional Contact Methods */}
        <div className="mt-16 text-center">
          <h2 className="text-2xl font-semibold text-gray-900 mb-6">
            Other ways to reach us
          </h2>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-white rounded-xl shadow-lg p-6">
              <div className="text-3xl mb-3">📞</div>
              <h3 className="font-semibold text-gray-900 mb-2">Phone Support</h3>
              <p className="text-gray-600">+1 (555) 123-4567</p>
              <p className="text-sm text-gray-500">Mon-Fri, 9AM-6PM PST</p>
            </div>
            
            <div className="bg-white rounded-xl shadow-lg p-6">
              <div className="text-3xl mb-3">💬</div>
              <h3 className="font-semibold text-gray-900 mb-2">Live Chat</h3>
              <p className="text-gray-600">Available on our website</p>
              <p className="text-sm text-gray-500">24/7 automated support</p>
            </div>
            
            <div className="bg-white rounded-xl shadow-lg p-6">
              <div className="text-3xl mb-3">📧</div>
              <h3 className="font-semibold text-gray-900 mb-2">Email Support</h3>
              <p className="text-gray-600">support@proboxinfotech.com</p>
              <p className="text-sm text-gray-500">Technical assistance</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Contact
