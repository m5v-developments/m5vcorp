import { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { projects } from '@/lib/data'
import { notFound } from 'next/navigation'
import AnimatedDescription from './AnimatedDescription'
import AnimatedImage from './AnimatedImage'
import Head from 'next/head'
import FadeInOnView from '@/components/FadeInOnView'

const BLUR_PLACEHOLDER = 'data:image/webp;base64,UklGRiIAAABXRUJQVlA4ICwAAACwAgCdASoCAAIALmk0mk0iIiIiIgBoSywA'; // generic 10x10 blur

async function getProjectData(slug: string) {
  const project = projects.find(p => p.slug === slug)
  if (!project) {
    notFound()
  }
  return project
}

export default async function ProjectPage({ params }: { params: { slug: string } }) {
  const project = await getProjectData(params.slug)

  // Filter stats to only show the specified ones
  const allowedStats = ['Location', 'Units', 'Status', 'Asset Class', 'Sub Type'];
  const filteredStats = project.stats.filter(stat => allowedStats.includes(stat.label));

  // Breadcrumbs JSON-LD
  const breadcrumbs = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      {
        "@type": "ListItem",
        "position": 1,
        "name": "Home",
        "item": "/"
      },
      {
        "@type": "ListItem",
        "position": 2,
        "name": "Projects",
        "item": "/projects"
      },
      {
        "@type": "ListItem",
        "position": 3,
        "name": project.name,
        "item": `/projects/${project.slug}`
      }
    ]
  }

  return (
    <div className="min-h-screen bg-off-white">
      <Head>
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbs) }} />
      </Head>
      {/* Hero Section */}
      <div className="w-full relative pt-56 pb-16 px-4 sm:px-8 md:px-16 text-white mt-[72px]" style={{ minHeight: '340px' }}>
        <Image
          src={project.images.hero}
          alt={`${project.name} Hero`}
          fill
          className="object-cover object-center z-0"
          priority
          sizes="(max-width:640px) 100vw, 60vw"
          placeholder="blur"
          blurDataURL={BLUR_PLACEHOLDER}
        />
        <div className="absolute inset-0 bg-accent-blue/80 z-10" />
        <div className="max-w-7xl mx-auto px-8 sm:px-12 md:px-18 relative z-20">
          <div className="flex justify-between items-start">
            <div>
              <p className="uppercase font-semibold tracking-widest text-sm mb-2">Our Projects</p>
              <h1 className="text-3xl sm:text-4xl md:text-5xl font-light mb-2">{project.name}</h1>
            </div>
            <div className="text-right">
              <p className="text-sm font-light">{project.assetClass}</p>
              <p className="text-sm font-light">{project.subType}</p>
            </div>
          </div>
        </div>
      </div>

      {/* Content Section */}
      <div className="max-w-6xl mx-auto px-4 sm:px-8 md:px-16">
        <div className="relative -mt-16">
          <div className="flex flex-col md:flex-row gap-8 md:gap-12">
            {/* Left Column - Description and Stats */}
            <div className="w-full md:w-2/3 pt-8">
              <div className="prose max-w-none mt-16 mb-8">
                <p className="text-lg leading-relaxed text-gray-700 mt-8">{project.description}</p>
              </div>
              {/* Stats Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                {filteredStats.map((item, idx) => (
                  <div key={idx} className="bg-off-white p-2 hover:shadow-lg transition-shadow">
                    <p className="text-sm text-gray-500 capitalize mb-1">{item.label}</p>
                    <p className="text-xl text-black-accent font-medium">{item.value}</p>
                  </div>
                ))}
              </div>
            </div>
            {/* Right Column - Overlapping Image */}
            <div className="w-full md:w-1/3">
              <div className="aspect-[3/4] overflow-hidden bg-[color:var(--muted)] shadow-xl relative z-30 animate-[fade-in-up_1s_ease-out]">
                <Image
                  src={project.images.spot}
                  alt="Project gallery"
                  fill
                  className="object-cover"
                  loading="lazy"
                  sizes="(max-width:640px) 100vw, 60vw"
                  placeholder="blur"
                  blurDataURL={BLUR_PLACEHOLDER}
                />
              </div>
            </div>
          </div>
        </div>

        {/* Long Description */}
        <AnimatedDescription description={project.longDescription} />

        {/* Full Width Image */}
        <AnimatedImage 
          src={project.images.banner}
          alt="Project interior"
        />

        {/* Gallery Masonry */}
        {project.images.gallery && project.images.gallery.length > 0 && (
          <section className="columns-2 gap-4 w-full bg-off-white pb-4 mt-56" aria-label="Project Gallery">
            {project.images.gallery.map((src, i) => (
              <FadeInOnView key={i} className="break-inside-avoid mb-4 w-full">
                <Image
                  src={src}
                  alt={`${project.name} gallery ${i+1}`}
                  width={600}
                  height={400}
                  className="w-full h-auto object-cover"
                  loading="lazy"
                  sizes="(max-width:640px) 100vw, 50vw"
                  placeholder="blur"
                  blurDataURL={BLUR_PLACEHOLDER}
                />
              </FadeInOnView>
            ))}
          </section>
        )}

        {/* Back Button */}
        <div className="text-center pb-12 mt-12">
          <Link 
            href="/projects"
            className="inline-block border border-black-primary text-black-primary px-6 py-2 hover:bg-accent-blue hover:text-white transition-colors focus:outline-none focus:ring-2 focus:ring-accent-blue"
            aria-label="Back to All Projects"
          >
            Back to All Projects
          </Link>
        </div>
      </div>
    </div>
  )
}
