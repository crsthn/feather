import Github from '@/components/icons/github';
import MobileNavigation from '@/components/landing/mobile-navigation';
import { buttonStyles } from '@/components/ui/button';
import { navLinks } from '@/constants/navigation-links';
import Image from 'next/image';
import Link from 'next/link';

export default function Navigation() {
  return (
    <header className="fixed inset-x-0 top-0 z-50 bg-surface/80 backdrop-blur-xl">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between pl-6 md:pr-6">
        <Link href="/" className="flex items-center gap-2">
          <Image
            className="dark:invert"
            src="/feather.svg"
            alt="Feather logo"
            width={20}
            height={20}
          />
          <span className="font-semibold text-lg">Feather</span>
        </Link>
        <div className="flex items-center md:gap-3">
          <nav className="hidden md:inline-flex">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="inline-flex h-8 items-center px-3 font-medium text-text-2 transition-colors hover:text-text"
              >
                {link.label}
              </Link>
            ))}
          </nav>
          <Link
            target="_blank"
            className={buttonStyles({
              variant: 'secondary',
              size: 'sm',
            })}
            href="https://github.com/crsthn/feather"
          >
            <Github className="fill-text" />
            Star on GitHub
          </Link>
          <MobileNavigation />
        </div>
      </div>
    </header>
  );
}
