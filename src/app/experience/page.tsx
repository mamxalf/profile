import { type Metadata } from 'next'
import Image, { ImageProps } from 'next/image'

import { Container } from '@/components/Container'
// import portraitImage from '@/images/portrait.jpg'
import logoTW from '@/images/logos/tw.png'
import logoEvermos from '@/images/logos/evermos.png'
import logoMekari from '@/images/logos/mekari.png'
import logoVsMembershipNinja from '@/images/logos/vs-membership.png'
import logoTamtech from '@/images/logos/tamtech.png'
import { Button } from '@/components/Button'
import { Section } from '@/components/Section'
// import { Card } from '@/components/Card'

export const metadata: Metadata = {
  title: 'About',
  description:
    'I\'m Hammam Firdaus. I live in Yogyakarta, where I prepare the future and catch up the dream.',
}

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

interface ExperienceData {
  company: string
  type: 'fulltime' | 'freelance'
  achievements: string[]
}

const experiences: ExperienceData[] = [
  {
    company: 'Trinity Wizards',
    type: 'fulltime',
    achievements: [
      'Developed middleware for Malaysia Airlines using a monorepo architecture and implemented microservices to enhance system scalability and maintainability.',
      'Reduced backend resource usage by 20–30% through effective use of Azure API Management (APIM) policies to filter inappropriate request parameters.',
      'Revamped backend services in the Check-in and Booking domains, optimizing complex algorithms and refactoring N+1 query issues to improve performance.',
      'Improved server-side static file performance by implementing LRU caching, significantly reducing loading times.',
      'Implemented a robust job queue system using Azure Queue Storage, introducing retry logic and delayed job handling in background processes, resulting in a notable reduction in error rates by 30%.'
    ]
  },
  {
    company: 'Virtual Spirit',
    type: 'freelance',
    achievements: [
      'Implemented pre-commit hooks to enforce code consistency and improve team development workflow.',
      'Integrated Sentry for real-time error tracking and performance monitoring, enabling faster debugging and issue resolution.',
      'Reduced file upload times (images, videos, PDFs) from 30–120 seconds to under 2 seconds by implementing asynchronous processing and optimizing file storage.',
      'Refactored backend logic in Membership Ninja CRM to eliminate N+1 query problems, significantly enhancing API response times and backend efficiency.'
    ]
  },
  {
    company: 'Evermos',
    type: 'fulltime',
    achievements: [
      'Successfully reduced the error process between services by implementing a robust retry mechanism and incorporating delay job techniques in background processing, resulting in an impressive 80% reduction in errors.',
      'Increase user satisfaction and successfully reduce manual review time from the internal Ads Reviewer Team by developing a customized onboarding ads system for Facebook Ads, significantly streamlining the process of setting up and managing ad campaigns.',
      'Increase speed and awareness at finding bugs to minimize disruptions and ensure a smooth user experience by Integrating a robust error monitoring and error alerting system with Sentry, into the Evermos App.'
    ]
  },
  {
    company: 'Tamtech International',
    type: 'freelance',
    achievements: [
      'Led the development and initiation of a Learning Experience Platform. This involved architecting and building the platform from the ground up, utilizing modern technologies and best practices.',
      'Created a Firestore wrapper for the internal development team, simplifying database interactions and improving code efficiency. The wrapper abstracted the complexities of Firestore and provided a clean and consistent API for data access. This enhanced development productivity and ensured adherence to coding standards across the team. ',
      'Managed projects on Cloud Run (GCP) and Redis on Redislabs, overseeing the deployment, and monitoring of applications. This included setting up CI/CD pipelines, implementing containerization, and optimizing resource allocation for efficient utilization. By leveraging Cloud Run and Redis (Redislabs). '
    ]
  },
  {
    company: 'Mekari',
    type: 'fulltime',
    achievements: [
      'Successfully reducing error escalation to Engineers from Technical Support by 70%. This was achieved by taking the initiative to build and develop new applications specifically designed to fix temporary bugs, resulting in a decreased workload and increased efficiency in bug resolution.',
      'Optimize performance and reduce delay in user assignments from around 15-60 seconds to less than 2 seconds by implementing a round-robin algorithm, identifying bottlenecks, and implementing performance optimizations such as caching mechanisms and database query optimizations.',
      'Successfully reduced workload webhook receiver by 30% by implementing buffer data and making batching process to write data with Apache Kafka.',
      'Mentored and provided guidance to internship engineers, supporting them in their professional growth and helping them navigate the challenges of software development. Shared my knowledge, best practices, and industry insights, fostering a positive learning environment and contributing to the interns development.'
    ]
  }
]

export default function Experience() {
  return (
    <Container className="mt-16 sm:mt-32">
      <div className="grid grid-cols-1 gap-y-16 lg:grid-cols-2 lg:grid-rows-[auto_1fr] lg:gap-y-12">
        <div className="lg:pl-20">
          <Resume />
        </div>
        <div className="lg:order-first lg:row-span-2">
          <div className="space-y-20">
            {experiences.map((experience, index) => (
              <SpeakingSection 
                key={index} 
                title={experience.company}
              >
                <div className="mb-4">
                  <span className={`inline-flex items-center rounded-full px-2 py-1 text-xs font-medium ring-1 ring-inset ${
                    experience.type === 'fulltime' 
                      ? 'bg-blue-50 text-blue-700 ring-blue-700/10 dark:bg-blue-400/10 dark:text-blue-400 dark:ring-blue-400/30'
                      : 'bg-green-50 text-green-700 ring-green-600/20 dark:bg-green-400/10 dark:text-green-400 dark:ring-green-400/30'
                  }`}>
                    {experience.type === 'fulltime' ? 'Fulltime' : 'Freelance'}
                  </span>
                </div>
                {experience.achievements.map((achievement, achievementIndex) => (
                  <p key={achievementIndex} className="relative z-10 text-sm text-zinc-600 dark:text-zinc-400">
                    {achievement}
                  </p>
                ))}
              </SpeakingSection>
            ))}
          </div>
        </div>
      </div>
    </Container>
  )
}

function Resume() {
  let fulltimeJobs: Array<Role> = [
    {
      company: 'Trinity Wizards',
      title: 'Web Application Engineer',
      logo: logoTW,
      start: 'Aug 2023',
      end: {
        label: 'Present',
        dateTime: new Date().getFullYear().toString(),
      },
    },
    {
      company: 'Evermos',
      title: 'Backend Engineer',
      logo: logoEvermos,
      start: 'Dec 2022',
      end: 'May 2023',
    },
    {
      company: 'Mekari',
      title: 'Software Engineer',
      logo: logoMekari,
      start: 'Apr 2020',
      end: 'Dec 2022',
    },
  ]

  let freelanceJobs: Array<Role> = [
    {
      company: 'Virtual Spirit',
      title: 'Ruby on Rails Developer',
      logo: logoVsMembershipNinja,
      start: 'May 2024',
      end: 'Sep 2024',
    },
    {
      company: 'Tamtech International',
      title: 'Software Engineer',
      logo: logoTamtech,
      start: 'Sep 2022',
      end: 'Jan 2023',
    },
  ]

  return (
    <div className="rounded-2xl border border-zinc-100 p-6 dark:border-zinc-700/40">
      <h2 className="flex text-sm font-semibold text-zinc-900 dark:text-zinc-100">
        <BriefcaseIcon className="h-6 w-6 flex-none" />
        <span className="ml-3">Work</span>
      </h2>
      
      {/* Fulltime Jobs Section */}
      <div className="mt-6">
        <h3 className="text-xs font-semibold text-zinc-600 dark:text-zinc-400 uppercase tracking-wide mb-4">
          Fulltime
        </h3>
        <ol className="space-y-4">
          {fulltimeJobs.map((role, roleIndex) => (
            <Role key={roleIndex} role={role} />
          ))}
        </ol>
      </div>

      {/* Freelance Jobs Section */}
      <div className="mt-8">
        <h3 className="text-xs font-semibold text-zinc-600 dark:text-zinc-400 uppercase tracking-wide mb-4">
          Freelance
        </h3>
        <ol className="space-y-4">
          {freelanceJobs.map((role, roleIndex) => (
            <Role key={roleIndex} role={role} />
          ))}
        </ol>
      </div>

      <Button
        href="https://drive.google.com/drive/folders/142Y1hrtD5Ur0l_xbztLttt0lkvgTGJ-3"
        target="_blank"
        variant="secondary"
        className="group mt-6 w-full"
      >
        Download CV
        <ArrowDownIcon className="h-4 w-4 stroke-zinc-400 transition group-active:stroke-zinc-600 dark:group-hover:stroke-zinc-50 dark:group-active:stroke-zinc-50" />
      </Button>
    </div>
  )
}

function BriefcaseIcon(props: React.ComponentPropsWithoutRef<'svg'>) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      {...props}
    >
      <path
        d="M2.75 9.75a3 3 0 0 1 3-3h12.5a3 3 0 0 1 3 3v8.5a3 3 0 0 1-3 3H5.75a3 3 0 0 1-3-3v-8.5Z"
        className="fill-zinc-100 stroke-zinc-400 dark:fill-zinc-100/10 dark:stroke-zinc-500"
      />
      <path
        d="M3 14.25h6.249c.484 0 .952-.002 1.316.319l.777.682a.996.996 0 0 0 1.316 0l.777-.682c.364-.32.832-.319 1.316-.319H21M8.75 6.5V4.75a2 2 0 0 1 2-2h2.5a2 2 0 0 1 2 2V6.5"
        className="stroke-zinc-400 dark:stroke-zinc-500"
      />
    </svg>
  )
}

interface Role {
  company: string
  title: string
  logo: ImageProps['src']
  start: string | { label: string; dateTime: string }
  end: string | { label: string; dateTime: string }
}

function Role({ role }: { role: Role }) {
  let startLabel =
    typeof role.start === 'string' ? role.start : role.start.label
  let startDate =
    typeof role.start === 'string' ? role.start : role.start.dateTime

  let endLabel = typeof role.end === 'string' ? role.end : role.end.label
  let endDate = typeof role.end === 'string' ? role.end : role.end.dateTime

  return (
    <li className="flex gap-4">
      <div className="relative mt-1 flex h-10 w-10 flex-none items-center justify-center rounded-full shadow-md shadow-zinc-800/5 ring-1 ring-zinc-900/5 dark:border dark:border-zinc-700/50 dark:bg-zinc-800 dark:ring-0">
        <Image src={role.logo} alt="" className="h-7 w-7 rounded-full" unoptimized />
      </div>
      <dl className="flex flex-auto flex-wrap gap-x-2">
        <dt className="sr-only">Company</dt>
        <dd className="w-full flex-none text-sm font-medium text-zinc-900 dark:text-zinc-100">
          {role.company}
        </dd>
        <dt className="sr-only">Role</dt>
        <dd className="text-xs text-zinc-500 dark:text-zinc-400">
          {role.title}
        </dd>
        <dt className="sr-only">Date</dt>
        <dd
          className="ml-auto text-xs text-zinc-400 dark:text-zinc-500"
          aria-label={`${startLabel} until ${endLabel}`}
        >
          <time dateTime={startDate}>{startLabel}</time>{' '}
          <span aria-hidden="true">—</span>{' '}
          <time dateTime={endDate}>{endLabel}</time>
        </dd>
      </dl>
    </li>
  )
}

function ArrowDownIcon(props: React.ComponentPropsWithoutRef<'svg'>) {
  return (
    <svg viewBox="0 0 16 16" fill="none" aria-hidden="true" {...props}>
      <path
        d="M4.75 8.75 8 12.25m0 0 3.25-3.5M8 12.25v-8.5"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}
