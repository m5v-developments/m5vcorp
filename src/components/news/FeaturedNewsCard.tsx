import { NewsItem } from '@/types/news';
import Link from 'next/link';
import Image from 'next/image';

interface FeaturedNewsCardProps {
  item: NewsItem;
}

export default function FeaturedNewsCard({ item }: FeaturedNewsCardProps) {
  return (
    <Link href={`/news/${item.id}`} className="block group">
      <div className="md:flex gap-8 items-start">
        <div className="w-full md:w-[40%] relative aspect-[4/3] bg-gray-200 mb-6 md:mb-0 overflow-hidden">
          {item.image ? (
            <Image
              src={item.image}
              alt={item.headline}
              fill
              className="object-cover transition-transform duration-500 ease-in-out group-hover:scale-110"
              loading="lazy"
            />
          ) : (
            <div className="w-full h-full bg-gray-200" />
          )}
        </div>
        <div className="md:w-[60%]">
          <p className="text-sm font-medium tracking-widest text-[#008DB7] uppercase mb-2">
            {item.category}
          </p>
          <h2 className="text-2xl md:text-3xl font-medium text-[#008DB7] group-hover:underline">
            {item.headline}
          </h2>
          <div className="mt-3 text-sm text-gray-600">
            {new Date(item.date).toLocaleDateString('en-US', {
              year: 'numeric',
              month: 'long',
              day: 'numeric'
            })}
            {' · '}{item.author}
          </div>
          <p className="text-gray-700 mt-4">
            {item.body.split(' ').slice(0, 22).join(' ')}...
          </p>
        </div>
      </div>
    </Link>
  );
} 