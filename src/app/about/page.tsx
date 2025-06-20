import { type Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import clsx from 'clsx'

import { Container } from '@/components/Container'
import {
  GitHubIcon,
  InstagramIcon,
  LinkedInIcon,
  WhatsappIcon,
  XIcon,
} from '@/components/SocialIcons'
import portraitImage from '@/images/portrait2.jpg'

function SocialLink({
  className,
  href,
  children,
  icon: Icon,
}: {
  className?: string
  href: string
  icon: React.ComponentType<{ className?: string }>
  children: React.ReactNode
}) {
  return (
    <li className={clsx(className, 'flex')}>
      <Link
        href={href}
        className="group flex text-sm font-medium text-zinc-800 transition hover:text-teal-500 dark:text-zinc-200 dark:hover:text-teal-500"
      >
        <Icon className="h-6 w-6 flex-none fill-zinc-500 transition group-hover:fill-teal-500" />
        <span className="ml-4">{children}</span>
      </Link>
    </li>
  )
}

function MailIcon(props: React.ComponentPropsWithoutRef<'svg'>) {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" {...props}>
      <path
        fillRule="evenodd"
        d="M6 5a3 3 0 0 0-3 3v8a3 3 0 0 0 3 3h12a3 3 0 0 0 3-3V8a3 3 0 0 0-3-3H6Zm.245 2.187a.75.75 0 0 0-.99 1.126l6.25 5.5a.75.75 0 0 0 .99 0l6.25-5.5a.75.75 0 0 0-.99-1.126L12 12.251 6.245 7.187Z"
      />
    </svg>
  )
}

export const metadata: Metadata = {
  title: 'About',
  description:
    'I’m Hammam Firdaus. I live in Yogyakarta, where I prepare the future and catch up the dream.',
}

export default function About() {
  return (
    <Container className="mt-16 sm:mt-32">
      <div className="grid grid-cols-1 gap-y-16 lg:grid-cols-2 lg:grid-rows-[auto_1fr] lg:gap-y-12">
        <div className="lg:pl-20">
          <div className="max-w-xs px-2.5 lg:max-w-none">
            <Image
              src={portraitImage}
              alt=""
              sizes="(min-width: 1024px) 32rem, 20rem"
              className="aspect-square rotate-3 rounded-2xl bg-zinc-100 object-cover dark:bg-zinc-800"
            />
          </div>
        </div>
        <div className="lg:order-first lg:row-span-2">
          <h1 className="text-4xl font-bold tracking-tight text-zinc-800 sm:text-5xl dark:text-zinc-100">
            About me.
          </h1>
          <div className="mt-6 space-y-7 text-base text-zinc-600 dark:text-zinc-400">
            <p>
              Hi, I'm Hammam, a software engineer based in Yogyakarta,
              Indonesia, with 5 years of experience in the software industry. I
              specialize in Fullstack development, focusing primarily on Backend
              technologies like Ruby on Rails, JavaScript/TypeScript, Python,
              and Golang. I have a passion for building efficient and scalable
              solutions, and I'm always eager to expand my skill set by
              exploring emerging technologies. Recently, GIS development,
              Football Analytics, AI/ML, as well as newer stacks like Rust,
              Elixir, and GraphQL have caught my attention. While I haven't yet
              applied these in production, I'm enthusiastic about deep diving
              into these technologies and integrating them into real-world
              projects.
            </p>
            
            <div className="mt-8 rounded-2xl border border-zinc-100 p-6 dark:border-zinc-700/40">
              <h2 className="flex text-sm font-semibold text-zinc-900 dark:text-zinc-100">
                <span className="ml-3">Interested in mentoring?</span>
              </h2>
              <p className="mt-2 text-sm text-zinc-600 dark:text-zinc-400">
                Want to get mentoring sessions with me or just discuss software development topics?
                I'm available to help with career guidance, code reviews, and technical challenges.
              </p>
              <div className="mt-4">
                <Link
                  href="https://dealls.com/mentoring/hammam-firdaus-982"
                  className="inline-flex items-center text-sm font-medium text-teal-500 hover:text-teal-700 dark:text-teal-400 dark:hover:text-teal-300"
                >
                  <span>Connect with me on Dealls</span>
                  <svg viewBox="0 0 20 20" fill="currentColor" className="ml-1 h-4 w-4">
                    <path fillRule="evenodd" d="M5.22 14.78a.75.75 0 001.06 0l7.22-7.22v5.69a.75.75 0 001.5 0v-7.5a.75.75 0 00-.75-.75h-7.5a.75.75 0 000 1.5h5.69l-7.22 7.22a.75.75 0 000 1.06z" clipRule="evenodd" />
                  </svg>
                </Link>
              </div>
            </div>
          </div>
        </div>
        <div className="lg:pl-20">
          <ul role="list">
            <SocialLink href="https://twitter.com/motifakes" icon={XIcon}>
              Follow on X
            </SocialLink>
            <SocialLink
              href="https://www.instagram.com/mamxalf/"
              icon={InstagramIcon}
              className="mt-4"
            >
              Follow on Instagram
            </SocialLink>
            <SocialLink
              href="https://github.com/mamxalf"
              icon={GitHubIcon}
              className="mt-4"
            >
              Follow on GitHub
            </SocialLink>
            <SocialLink
              href="https://www.linkedin.com/in/hammamxalf/"
              icon={LinkedInIcon}
              className="mt-4"
            >
              Follow on LinkedIn
            </SocialLink>
            <SocialLink
              href="mailto:hammamxalf@gmail.com"
              icon={MailIcon}
              className="mt-8 border-t border-zinc-100 pt-8 dark:border-zinc-700/40"
            >
              hammamxalf@gmail.com
            </SocialLink>
            <SocialLink
              href="https://api.whatsapp.com/send/?phone=6285727617995"
              icon={WhatsappIcon}
              className="mt-4"
            >
              +62 857-2761-7995
            </SocialLink>
          </ul>
        </div>
      </div>
    </Container>
  )
}
