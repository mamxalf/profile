import { type Metadata } from 'next'
import Image, { type StaticImageData } from 'next/image'
import { ReactElement } from 'react'

import { Card } from '@/components/Card'
import { SimpleLayout } from '@/components/SimpleLayout'
import logoEverpro from '@/images/logos/everpro.png'
import logoPipl from '@/images/logos/pipl.png'
import logoPanggilin from '@/images/logos/panggilin.png'
import logoHiSpatial from '@/images/logos/hispatial.jpeg'
import logoQontak from '@/images/logos/qontak.png'
import logoVsMembershipNinja from '@/images/logos/vs-membership.png'
import logoItchIo from '@/images/logos/itch.png'

interface Project {
  name: string
  description: string
  link: { href: string; label: string }
  logo: StaticImageData | ReactElement
}

const professionalWork: Project[] = [
  {
    name: 'Qontak Omnichannel',
    description: 'One of the biggest Omnichannel platforms in Indonesia.',
    link: { href: 'https://qontak.com/', label: 'Mekari Qontak' },
    logo: logoQontak,
  },
  {
    name: 'Everpro',
    description: 'Platform connected commerce #1 in Indonesia',
    link: { href: '#', label: 'Everpro' },
    logo: logoEverpro,
  },
  {
    name: 'Pipl.ai',
    description: 'Smart email automation platform',
    link: { href: 'https://pipl.ai/', label: 'Pipl.aI' },
    logo: logoPipl,
  },
  {
    name: 'Membership Ninja',
    description: 'CRM - Complete Apps for Your Business!',
    link: {
      href: 'https://membership.ninja/',
      label: 'Membership Ninja',
    },
    logo: logoVsMembershipNinja,
  },
  {
    name: 'IzeSign',
    description: 'Digital Signature Platform',
    link: {
      href: 'https://sign.legal-ize.com/',
      label: 'IzeSign',
    },
    logo: (
      <svg
        height="100"
        width="100"
        className="h-8 w-8"
        viewBox="0 0 604 571"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <rect width="604" height="571" rx="40" fill="white" />

        <path
          d="M320.059 444.45V444.81C320.782 445.23 320.963 445.11 320.059 444.45Z"
          fill="#3A30A0"
        ></path>
        <path
          d="M261.523 254.806H261.885H259.655C259.233 255.166 259.775 255.406 261.523 254.806Z"
          fill="#3A30A0"
        ></path>
        <path
          d="M508.565 0.847168H85.7974C63.195 0.863059 41.523 9.80588 25.5407 25.7117C9.55843 41.6175 0.572608 63.1858 0.556641 85.68V219.829H139.208V485.966C139.243 496.898 135.071 507.429 127.548 515.395C120.026 523.361 109.724 528.159 98.7583 528.803C93.5518 529.493 88.7874 532.08 85.3868 536.063C81.9861 540.047 80.1909 545.145 80.3484 550.37C80.5059 555.595 82.6049 560.576 86.2394 564.349C89.8739 568.123 94.7856 570.421 100.024 570.799H508.565C533.704 570.768 557.805 560.815 575.582 543.123C593.358 525.432 603.359 501.447 603.391 476.427V95.2192C603.359 70.2 593.358 46.2145 575.582 28.5232C557.805 10.8319 533.704 0.878918 508.565 0.847168ZM139.208 177.832H42.755V85.68C42.755 74.3191 47.2898 63.4235 55.3618 55.3901C63.4338 47.3567 74.3818 42.8436 85.7974 42.8436H98.5172C105.382 43.2396 112.046 45.2992 117.928 48.8431L121.123 50.943L123.957 53.2228L124.318 53.5827C125.186 54.3156 126.011 55.0968 126.79 55.9225L127.272 56.4625C127.996 57.2424 128.719 58.0224 129.382 58.8623L129.925 59.6422L131.733 62.102L132.276 63.0019C132.758 63.8419 133.301 64.6818 133.723 65.5217C134.145 66.3617 134.084 66.3017 134.326 66.6616L135.471 69.1814C135.471 69.6614 135.772 70.1413 135.953 70.6213C136.134 71.1013 136.556 72.1812 136.797 72.9611C137.038 73.7411 136.797 74.161 137.279 74.761C137.762 75.3609 137.701 76.2008 137.822 76.9808C137.943 77.7607 137.822 78.5406 138.184 79.3206C138.545 80.1005 138.184 80.5205 138.184 81.1204C138.275 82.5388 138.275 83.9617 138.184 85.3801L139.208 177.832ZM515.859 231.108C504.688 236.985 493.841 243.453 483.366 250.486C480.714 252.286 478.122 254.086 475.53 256.006L471.732 258.766L470.466 259.785C466.427 262.905 462.448 266.205 458.409 269.565C450.29 276.665 442.601 284.238 435.381 292.243C431.643 296.322 428.086 300.582 424.59 304.842L423.987 305.622L421.877 308.381L417.778 314.021C412.051 322.12 406.746 330.399 401.803 338.979C396.86 347.558 392.519 355.897 388.36 364.597C386.19 369.216 384.08 373.836 382.331 378.515C381.909 379.415 380.764 382.055 380.644 382.415C379.86 384.275 379.076 386.135 378.353 388.055C371.3 405.453 365.09 423.092 358.881 440.79C355.083 451.589 352.371 464.788 344.473 473.128C339.377 478.496 332.949 482.432 325.837 484.538C318.724 486.645 311.179 486.848 303.963 485.126C276.655 477.867 271.832 445.65 275.328 422.132C280.392 386.675 293.835 352.778 307.821 320.14C322.771 285.043 339.771 250.846 356.59 216.589C363.583 202.19 370.576 187.791 377.207 173.273L376.484 174.353C360.871 200.81 346.342 228.348 328.257 252.886C311.86 274.784 289.857 300.102 259.775 299.562C253.844 299.562 248.155 297.217 243.961 293.043C239.766 288.869 237.41 283.207 237.41 277.304C237.41 271.401 239.766 265.739 243.961 261.565C248.155 257.391 253.844 255.046 259.775 255.046C260.189 254.775 260.659 254.602 261.15 254.54C261.641 254.478 262.14 254.528 262.609 254.686L263.995 254.266C266.105 253.006 268.275 251.866 270.385 250.546L272.676 248.686C277.331 244.388 281.663 239.756 285.637 234.828L289.013 230.628L289.736 229.608C291.725 226.908 293.655 224.148 295.764 221.389C300.105 215.389 304.144 208.79 308.183 202.37C323.796 177.052 337.42 150.475 354.119 125.817C367.2 106.438 387.456 79.2606 414.764 87.0599C442.916 95.2192 441.349 126.837 434.597 148.975C425.615 178.432 411.087 206.45 397.643 234.048C381.126 267.945 364.126 301.722 349.417 336.339C348.814 337.659 348.271 338.979 347.668 340.359C346.825 342.398 345.98 344.378 345.197 346.358C343.509 350.378 341.942 354.397 340.374 358.357C337.119 366.696 334.346 375.156 331.211 383.675C329.342 389.315 327.654 395.074 326.027 400.834C327.413 397.174 328.679 393.514 330.066 389.914C344.232 352.598 360.931 315.941 385.165 283.903C414.113 246.064 451.025 214.981 493.313 192.831C498.437 189.856 504.539 189.028 510.277 190.53C516.014 192.032 520.917 195.741 523.907 200.84C526.897 205.94 527.729 212.013 526.219 217.723C524.71 223.433 520.983 228.312 515.859 231.288V231.108Z"
          fill="#3A30A0"
        ></path>
        <path
          d="M318.853 431.671C318.853 431.671 318.853 431.011 318.853 430.591C318.913 431.011 318.913 431.311 318.853 431.671Z"
          fill="#3A30A0"
        ></path>
        <path
          d="M320.36 445.59C320.842 446.61 321.083 446.07 320.36 445.05V445.59Z"
          fill="#3A30A0"
        ></path>
      </svg>
    ),
  },
  {
    name: 'Experience by MySkill',
    description:
      "Boost your team's productivity and streamline HR administration with our innovative software",
    link: {
      href: 'https://myexperience.id/',
      label: 'Experience by MySkill',
    },
    logo: (
      <div className="flex h-8 w-8 items-center justify-center rounded-full bg-gradient-to-br from-blue-400 to-blue-600 text-xs font-bold text-white">
        EMS
      </div>
    ),
  },
  {
    name: 'Neurovi',
    description:
      'Easy-to-integrate hospital and clinic management information system',
    link: {
      href: 'https://neurovi.id/',
      label: 'Neurovi',
    },
    logo: (
      <div className="flex h-8 w-8 items-center justify-center rounded-full bg-gradient-to-br from-blue-500 to-purple-600 text-xs font-bold text-white">
        NV
      </div>
    ),
  },
]

const sideProjects = [
  {
    name: 'Hi Spatial',
    description: 'Educational platform about GIS Development',
    link: {
      href: 'https://www.instagram.com/hi.spatial/',
      label: 'Hi Spatial',
    },
    logo: logoHiSpatial,
  },
  {
    name: 'Academy Hi Spatial',
    description:
      'E-learning platform for Geospatial Development, Data Science, and Web Development',
    link: {
      href: 'https://academy.hi-spatial.com/',
      label: 'Academy Hi Spatial',
    },
    logo: logoHiSpatial,
  },
  {
    name: 'itch.io',
    description: 'Collection of game development projects and experiments',
    link: {
      href: 'https://mamxalf.itch.io/',
      label: 'mamxalf.itch.io',
    },
    logo: logoItchIo,
  },
  {
    name: 'Panggil.in',
    description: 'Digital Wedding Invitation Platform',
    link: { href: 'https://panggil.in/', label: 'Panggil.in' },
    logo: logoPanggilin,
  },
  {
    name: 'EduOne',
    description:
      'Simplify attendance tracking with RFID technology and activate cashless transactions with integrated e-money system.',
    link: {
      href: 'https://eduone.id/',
      label: 'EduOne',
    },
    logo: (
      <div className="flex h-8 w-8 items-center justify-center rounded-full bg-gradient-to-br from-blue-500 to-purple-600 text-xs font-bold text-white">
        EO
      </div>
    ),
  },
]

function LinkIcon(props: React.ComponentPropsWithoutRef<'svg'>) {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" {...props}>
      <path
        d="M15.712 11.823a.75.75 0 1 0 1.06 1.06l-1.06-1.06Zm-4.95 1.768a.75.75 0 0 0 1.06-1.06l-1.06 1.06Zm-2.475-1.414a.75.75 0 1 0-1.06-1.06l1.06 1.06Zm4.95-1.768a.75.75 0 1 0-1.06 1.06l1.06-1.06Zm3.359.53-.884.884 1.06 1.06.885-.883-1.061-1.06Zm-4.95-2.12 1.414-1.415L12 6.344l-1.415 1.413 1.061 1.061Zm0 3.535a2.5 2.5 0 0 1 0-3.536l-1.06-1.06a4 4 0 0 0 0 5.656l1.06-1.06Zm4.95-4.95a2.5 2.5 0 0 1 0 3.535L17.656 12a4 4 0 0 0 0-5.657l-1.06 1.06Zm1.06-1.06a4 4 0 0 0-5.656 0l1.06 1.06a2.5 2.5 0 0 1 3.536 0l1.06-1.06Zm-7.07 7.07.176.177 1.06-1.06-.176-.177-1.06 1.06Zm-3.183-.353.884-.884-1.06-1.06-.884.883 1.06 1.06Zm4.95 2.121-1.414 1.414 1.06 1.06 1.415-1.413-1.06-1.061Zm0-3.536a2.5 2.5 0 0 1 0 3.536l1.06 1.06a4 4 0 0 0 0-5.656l-1.06 1.06Zm-4.95 4.95a2.5 2.5 0 0 1 0-3.535L6.344 12a4 4 0 0 0 0 5.656l1.06-1.06Zm-1.06 1.06a4 4 0 0 0 5.657 0l-1.061-1.06a2.5 2.5 0 0 1-3.535 0l-1.061 1.06Zm7.07-7.07-.176-.177-1.06 1.06.176.178 1.06-1.061Z"
        fill="currentColor"
      />
    </svg>
  )
}

export const metadata: Metadata = {
  title: 'Projects',
  description: 'My professional work and side projects.',
}

function ProjectSection({
  title,
  projects,
}: {
  title: string
  projects: typeof professionalWork
}) {
  return (
    <div className="space-y-8">
      <h2 className="text-2xl font-bold text-zinc-900 dark:text-zinc-100">
        {title}
      </h2>
      <ul
        role="list"
        className="grid grid-cols-1 gap-x-12 gap-y-16 sm:grid-cols-2 lg:grid-cols-3"
      >
        {projects.map((project) => (
          <Card as="li" key={project.name}>
            <div className="relative z-10 flex h-12 w-12 items-center justify-center rounded-full bg-white shadow-md shadow-zinc-800/5 ring-1 ring-zinc-900/5 dark:border dark:border-zinc-700/50 dark:bg-zinc-800 dark:ring-0">
              {typeof project.logo === 'object' && 'src' in project.logo ? (
                <Image
                  src={project.logo}
                  alt=""
                  className="h-8 w-8 rounded-full"
                  unoptimized
                />
              ) : (
                project.logo
              )}
            </div>
            <h2 className="mt-6 text-base font-semibold text-zinc-800 dark:text-zinc-100">
              <Card.Link href={project.link.href}>{project.name}</Card.Link>
            </h2>
            <Card.Description>{project.description}</Card.Description>
            <p className="relative z-10 mt-6 flex text-sm font-medium text-zinc-400 transition group-hover:text-teal-500 dark:text-zinc-200">
              <LinkIcon className="h-6 w-6 flex-none" />
              <span className="ml-2">{project.link.label}</span>
            </p>
          </Card>
        ))}
      </ul>
    </div>
  )
}

export default function Projects() {
  return (
    <SimpleLayout
      title="My Work & Projects"
      intro="Here's a collection of my professional work and personal side projects that I've worked on over the years."
    >
      <div className="space-y-16">
        <ProjectSection title="Side Projects" projects={sideProjects} />
        <div className="border-t border-zinc-200 pt-12 dark:border-zinc-700/40">
          <ProjectSection
            title="Professional Work"
            projects={professionalWork}
          />
        </div>
      </div>
    </SimpleLayout>
  )
}
