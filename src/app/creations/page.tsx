import { Container } from '@/components/Container'

const products = [
  {
    id: 1,
    name: 'Pemrograman Python Dasar untuk GIS Professional',
    href: 'https://hi-spatial.myr.id/ebook/pemrograman-python-dasar-untuk-gis-professional',
    price: 'Rp. 99.000,-',
    imageSrc:
      'https://media-myr.b-cdn.net/images/resized/1080/03107567-6fb2-4d60-afa2-6787517b1cc8.jpeg',
    imageAlt: 'Pemrograman Python Dasar untuk GIS Professional',
  },
  {
    id: 2,
    name: 'Panduan Lengkap GeoPandas: Analisis dan Visualisasi Data Geospatial dengan Python',
    href: 'https://hi-spatial.myr.id/ebook/panduan-lengkap-geopandas-analisis-dan-visualisasi-data-geospatial-dengan-python',
    price: 'Rp. 199.000,-',
    imageSrc:
      'https://media-myr.b-cdn.net/images/resized/1080/392687d2-8c91-49b9-839d-8a87d92725de.jpeg',
    imageAlt:
      'Panduan Lengkap GeoPandas: Analisis dan Visualisasi Data Geospatial dengan Python',
  },
  // More products...
]

export const metadata = {
  title: 'Creations',
  description: 'A Showcase of Passion and Craft.',
}

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
      </header>
      <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
        <h2 className="sr-only">Products</h2>

        <div className="grid grid-cols-1 gap-y-4 sm:grid-cols-2 sm:gap-x-6 sm:gap-y-10 lg:grid-cols-3 lg:gap-x-8">
          {products.map((product) => (
            <div
              key={product.id}
              className="group relative flex flex-col overflow-hidden rounded-lg border border-gray-200 bg-white"
            >
              <div className="aspect-h-4 aspect-w-3 bg-gray-200 sm:aspect-none group-hover:opacity-75 sm:h-96">
                <img
                  alt={product.imageAlt}
                  src={product.imageSrc}
                  className="h-full w-full object-cover object-center sm:h-full sm:w-full"
                />
              </div>
              <div className="flex flex-1 flex-col space-y-2 p-4">
                <h3 className="text-sm font-medium text-gray-900">
                  <a href={product.href}>
                    <span aria-hidden="true" className="absolute inset-0" />
                    {product.name}
                  </a>
                </h3>
                <div className="flex flex-1 flex-col justify-end">
                  <p className="text-base font-medium text-gray-900">
                    {product.price}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </Container>
  )
}
