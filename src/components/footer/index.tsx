'use client';

import Image from 'next/image';
import Link from 'next/link';

interface BaseNavItem {
  label: string;
  href: string;
}

interface SocialNavItem extends BaseNavItem {
  icon: string;
}

type NavItem = BaseNavItem | SocialNavItem;

export function Footer() {
  const primaryNavItems: Record<string, NavItem[]> = {
    COMPANY: [
      { label: 'About Us', href: '/company' },
      { label: 'Team', href: '/team' },
    ],
    PROJECTS: [
      { label: 'All Projects', href: '/projects' },
    ],
    INSIGHTS: [
      { label: 'News', href: '/news' },
    ],
    SOCIALS: [
      { label: 'Instagram', href: 'https://www.instagram.com/m5v_developments'},
      { label: 'Youtube', href: 'https://www.youtube.com/m5v_developments'},
      { label: 'LinkedIn', href: 'https://www.linkedin.com/company/m5v-developments/'},
    ],
  };

  const secondaryNavItems: BaseNavItem[] = [
    { label: 'Careers', href: '/careers' },
    { label: 'Contact Us', href: '/contact' },
  ];

  return (
    <footer className="bg-accent-blue text-off-white py-12 px-4 md:px-8">
      <div className="container mx-auto">
        {/* Main footer content */}
        <div className="lg:grid lg:grid-cols-5 gap-8">
          {/* Logo column */}
          <div className="mb-8 lg:mb-0">
            <Link href="/">
              <Image
                src="/images/logo.svg"
                alt="M5V Logo"
                width={120}
                height={60}
                loading="eager"
                className="h-auto"
              />
            </Link>
          </div>

          {/* Primary Navigation */}
          {Object.entries(primaryNavItems).map(([section, items]) => (
            <div key={section} className="mb-8 lg:mb-0">
              <h3 className="font-semibold mb-4">{section}</h3>
              <ul className="space-y-2">
                {items.map((item) => (
                  <li key={item.label}>
                    <Link
                      href={item.href}
                      className="hover:underline decoration-1"
                    >
                      {'icon' in item ? (
                        <div className="flex items-center gap-2">
                          <Image
                            src={item.icon}
                            alt={`${item.label} icon`}
                            width={20}
                            height={20}
                            loading="eager"
                          />
                          {item.label}
                        </div>
                      ) : (
                        item.label
                      )}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Divider */}
        <div className="border-t border-off-white/20 my-8" />

        {/* Secondary Navigation */}
        <div className="flex flex-col items-center space-y-6">
          <nav>
            <ul className="flex flex-wrap justify-center gap-6">
              {secondaryNavItems.map((item) => (
                <li key={item.label}>
                  <Link
                    href={item.href}
                    className="hover:underline decoration-1"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          {/* Copyright */}
          <div className="text-sm">© 2025 M5V</div>
        </div>
      </div>
    </footer>
  );
} 