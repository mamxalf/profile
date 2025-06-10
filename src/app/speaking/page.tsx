import { type Metadata } from 'next'
import { Container } from '@/components/Container'
import { Section } from '@/components/Section'

export const metadata: Metadata = {
  title: 'Speaking',
  description:
    'My speaking engagements at workshops, conferences, and webinars on software development, Ruby on Rails, and technology.',
}

interface SpeakingEvent {
  title: string
  event: string
  date: string
  location: string
  description: string
  topics: string[]
  type: 'Workshop' | 'Webinar' | 'Conference' | 'Meetup'
  slides?: string
  recording?: string
}

const speakingEvents: SpeakingEvent[] = [
  {
    title: 'Creating Football Player HeatMap with Python',
    event: 'HI Spatial Academy',
    date: 'June 2025',
    location: 'Zoom Meeting',
    description:
      'Workshop on analyzing soccer player movements using interactive maps. Learn how to create HeatMaps using Python and WebGIS to visualize player position data effectively and efficiently.',
    topics: [
      'Data Visualization',
      'Python Programming',
      'GPS Data Processing',
      'WebGIS',
    ],
    type: 'Workshop',
    recording:
      'https://www.instagram.com/p/DKgnOoZiA8b/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA==',
  },
  {
    title: 'Become Advanced in Web Programming Skills Using Visual Studio Code',
    event: 'Amikom Center',
    date: 'November 2021',
    location: 'Zoom Meeting',
    description:
      "Led a comprehensive workshop as part of Amikom Center's flagship career preparation program for aspiring Web Developers. Covered web programming fundamentals, Visual Studio Code usage, development workflows, and hands-on case studies with practical application.",
    topics: [
      'Visual Studio Code',
      'Web Programming',
      'Development Workflow',
      'Case Studies',
    ],
    type: 'Workshop',
    recording:
      'https://www.instagram.com/p/CVfLXq1JJLB/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA==',
  },
  {
    title: 'First Step to Build Portfolio as Web Developer',
    event: 'Amikom Center',
    date: 'October 2021',
    location: 'Zoom Meeting',
    description:
      'Discussed essential steps and best practices for building an effective portfolio as a web developer, covering project selection, showcasing skills, and creating compelling presentations of your work.',
    topics: [
      'Portfolio Development',
      'Web Development',
      'Project Showcase',
      'Career Building',
    ],
    type: 'Webinar',
    recording:
      'https://www.instagram.com/p/CU4YcQ9pN7n/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA==',
  },
]

function SpeakingSection({
  children,
  ...props
}: React.ComponentPropsWithoutRef<typeof Section>) {
  return (
    <Section {...props}>
      <div className="space-y-6">{children}</div>
    </Section>
  )
}

function EventTypeIcon({ type }: { type: SpeakingEvent['type'] }) {
  switch (type) {
    case 'Workshop':
      return (
        <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 20 20">
          <path
            fillRule="evenodd"
            d="M6 6V5a3 3 0 013-3h2a3 3 0 013 3v1h2a2 2 0 012 2v3.57A22.952 22.952 0 0110 13a22.95 22.95 0 01-8-1.43V8a2 2 0 012-2h2zm2-1a1 1 0 011-1h2a1 1 0 011 1v1H8V5zm1 5a1 1 0 011-1h.01a1 1 0 110 2H10a1 1 0 01-1-1z"
            clipRule="evenodd"
          />
          <path d="M2 13.692V16a2 2 0 002 2h12a2 2 0 002-2v-2.308A24.974 24.974 0 0110 15c-2.796 0-5.487-.46-8-1.308z" />
        </svg>
      )
    case 'Webinar':
      return (
        <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 20 20">
          <path d="M2 6a2 2 0 012-2h6a2 2 0 012 2v8a2 2 0 01-2 2H4a2 2 0 01-2-2V6zM14.553 7.106A1 1 0 0014 8v4a1 1 0 00.553.894l2 1A1 1 0 0018 13V7a1 1 0 00-1.447-.894l-2 1z" />
        </svg>
      )
    case 'Conference':
      return (
        <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 20 20">
          <path
            fillRule="evenodd"
            d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832L14 10.202a1 1 0 000-1.65l-4.445-2.384z"
            clipRule="evenodd"
          />
        </svg>
      )
    case 'Meetup':
      return (
        <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 20 20">
          <path d="M13 6a3 3 0 11-6 0 3 3 0 016 0zM18 8a2 2 0 11-4 0 2 2 0 014 0zM14 15a4 4 0 00-8 0v3h8v-3z" />
        </svg>
      )
  }
}

export default function Speaking() {
  return (
    <Container className="mt-16 sm:mt-32">
      <div className="grid grid-cols-1 gap-y-16 lg:grid-cols-2 lg:grid-rows-[auto_1fr] lg:gap-y-12">
        <div className="lg:pl-20">
          <div className="rounded-2xl border border-zinc-100 p-6 dark:border-zinc-700/40">
            <h2 className="flex text-sm font-semibold text-zinc-900 dark:text-zinc-100">
              <svg
                className="h-6 w-6 flex-none"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path d="M7 4a3 3 0 016 0v4a3 3 0 11-6 0V4z" />
                <path d="M5.5 9.643a.75.75 0 00-1.5 0V10c0 3.06 2.29 5.585 5.25 5.954V17.5h-1.5a.75.75 0 000 1.5h4.5a.75.75 0 000-1.5H10.5v-1.546A6.001 6.001 0 0016 10v-.357a.75.75 0 00-1.5 0V10a4.5 4.5 0 01-9 0v-.357z" />
              </svg>
              <span className="ml-3">Speaking Stats</span>
            </h2>
            <div className="mt-6 space-y-4">
              <div className="flex justify-between text-sm">
                <span className="text-zinc-600 dark:text-zinc-400">
                  Total Events
                </span>
                <span className="font-semibold text-zinc-900 dark:text-zinc-100">
                  {speakingEvents.length}
                </span>
              </div>
              <div className="flex justify-between text-sm">
                <span className="text-zinc-600 dark:text-zinc-400">
                  Workshops
                </span>
                <span className="font-semibold text-zinc-900 dark:text-zinc-100">
                  {speakingEvents.filter((e) => e.type === 'Workshop').length}
                </span>
              </div>
              <div className="flex justify-between text-sm">
                <span className="text-zinc-600 dark:text-zinc-400">
                  Conferences
                </span>
                <span className="font-semibold text-zinc-900 dark:text-zinc-100">
                  {speakingEvents.filter((e) => e.type === 'Conference').length}
                </span>
              </div>
              <div className="flex justify-between text-sm">
                <span className="text-zinc-600 dark:text-zinc-400">
                  Webinars
                </span>
                <span className="font-semibold text-zinc-900 dark:text-zinc-100">
                  {speakingEvents.filter((e) => e.type === 'Webinar').length}
                </span>
              </div>
            </div>

            <div className="mt-8 rounded-2xl border border-zinc-100 p-6 dark:border-zinc-700/40">
              <h3 className="mb-4 text-sm font-semibold text-zinc-900 dark:text-zinc-100">
                Interested in having me speak?
              </h3>
              <p className="mb-4 text-sm text-zinc-600 dark:text-zinc-400">
                I'm available for workshops, conferences, and webinars on topics
                including:
              </p>
              <ul className="space-y-1 text-sm text-zinc-600 dark:text-zinc-400">
                <li>• Backend Development & Architecture</li>
                <li>• Ruby on Rails Best Practices</li>
                <li>• Microservices & System Design</li>
                <li>• Career Development for Engineers</li>
              </ul>
              <div className="mt-4">
                <a
                  href="mailto:hammamxalf@gmail.com?subject=Speaking Opportunity"
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

        <div className="lg:order-first lg:row-span-2">
          <h1 className="text-4xl font-bold tracking-tight text-zinc-800 sm:text-5xl dark:text-zinc-100">
            Speaking & Workshops
          </h1>
          <p className="mt-6 text-base text-zinc-600 dark:text-zinc-400">
            I enjoy sharing knowledge and experiences with the developer
            community through workshops, conferences, and webinars. Here are
            some of my recent speaking engagements where I've discussed backend
            development, system architecture, and career growth in software
            engineering.
          </p>

          <div className="mt-16 space-y-20">
            {speakingEvents.map((event, eventIndex) => (
              <SpeakingSection key={eventIndex} title={event.date}>
                <div className="space-y-4">
                  <div className="flex items-start space-x-3">
                    <div className="flex-shrink-0">
                      <EventTypeIcon type={event.type} />
                    </div>
                    <div className="flex-1">
                      <div className="mb-1 flex items-center space-x-2">
                        <span className="inline-flex items-center rounded-full bg-teal-100 px-2.5 py-0.5 text-xs font-medium text-teal-800 dark:bg-teal-900/20 dark:text-teal-400">
                          {event.type}
                        </span>
                      </div>
                      <h3 className="mb-1 text-lg font-semibold text-zinc-900 dark:text-zinc-100">
                        {event.title}
                      </h3>
                      <p className="mb-1 text-sm font-medium text-zinc-700 dark:text-zinc-300">
                        {event.event}
                      </p>
                      <p className="mb-3 text-sm text-zinc-600 dark:text-zinc-400">
                        📍 {event.location}
                      </p>
                      <p className="mb-3 text-sm text-zinc-600 dark:text-zinc-400">
                        {event.description}
                      </p>
                      <div className="flex flex-wrap gap-1">
                        {event.topics.map((topic, topicIndex) => (
                          <span
                            key={topicIndex}
                            className="inline-flex items-center rounded-md bg-zinc-100 px-2 py-1 text-xs font-medium text-zinc-800 dark:bg-zinc-800 dark:text-zinc-300"
                          >
                            {topic}
                          </span>
                        ))}
                      </div>
                      {(event.slides || event.recording) && (
                        <div className="mt-3 flex space-x-4">
                          {event.slides && (
                            <a
                              href={event.slides}
                              className="text-sm text-teal-500 hover:text-teal-700 dark:text-teal-400 dark:hover:text-teal-300"
                            >
                              View Slides →
                            </a>
                          )}
                          {event.recording && (
                            <a
                              href={event.recording}
                              className="text-sm text-teal-500 hover:text-teal-700 dark:text-teal-400 dark:hover:text-teal-300"
                            >
                              Watch Recording →
                            </a>
                          )}
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              </SpeakingSection>
            ))}
          </div>
        </div>
      </div>
    </Container>
  )
}
