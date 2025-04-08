import {
  PreviewCard,
  PreviewCardPopup,
  PreviewCardTrigger,
} from "@/components/ui/preview-card";

export default function Component() {
  return (
    <PreviewCard>
      <p className="max-w-64 text-balance text-sm">
        The principles of good{" "}
        <PreviewCardTrigger
          href="https://en.wikipedia.org/wiki/Typography"
          className="font-medium text-primary hover:underline"
        >
          typography
        </PreviewCardTrigger>{" "}
        remain into the digital age.
      </p>

      <PreviewCardPopup>
        <img
          width="448"
          height="300"
          className="block w-full rounded-sm"
          src="https://images.unsplash.com/photo-1619615391095-dfa29e1672ef?q=80&w=448&h=300"
          alt="Station Hofplein signage in Rotterdam, Netherlands"
        />
        <p className="text-pretty text-sm">
          <strong>Typography</strong> is the art and science of arranging type
          to make written language clear, visually appealing, and effective in
          communication.
        </p>
      </PreviewCardPopup>
    </PreviewCard>
  );
}
