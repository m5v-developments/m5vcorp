import { newsItems } from '@/lib/news';
import FeaturedNewsCard from '@/components/news/FeaturedNewsCard';
import NewsList from '@/components/news/NewsList';
import Image from 'next/image';

// TODO: Replace with getNews() function for Sanity integration
const getNews = () => newsItems;

export default function NewsPage() {
  const allNews = getNews();
  const [featured, ...others] = allNews;

  return (
    <main>
      {/* Hero Section */}
      <div className="w-full relative pt-56 pb-24 px-4 md:px-8 text-white h-[60vh] flex items-end">
        {/* Background image */}
        <Image
          src="/images/banner/niagara-banner.webp"
          alt="News Hero"
          fill
          className="object-cover object-center z-0"
          priority
        />
        {/* Color overlay */}
        <div className="absolute inset-0 bg-accent-blue/80 z-10" />
        {/* Headline content */}
        <div className="max-w-6xl mx-auto w-full relative z-20">
          <div>
            <p className="uppercase font-semibold tracking-widest text-sm mb-2">News</p>
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-light mb-2">
              The Latest Insights From Our Experts.
            </h1>
          </div>
        </div>
      </div>

      {/* News Content */}
      <section className="py-16 px-4 md:px-8">
        <div className="max-w-6xl mx-auto space-y-16">
          <FeaturedNewsCard item={featured} />
          <NewsList items={others} />
        </div>
      </section>
    </main>
  );
}
