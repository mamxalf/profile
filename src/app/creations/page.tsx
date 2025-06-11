'use client'

import { Container } from '@/components/Container'
import { useState } from 'react'
// Static image imports - recommended Next.js approach
import talkScoreImage from '@/images/photos/talkscore.png'
import academyImage from '@/images/photos/academy.png'
import hiSpatialImage from '@/images/logos/hispatial.jpeg'

const products = [
  {
    id: 1,
    name: 'Talk Score - Elevate your English skills with AI-powered precision',
    href: 'https://talkscore.app/',
    price: 'SaaS Platform',
    description: 'Master English with Talk Score, your intelligent companion for personalized learning, comprehensive feedback, and interview preparation. Achieve fluency and confidence in your English journey.',
    imageSrc: talkScoreImage,
    imageAlt: 'Talk Score - Elevate your English skills with AI-powered precision',
    type: 'SaaS',
    status: 'Live',
    features: ['Personalized Learning', 'Comprehensive Feedback', 'Interview Preparation', 'AI-powered Precision'],
    color: 'blue',
  },
  {
    id: 2,
    name: 'Academy HI Spatial - Learn GIS with practical examples',
    href: 'https://academy.hi-spatial.com/',
    price: 'SaaS Platform',
    description:
      'Unlock the power of GIS with Academy HI Spatial, your gateway to geospatial knowledge. Learn from practical examples and master spatial analysis techniques with ease.',
    imageSrc: academyImage,
    imageAlt: 'Academy HI Spatial - Learn GIS with practical examples',
    type: 'SaaS',
    status: 'Live',
    features: ['Practical Examples', 'Spatial Analysis', 'Data Visualization', 'Geospatial Data'],
    color: 'blue',
  },
  {
    id: 3,
    name: 'HI Spatial Community - Spatial specialize, spatialize society',
    href: 'https://www.instagram.com/hi.spatial/',
    price: 'Instagram',
    description:
      'Join the HI Spatial Community, a platform for spatial specialists to share knowledge, collaborate, and innovate. Connect with like-minded professionals and stay updated on the latest trends in spatial technology.',
    imageSrc: hiSpatialImage,
    imageAlt: 'HI Spatial Community - Spatial specialize, spatialize society',
    type: 'Instagram',
    status: 'Live',
    features: ['Spatial Specialists', 'Collaboration', 'Innovation', 'Knowledge Sharing'],
    color: 'red',
  },
  {
    id: 4,
    name: 'Pemrograman Python Dasar untuk GIS Professional',
    href: 'https://hi-spatial.myr.id/ebook/pemrograman-python-dasar-untuk-gis-professional',
    price: 'Rp. 99.000,-',
    description:
      'A comprehensive guide to Python programming fundamentals specifically tailored for GIS professionals. Learn essential programming concepts and apply them to geospatial data analysis and automation.',
    imageSrc:
      'https://media-myr.b-cdn.net/images/resized/1080/03107567-6fb2-4d60-afa2-6787517b1cc8.jpeg',
    imageAlt: 'Pemrograman Python Dasar untuk GIS Professional',
    type: 'Ebook',
    status: 'Available',
    features: ['Python Fundamentals', 'GIS Integration', 'Data Analysis', 'Automation'],
    color: 'emerald',
  },
  {
    id: 5,
    name: 'Panduan Lengkap GeoPandas: Analisis dan Visualisasi Data Geospatial dengan Python',
    href: 'https://hi-spatial.myr.id/ebook/panduan-lengkap-geopandas-analisis-dan-visualisasi-data-geospatial-dengan-python',
    price: 'Rp. 199.000,-',
    description:
      'Master geospatial data analysis and visualization using GeoPandas. This comprehensive guide covers everything from basic operations to advanced spatial analysis techniques with practical examples.',
    imageSrc:
      'https://media-myr.b-cdn.net/images/resized/1080/392687d2-8c91-49b9-839d-8a87d92725de.jpeg',
    imageAlt:
      'Panduan Lengkap GeoPandas: Analisis dan Visualisasi Data Geospatial dengan Python',
    type: 'Ebook',
    status: 'Available',
    features: ['GeoPandas Mastery', 'Spatial Analysis', 'Data Visualization', 'Practical Examples'],
    color: 'emerald',
  },
]

export default function Creations() {
  const [hoveredCard, setHoveredCard] = useState<number | null>(null)
  const [filter, setFilter] = useState<string>('all')

  const filteredProducts = filter === 'all' 
    ? products 
    : products.filter(product => product.type.toLowerCase() === filter.toLowerCase())

  const getColorClasses = (color: string) => {
    const colors = {
      blue: 'from-blue-500 to-blue-600 text-white',
      purple: 'from-purple-500 to-purple-600 text-white',
      emerald: 'from-emerald-500 to-emerald-600 text-white',
      amber: 'from-amber-500 to-amber-600 text-white',
      red: 'from-red-500 to-red-600 text-white',
    }
    return colors[color as keyof typeof colors] || colors.blue
  }

  return (
    <Container className="mt-16 sm:mt-32">
      {/* Enhanced Header Section */}
      <header className="max-w-4xl mx-auto text-center">
        <div className="inline-flex items-center rounded-full bg-teal-50 px-6 py-2 text-sm font-medium text-teal-600 dark:bg-teal-900/50 dark:text-teal-400 mb-8">
          <svg className="mr-2 h-4 w-4" fill="currentColor" viewBox="0 0 20 20">
            <path fillRule="evenodd" d="M11.3 1.046A1 1 0 0112 2v5h4a1 1 0 01.82 1.573l-7 10A1 1 0 018 18v-5H4a1 1 0 01-.82-1.573l7-10a1 1 0 011.12-.38z" clipRule="evenodd" />
          </svg>
          Featured Projects & Digital Solutions
        </div>
        
        <h1 className="text-5xl font-bold tracking-tight text-zinc-800 sm:text-6xl lg:text-7xl dark:text-zinc-100 mb-6">
          A Showcase of Passion and Craft.
        </h1>
        <p className="mt-6 text-base text-zinc-600 dark:text-zinc-400">
          Welcome to my creative corner! Here, you'll find a collection of my
          work, ranging from innovative projects to artistic endeavors. Each
          piece represents my journey and the skills I've honed along the way.
          Dive in to explore the stories behind my creations, and discover the
          inspiration that fuels my passion for creativity.
        </p>

        {/* Filter Buttons */}
        <div className="mt-12 flex flex-wrap justify-center gap-4">
          {['all', 'saas', 'ebook'].map((filterType) => (
            <button
              key={filterType}
              onClick={() => setFilter(filterType)}
              className={`px-6 py-3 rounded-full font-medium transition-all duration-300 ${
                filter === filterType
                  ? 'bg-teal-600 text-white shadow-lg scale-105'
                  : 'bg-white text-zinc-700 hover:bg-zinc-50 dark:bg-zinc-800 dark:text-zinc-300 dark:hover:bg-zinc-700 border border-zinc-200 dark:border-zinc-700'
              }`}
            >
              {filterType === 'all' ? 'All Projects' : filterType === 'saas' ? 'SaaS Platforms' : 'Educational Resources'}
            </button>
          ))}
        </div>

        {/* Stats */}
        <div className="mt-16 grid grid-cols-1 gap-8 sm:grid-cols-3 lg:grid-cols-3">
          <div className="text-center">
            <div className="text-3xl font-bold text-blue-600 dark:text-blue-400">2</div>
            <div className="text-sm font-medium text-zinc-600 dark:text-zinc-400">SaaS Platforms</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-emerald-600 dark:text-emerald-400">2</div>
            <div className="text-sm font-medium text-zinc-600 dark:text-zinc-400">Educational Resources</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-teal-600 dark:text-teal-400">100%</div>
            <div className="text-sm font-medium text-zinc-600 dark:text-zinc-400">Active & Available</div>
          </div>
        </div>
      </header>

      {/* Enhanced Products Grid */}
      <div className="mx-auto max-w-7xl px-4 py-24 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:gap-12">
          {filteredProducts.map((product) => (
            <div
              key={product.id}
              className={`group relative flex flex-col overflow-hidden rounded-2xl bg-white shadow-xl transition-all duration-500 hover:shadow-2xl dark:bg-zinc-900 ${
                hoveredCard === product.id ? 'scale-105 -rotate-1' : ''
              }`}
              onMouseEnter={() => setHoveredCard(product.id)}
              onMouseLeave={() => setHoveredCard(null)}
            >
              {/* Image Section with Enhanced Overlay */}
              <div className="relative aspect-[4/3] overflow-hidden bg-zinc-50 dark:bg-zinc-800">
                <img
                  alt={product.imageAlt}
                  src={typeof product.imageSrc === 'string' ? product.imageSrc : product.imageSrc.src}
                  className="absolute inset-0 h-full w-full object-cover object-center transition-transform duration-700 group-hover:scale-110"
                  onError={(e) => {
                    const target = e.target as HTMLImageElement
                    target.style.display = 'none'
                  }}
                />
                
                {/* Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100"></div>
                
                {/* Enhanced Badges */}
                <div className="absolute left-6 top-6 z-20">
                  <span className={`inline-flex items-center rounded-full bg-gradient-to-r ${getColorClasses(product.color)} px-4 py-2 text-sm font-bold shadow-lg backdrop-blur-sm`}>
                    <svg className="mr-2 h-4 w-4" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    {product.type}
                  </span>
                </div>
                
                <div className="absolute right-6 top-6 z-20">
                  <span className="inline-flex items-center rounded-full bg-white/90 px-4 py-2 text-sm font-bold text-zinc-800 shadow-lg backdrop-blur-sm dark:bg-zinc-800/90 dark:text-zinc-200">
                    <div className="mr-2 h-2 w-2 rounded-full bg-emerald-500"></div>
                    {product.status}
                  </span>
                </div>

                {/* Hover CTA */}
                <div className="absolute inset-0 flex items-center justify-center opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                  <a
                    href={product.href}
                    className="rounded-full bg-white/90 px-6 py-3 text-lg font-bold text-zinc-900 shadow-xl backdrop-blur-sm transition-transform hover:scale-110 dark:bg-zinc-900/90 dark:text-zinc-100"
                  >
                    Explore Project →
                  </a>
                </div>
              </div>

              {/* Enhanced Content Section */}
              <div className="flex flex-1 flex-col space-y-6 p-8">
                <div className="flex-1 space-y-4">
                  <h3 className="text-2xl font-bold leading-tight text-zinc-900 dark:text-zinc-100">
                    <a
                      href={product.href}
                      className="transition-colors hover:text-teal-600 dark:hover:text-teal-400"
                    >
                      <span aria-hidden="true" className="absolute inset-0" />
                      {product.name}
                    </a>
                  </h3>
                  
                  <p className="text-base leading-relaxed text-zinc-600 dark:text-zinc-300">
                    {product.description}
                  </p>

                  {/* Features List */}
                  <div className="flex flex-wrap gap-2">
                    {product.features.map((feature, index) => (
                      <span
                        key={index}
                        className="inline-flex items-center rounded-lg bg-zinc-100 px-3 py-1 text-sm font-medium text-zinc-700 dark:bg-zinc-800 dark:text-zinc-300"
                      >
                        {feature}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Enhanced Footer */}
                <div className="flex items-center justify-between border-t border-zinc-200 pt-6 dark:border-zinc-700">
                  <div>
                    <p className="text-2xl font-bold text-zinc-900 dark:text-zinc-100">
                      {product.price}
                    </p>
                  </div>
                  <div className="flex items-center space-x-4">
                    <a
                      href={product.href}
                      className="inline-flex items-center text-sm text-teal-500 hover:text-teal-700 dark:text-teal-400 dark:hover:text-teal-300"
                    >
                      View Project
                      <svg
                        className="ml-2 h-4 w-4"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                        />
                      </svg>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Call to Action Section */}
        <div className="mt-24 text-center">
          <div className="rounded-2xl border border-zinc-100 p-6 dark:border-zinc-700/40">
            <h2 className="text-3xl font-bold text-zinc-900 dark:text-zinc-100 sm:text-4xl">
              Ready to Build Something Amazing?
            </h2>
            <p className="mt-4 text-xl text-zinc-600 dark:text-zinc-400">
              Let's collaborate and bring your ideas to life with innovative solutions.
            </p>
            <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="mailto:hammamxalf@gmail.com?subject=Project Collaboration"
                className="inline-flex items-center text-sm font-medium text-teal-500 hover:text-teal-700 dark:text-teal-400 dark:hover:text-teal-300"
              >
                Get in touch
                <svg
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  className="ml-1 h-4 w-4"
                >
                  <path
                    fillRule="evenodd"
                    d="M5.22 14.78a.75.75 0 001.06 0l7.22-7.22v5.69a.75.75 0 001.5 0v-7.5a.75.75 0 00-.75-.75h-7.5a.75.75 0 000 1.5h5.69l-7.22 7.22a.75.75 0 000 1.06z"
                    clipRule="evenodd"
                  />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </div>
    </Container>
  )
}
