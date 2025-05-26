import { Accessibility, Code2, Palette, Zap } from 'lucide-react';

const features = [
  {
    icon: Zap,
    title: 'Performance',
    description: 'Fast, lightweight, and optimized for any project.',
  },
  {
    icon: Accessibility,
    title: 'Accessibility',
    description: 'Built with best practices for an accessible UX.',
  },
  {
    icon: Palette,
    title: 'Customization',
    description: 'Fully customizable with Tailwind and flexible APIs.',
  },
  {
    icon: Code2,
    title: 'Usability',
    description: 'Type-safe, composable, and easy to integrate.',
  },
];

export default function Features() {
  return (
    <section className="bg-gradient-to-b from-bg to-surface" id="components">
      <div className="mx-auto my-20 grid w-full max-w-screen-xl grid-cols-2 gap-6 px-6 sm:gap-10 lg:grid-cols-4">
        {features.map((feature) => (
          <div key={feature.title} className="flex flex-col gap-2">
            <div className="flex items-start gap-2 max-sm:flex-col sm:items-center">
              <div className="rounded-lg bg-primary-muted p-2 text-primary">
                <feature.icon size={24} />
              </div>
              <h3 className="font-semibold text-xl">{feature.title}</h3>
            </div>
            <p className="text-sm text-text-2">{feature.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
