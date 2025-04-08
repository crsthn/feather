"use client";

import MenuAnimatedIcon from "@/components/icons/menu-animated";
import { navLinks } from "@/constants/navigation-links";
import { Dialog } from "@base-ui-components/react";
import Link from "next/link";

export default function MobileNavigation() {
  return (
    <Dialog.Root>
      <Dialog.Trigger className="group flex size-16 cursor-pointer items-center justify-center text-text-2 hover:text-text md:hidden">
        <MenuAnimatedIcon height={16} width={16} />
      </Dialog.Trigger>
      <Dialog.Portal>
        <Dialog.Popup className="fixed inset-x-0 top-16 z-50 flex h-[calc(100vh-4rem)] flex-col overflow-y-auto bg-surface/80 text-text backdrop-blur-xl transition-all duration-200 ease-ease data-[ending-style]:opacity-0 data-[starting-style]:opacity-0 md:hidden">
          <nav className="flex flex-col gap-3 p-6 font-medium text-2xl">
            {navLinks.map((link) => (
              <Link key={link.href} href={link.href}>
                {link.label}
              </Link>
            ))}
          </nav>
        </Dialog.Popup>
      </Dialog.Portal>
    </Dialog.Root>
  );
}
