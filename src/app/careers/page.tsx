'use client'
import React, { useState, useEffect } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { FaLightbulb, FaUsers, FaShieldAlt, FaStar, FaChartLine, FaLeaf, FaHandshake, FaCheckCircle, FaBolt, FaBalanceScale, FaUserCheck, FaFistRaised } from 'react-icons/fa'

const values = [
  { title: 'Innovation', body: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.' },
  { title: 'Community',  body: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.' },
  { title: 'Integrity',  body: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.' },
  { title: 'Excellence', body: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.' },
  { title: 'Growth',     body: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.' },
]

export default function CareersPage() {
  const [active, setActive] = useState(0)
  const [showContent, setShowContent] = useState(0)
  const [isMobile, setIsMobile] = useState(false)
  const [showAllPhotos, setShowAllPhotos] = useState(false)

  useEffect(() => {
    setShowContent(-1)
    const timeout = setTimeout(() => setShowContent(active), 350)
    return () => clearTimeout(timeout)
  }, [active])

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 640)
    }
    
    checkMobile()
    window.addEventListener('resize', checkMobile)
    return () => window.removeEventListener('resize', checkMobile)
  }, [])

  return (
    <>
      {/* Hero Section */}
      <div className="w-full relative pt-56 pb-24 px-4 md:px-8 text-white h-[60vh] flex items-end">
        <Image
          src="/images/niagara-falls.png"
          alt="Niagara Falls Hero"
          fill
          className="object-cover object-center z-0"
          priority
        />
        <div className="absolute inset-0 bg-accent-blue/80 z-10" />
        <div className="max-w-6xl mx-auto w-full relative z-20">
          <div>
            <p className="uppercase font-semibold tracking-widest text-sm mb-2">Careers</p>
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-light mb-2">Join Our Team and Build the Future.</h1>
            <Link href="https://www.linkedin.com/company/m5v-developments/jobs/" className="mt-6 inline-block border border-white text-white px-6 py-2 hover:bg-black hover:text-white transition-colors focus:outline-none focus:ring-2 focus:ring-accent-blue">
              View All Jobs
            </Link>
          </div>
        </div>
      </div>

      {/* Intro Section */}
      <section className="bg-off-white py-16 md:py-24 px-4 md:px-8">
        <div className="max-w-6xl mx-auto flex flex-col gap-8 items-center">
          <div className="w-full flex flex-col space-y-4">
          <h2 className="text-accent-blue uppercase font-medium tracking-widest text-sm mb-2">GROW WITH M5V</h2>
            <h2 className="text-h2 font-medium leading-tight text-black mb-2">Ambitious Projects Need Ambitious People</h2>
            <p className="text-black text-lg">At M5V, community-driven ambition and individual empowerment are fundamental to who we are. We seek purpose-led individuals who consistently aim higher, providing them with the autonomy, resources, and trust needed to deliver landmark projects that reshape Ontario's neighborhoods.</p>
            <p className="text-black text-lg">Whether it's creating vibrant retirement communities or crafting unique cottage living experiences, our diverse teams—including engineers, planners, designers, and marketers—collaborate seamlessly at every stage. They leverage shared insights, agile workflows, and data-driven tools to turn bold concepts into tangible, lasting impact.</p>
            <p className="text-black text-lg">Here, every voice counts, proactive problem-solving is championed, and clear opportunities exist for your professional growth and industry influence.</p>
          </div>
          <div className="relative w-full h-72 md:h-[600px] overflow-hidden">
            <Image
              src="/images/misc/hh-group.webp"
              alt="M5V Employee"
              fill
              className="object-cover object-center"
              priority
            />
          </div>
        </div>
      </section>

      {/* Values Slider Section */}
      <ValuesCarousel />

      {/* Life @ M5V Section */}
      <section className="bg-off-white py-16 px-4 md:px-8">
        <div className="max-w-6xl mx-auto md:grid md:grid-cols-2 gap-8 items-center">
          <div className="order-2 md:order-1 flex flex-col space-y-4 h-full">
            <h2 className="text-accent-blue uppercase font-medium tracking-widest text-sm mb-2">LIFE AT M5V</h2>
            <h3 className="text-h2 font-medium mb-4 leading-tight">We build communities outside, and inside, our office walls.</h3>
            <ul className="list-disc pl-5 space-y-2 text-black text-lg">
              <li><span className="font-bold">Purpose-Driven Projects</span> — From retirement residences to cottage developments, our work shapes real lives across Ontario.</li>
              <li><span className="font-bold">Mentors in Every Meeting</span> — Our diverse team, from planners to marketers, collaborates seamlessly. Your unique perspective truly matters here.</li>
              <li><span className="font-bold">Career Lanes, Not Ladders</span> — Growth isn't linear. You'll find ample room to pivot, stretch your skills, and lead impactful initiatives from wherever you are.</li>
              <li><span className="font-bold">Whole-Human Benefits</span> — We move fast, but not at the expense of burnout. We encourage focused work, real breaks, and boundaries that let you stay your best.</li>
              <li><span className="font-bold">Celebrations that Matter</span> — From launch-day site tours to summer BBQs, we intentionally celebrate our collective achievements and make meaningful memories.</li>
            </ul>
          </div>
          <div className="relative w-full min-h-[300px] h-full flex-1 overflow-hidden order-1 md:order-2 mb-8 md:mb-0">
            <Image
              src="/images/misc/him500-meeting-group-couch.webp"
              alt="Team at work"
              fill
              className="object-cover object-center"
              priority
            />
          </div>
        </div>
      </section>

      {/* Employee Photo Collage */}
      <section className="w-full bg-off-white pb-4 px-4 md:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="columns-2 sm:columns-3 lg:columns-4 gap-4">
            {[
              { src: '/images/misc/him500-meeting-portrait.webp', width: 400, height: 533 },
              { src: '/images/misc/him500-site-group.webp', width: 400, height: 300 },
              { src: '/images/misc/hh-drilling.webp', width: 400, height: 533 },
              { src: '/images/misc/muskoka-boating-group.webp', width: 400, height: 400 },
              { src: '/images/misc/yaseen-group.webp', width: 400, height: 300 },
              { src: '/images/misc/worldtour-sherard-sitdown-closeup.webp', width: 400, height: 300 },
              { src: '/images/misc/hh-gloves.webp', width: 400, height: 533 },
              { src: '/images/misc/hh-site.webp', width: 400, height: 533 },
              { src: '/images/misc/hh-walking1.webp', width: 400, height: 400 },
              { src: '/images/misc/lakeview-group.webp', width: 400, height: 300 },
            ].slice(0, isMobile && !showAllPhotos ? 8 : undefined).map((img, i) => (
              <div key={i} className="break-inside-avoid mb-4 w-full">
                <Image
                  src={img.src}
                  alt={`Employee collage ${i+1}`}
                  width={img.width}
                  height={img.height}
                  className="w-full h-auto object-cover"
                  loading="lazy"
                  sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 25vw"
                  placeholder="blur"
                  blurDataURL="data:image/webp;base64,UklGRiIAAABXRUJQVlA4ICwAAACwAgCdASoCAAIALmk0mk0iIiIiIgBoSywA"
                />
              </div>
            ))}
          </div>
          
          {/* View More Button for Mobile */}
          {isMobile && !showAllPhotos && (
            <div className="text-center mt-6">
              <button
                onClick={() => setShowAllPhotos(true)}
                className="inline-block border border-accent-blue text-accent-blue px-6 py-2 hover:bg-accent-blue hover:text-white transition-colors focus:outline-none focus:ring-2 focus:ring-accent-blue"
              >
                View More Photos
              </button>
            </div>
          )}
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="bg-black text-white py-12 px-4 md:px-8">
        <div className="max-w-6xl mx-auto flex flex-col items-start text-left">
          <h3 className="text-h2 font-medium leading-tight mb-2">Ready to Shape the Future with Us?</h3>
          <p className="mb-4 text-lg">Explore how your unique drive can help us redefine neighborhoods and communities.</p>
          <a
            href="https://www.linkedin.com/company/m5v-developments/jobs/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block border border-white text-white px-6 py-2 hover:bg-accent-blue hover:text-white transition-colors focus:outline-none focus:ring-2 focus:ring-accent-blue mb-2"
          >
            Browse Current Openings
          </a>
          <div className="text-sm italic text-gray-300 mt-2">
            Can't find exactly what you're looking for? Send us your resume; we'd love to connect: <a href="mailto:hiring@m5vinc.com" className="underline text-gray-200">hiring@m5vinc.com</a>
          </div>
        </div>
      </section>
    </>
  )
}

// --- ValuesCarousel Component ---
const valuesData = [
  { icon: <FaUsers className="text-accent-blue text-3xl mb-2" />, title: 'Collaborate', desc: 'Bring your strengths but lean on others. We win by working together, not alone.' },
  { icon: <FaBolt className="text-accent-blue text-3xl mb-2" />, title: 'GSD', desc: 'Move fast with intention. Done and delivered beats delayed and perfect.' },
  { icon: <FaFistRaised className="text-accent-blue text-3xl mb-2" />, title: 'Gritty', desc: "Stay the course, even when it’s tough. We finish what we start." },
  { icon: <FaBalanceScale className="text-accent-blue text-3xl mb-2" />, title: 'Ethical', desc: "Do the right thing, especially when no one’s watching." },
  { icon: <FaUserCheck className="text-accent-blue text-3xl mb-2" />, title: 'Accountable', desc: "Own your contributions from start to finish. We stand behind our work and grow from every experience." },
  { icon: <FaHandshake className="text-accent-blue text-3xl mb-2" />, title: 'Win-Win', desc: 'Lead with “How can I help?” and build relationships that benefit everyone involved.' },
]

function ValuesCarousel() {
  const [currentIndex, setCurrentIndex] = React.useState(0)
  const [isTransitioning, setIsTransitioning] = React.useState(false)
  const [paused, setPaused] = React.useState(false)
  const [touchStart, setTouchStart] = React.useState(0)
  const [touchEnd, setTouchEnd] = React.useState(0)
  const [cardsPerView, setCardsPerView] = React.useState(3)
  const [disableTransition, setDisableTransition] = React.useState(false)
  const containerRef = React.useRef<HTMLDivElement>(null)
  
  const originalData = valuesData // 6 original cards
  const extendedData = [
    ...originalData.slice(-cardsPerView), // Clone last cards at start
    ...originalData,                      // Original cards
    ...originalData.slice(0, cardsPerView) // Clone first cards at end
  ]

  // Responsive cards per view
  React.useEffect(() => {
    const updateCardsPerView = () => {
      if (window.innerWidth < 640) {
        setCardsPerView(1) // Mobile
      } else if (window.innerWidth < 1024) {
        setCardsPerView(2) // Tablet
      } else {
        setCardsPerView(3) // Desktop
      }
    }
    updateCardsPerView()
    window.addEventListener('resize', updateCardsPerView)
    return () => window.removeEventListener('resize', updateCardsPerView)
  }, [])

  // Industry standard transform calculation
  const slideWidth = 100 / cardsPerView // Each slide takes this % of container
  const currentTransform = (currentIndex + cardsPerView) * slideWidth

  // Get real index for dot indicators
  const getRealIndex = () => {
    let realIndex = currentIndex
    if (realIndex < 0) realIndex = originalData.length + realIndex
    if (realIndex >= originalData.length) realIndex = realIndex - originalData.length
    return realIndex
  }

  // Auto-play effect
  React.useEffect(() => {
    if (paused) return
    const timer = setTimeout(() => {
      next()
    }, 4000)
    return () => clearTimeout(timer)
  }, [currentIndex, paused])

  // Handle transition end for infinite loop
  const handleTransitionEnd = () => {
    setIsTransitioning(false)
    if (currentIndex >= originalData.length) {
      setDisableTransition(true)
      setCurrentIndex(0)
      setTimeout(() => setDisableTransition(false), 50)
    } else if (currentIndex < 0) {
      setDisableTransition(true)
      setCurrentIndex(originalData.length - 1)
      setTimeout(() => setDisableTransition(false), 50)
    }
  }

  // Navigation functions
  const next = () => {
    if (isTransitioning) return
    setIsTransitioning(true)
    setCurrentIndex(prev => prev + 1)
  }

  const prev = () => {
    if (isTransitioning) return
    setIsTransitioning(true)
    setCurrentIndex(prev => prev - 1)
  }

  const goTo = (i: number) => {
    if (isTransitioning) return
    setIsTransitioning(true)
    setCurrentIndex(i)
  }

  // Touch handlers
  const handleTouchStart = (e: React.TouchEvent) => {
    setTouchStart(e.targetTouches[0].clientX)
  }

  const handleTouchMove = (e: React.TouchEvent) => {
    setTouchEnd(e.targetTouches[0].clientX)
  }

  const handleTouchEnd = () => {
    if (!touchStart || !touchEnd) return
    const distance = touchStart - touchEnd
    const isLeftSwipe = distance > 50
    const isRightSwipe = distance < -50
    if (isLeftSwipe) next()
    if (isRightSwipe) prev()
  }

  return (
    <section className="w-full bg-black text-white py-16 px-4 md:px-8">
      <div className="max-w-6xl mx-auto flex flex-col items-stretch">
        {/* Text Block */}
        <div className="flex flex-col justify-center mb-10">
          <div className="uppercase font-medium tracking-widest text-sm mb-2">OUR FOUNDATION</div>
          <h3 className="text-h2 font-medium leading-tight mb-4">Values at Our Core. Purpose in Every Project.</h3>
          <p className="text-lg mb-2">At M5V, our work isn't just about buildings, it's about creating impact that lasts. Every project, every partnership, and every decision we make is guided by a set of values we live by daily.</p>
        </div>
        
        {/* Carousel Container - Industry Standard Pattern */}
        <div 
          className="relative overflow-hidden pb-4" 
          onMouseEnter={() => setPaused(true)} 
          onMouseLeave={() => setPaused(false)}
          onTouchStart={handleTouchStart}
          onTouchMove={handleTouchMove}
          onTouchEnd={handleTouchEnd}
        >
          {/* Carousel Track */}
          <div 
            ref={containerRef}
            className={`flex ${disableTransition ? '' : 'transition-transform duration-300 ease-in-out'}`}
            style={{ 
              transform: `translateX(-${currentTransform}%)`
            }}
            onTransitionEnd={handleTransitionEnd}
          >
            {extendedData.map((val, i) => (
              <div 
                key={`card-${i}`}
                className="bg-off-white border border-gray-200 text-black rounded-lg flex flex-col items-center shadow focus-within:ring-2 focus-within:ring-accent-blue min-h-[100px] sm:min-h-[120px] lg:min-h-[180px] transition-all duration-300"
                style={{ 
                  minWidth: `calc(${100 / cardsPerView}% - 24px)`,
                  maxWidth: `calc(${100 / cardsPerView}% - 24px)`,
                  marginLeft: '12px',
                  marginRight: '12px',
                  flexShrink: 0
                }}
              >
                <div className="w-full h-full p-6 flex flex-col items-center">
                  {val.icon}
                  <div className="font-bold text-lg mb-1">{val.title}</div>
                  <div className="text-base text-center">{val.desc}</div>
                </div>
              </div>
            ))}
          </div>

          {/* Arrows and Dots */}
          <div className="flex flex-col items-center mt-8 space-y-4">
            <div className="flex flex-row items-center space-x-6">
              <button 
                aria-label="Previous" 
                onClick={prev} 
                className="bg-black/70 hover:bg-accent-blue text-white rounded-full p-2 focus:outline-none focus:ring-2 focus:ring-accent-blue transition-colors duration-200"
              >
                <span aria-hidden>‹</span>
              </button>
              <button 
                aria-label="Next" 
                onClick={next} 
                className="bg-black/70 hover:bg-accent-blue text-white rounded-full p-2 focus:outline-none focus:ring-2 focus:ring-accent-blue transition-colors duration-200"
              >
                <span aria-hidden>›</span>
              </button>
            </div>
            <div className="flex justify-center space-x-2">
              {originalData.map((_, i) => (
                <button
                  key={i}
                  aria-label={`Go to slide ${i + 1}`}
                  className={`w-3 h-3 rounded-full border-2 transition-all duration-300 ${
                    i === getRealIndex()
                      ? 'bg-accent-blue border-accent-blue scale-125' 
                      : 'bg-white border-gray-400'
                  } focus:outline-none focus:ring-2 focus:ring-accent-blue`}
                  onClick={() => goTo(i)}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
