import { buttonStyles } from "@/components/ui/button";
import {
  Tooltip,
  TooltipPopup,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { BoldIcon, ItalicIcon, UnderlineIcon } from "lucide-react";

export default function Component() {
  return (
    <TooltipProvider>
      <div className="flex rounded-lg bg-surface p-1">
        <Tooltip>
          <TooltipTrigger
            className={buttonStyles({
              color: "secondary",
              iconOnly: true,
              variant: "subtle",
              size: "sm",
            })}
          >
            <BoldIcon aria-label="Bold" size={16} />
          </TooltipTrigger>
          <TooltipPopup>Bold</TooltipPopup>
        </Tooltip>

        <Tooltip>
          <TooltipTrigger
            className={buttonStyles({
              color: "secondary",
              iconOnly: true,
              variant: "subtle",
              size: "sm",
            })}
          >
            <ItalicIcon aria-label="Italic" size={16} />
          </TooltipTrigger>
          <TooltipPopup>Italic</TooltipPopup>
        </Tooltip>

        <Tooltip>
          <TooltipTrigger
            className={buttonStyles({
              color: "secondary",
              iconOnly: true,
              variant: "subtle",
              size: "sm",
            })}
          >
            <UnderlineIcon aria-label="Underline" size={16} />
          </TooltipTrigger>
          <TooltipPopup>Underline</TooltipPopup>
        </Tooltip>
      </div>
    </TooltipProvider>
  );
}
