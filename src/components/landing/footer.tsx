import { ThemeToggle } from '@/components/theme/theme-toggle';
import Image from 'next/image';
import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="mx-auto flex w-full max-w-screen-xl justify-between gap-6 px-6 py-14">
      <div className="flex flex-col gap-1">
        <div className="flex items-center gap-1">
          <Image
            className="dark:invert"
            src="/feather.svg"
            alt="Feather logo"
            width={20}
            height={20}
          />
          <span className="font-semibold text-lg">Feather</span>
        </div>
        <span className="text-sm text-text-2">
          Built by{' '}
          <Link
            target="_blank"
            href="https://github.com/crsthn"
            className="font-semibold text-text"
          >
            Cristhian Rodríguez
          </Link>
        </span>
      </div>

      <ThemeToggle />
    </footer>
  );
}
