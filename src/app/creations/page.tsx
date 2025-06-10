'use client'

import { Container } from '@/components/Container'

const products = [
  {
    id: 1,
    name: 'Panggilin - Voice Call & Messaging Service',
    href: 'https://panggilin.com',
    price: 'SaaS Platform',
    description:
      'A comprehensive communication platform offering voice calling and messaging services. Built with modern web technologies to provide reliable and scalable communication solutions for businesses.',
    imageSrc: '/images/logos/panggilin.png',
    imageAlt: 'Panggilin Voice Call and Messaging Service',
    type: 'SaaS',
    status: 'Live',
  },
  {
    id: 2,
    name: 'Virtual Spirit - Membership Management',
    href: 'https://virtualspirit.com',
    price: 'SaaS Platform',
    description:
      'An advanced membership management system designed to streamline member registration, tracking, and engagement. Features include automated workflows, analytics, and integrated payment processing.',
    imageSrc:
      'https://media-myr.b-cdn.net/images/resized/1080/03107567-6fb2-4d60-afa2-6787517b1cc8.jpeg',
    imageAlt: 'Virtual Spirit Membership Management System',
    type: 'SaaS',
    status: 'Live',
  },
  {
    id: 3,
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
  },
  {
    id: 4,
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
  },
]

export default function Creations() {
  return (
    <Container className="mt-16 sm:mt-32">
      <header className="max-w-2xl">
        <h1 className="text-4xl font-bold tracking-tight text-zinc-800 sm:text-5xl dark:text-zinc-100">
          A Showcase of Passion and Craft.
        </h1>
        <p className="mt-6 text-base text-zinc-600 dark:text-zinc-400">
          Welcome to my creative corner! Here, you'll find a collection of my
          work, ranging from innovative projects to artistic endeavors. Each
          piece represents my journey and the skills I've honed along the way.
          Dive in to explore the stories behind my creations, and discover the
          inspiration that fuels my passion for creativity.
        </p>
        <div className="mt-8 flex flex-wrap gap-6 text-base text-zinc-700 dark:text-zinc-300">
          <div className="flex items-center">
            <div className="mr-3 h-4 w-4 rounded-full bg-blue-600"></div>
            <span className="font-medium">SaaS Platforms</span>
          </div>
          <div className="flex items-center">
            <div className="mr-3 h-4 w-4 rounded-full bg-emerald-600"></div>
            <span className="font-medium">Educational Resources</span>
          </div>
        </div>
      </header>
      <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
        <h2 className="sr-only">Products</h2>

        <div className="grid grid-cols-1 gap-y-8 sm:grid-cols-2 sm:gap-x-6 sm:gap-y-10 lg:grid-cols-2 lg:gap-x-8">
          {products.map((product) => (
            <div
              key={product.id}
              className="group relative flex flex-col overflow-hidden rounded-xl border border-zinc-200 bg-white shadow-lg transition-all duration-300 hover:border-zinc-300 hover:shadow-xl dark:border-zinc-700 dark:bg-zinc-900 dark:hover:border-zinc-600"
            >
              <div className="aspect-h-3 aspect-w-4 relative overflow-hidden bg-zinc-50 sm:aspect-none group-hover:opacity-95 sm:h-72 dark:bg-zinc-800">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  alt={product.imageAlt}
                  src={product.imageSrc}
                  className="group-hover:scale-102 absolute inset-0 z-10 h-full w-full object-cover object-center transition-transform duration-300"
                  onError={(e) => {
                    const target = e.target as HTMLImageElement
                    target.style.display = 'none'
                  }}
                />
                <div className="absolute left-4 top-4 z-20">
                  <span
                    className={`inline-flex items-center rounded-full px-3 py-1.5 text-xs font-semibold shadow-md ${
                      product.type === 'SaaS'
                        ? 'bg-blue-600 text-white'
                        : 'bg-emerald-600 text-white'
                    }`}
                  >
                    {product.type}
                  </span>
                </div>
                <div className="absolute right-4 top-4 z-20">
                  <span className="inline-flex items-center rounded-full bg-white px-3 py-1.5 text-xs font-semibold text-zinc-800 shadow-md dark:bg-zinc-800 dark:text-zinc-200">
                    {product.status}
                  </span>
                </div>
              </div>
              <div className="flex flex-1 flex-col space-y-4 p-6">
                <div className="flex-1 space-y-3">
                  <h3 className="text-xl font-bold leading-tight text-zinc-900 dark:text-zinc-100">
                    <a
                      href={product.href}
                      className="transition-colors hover:text-blue-600 dark:hover:text-blue-400"
                    >
                      <span aria-hidden="true" className="absolute inset-0" />
                      {product.name}
                    </a>
                  </h3>
                  <p className="text-base leading-relaxed text-zinc-800 dark:text-zinc-200">
                    {product.description}
                  </p>
                </div>
                <div className="flex items-center justify-between border-t border-zinc-200 pt-5 dark:border-zinc-700">
                  <p className="text-xl font-bold text-zinc-900 dark:text-zinc-100">
                    {product.price}
                  </p>
                  <div className="flex items-center text-base font-medium text-blue-600 transition-colors hover:text-blue-700 dark:text-blue-400 dark:hover:text-blue-300">
                    <svg
                      className="mr-2 h-5 w-5"
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
                    View Details
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </Container>
  )
}
