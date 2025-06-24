import { NewsItem } from '@/types/news';
import Link from 'next/link';
import Image from 'next/image';

interface NewsCardProps {
  item: NewsItem;
}

export default function NewsCard({ item }: NewsCardProps) {
  return (
    <Link href={`/news/${item.id}`} className="block group">
      <div className="md:flex gap-6 items-start">
        <div className="w-full md:w-64 h-48 relative bg-gray-200 mb-4 md:mb-0 overflow-hidden">
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
        <div className="flex-1">
          <p className="text-sm font-medium tracking-widest text-accent-blue uppercase mb-2">
            {item.category}
          </p>
          <h3 className="text-lg md:text-xl font-medium leading-tight text-accent-blue group-hover:underline">
            {item.headline}
          </h3>
          <div className="mt-2 text-sm text-gray-600">
            {new Date(item.date).toLocaleDateString('en-US', {
              year: 'numeric',
              month: 'long',
              day: 'numeric'
            })}
            {' · '}{item.author}
          </div>
          <p className="text-gray-700 mt-3">
            {item.preview}
          </p>
        </div>
      </div>
    </Link>
  );
} 