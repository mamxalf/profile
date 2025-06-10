import { type Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Creations',
  description: 'A Showcase of Passion and Craft.',
}

export default function CreationsLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return <>{children}</>
}
