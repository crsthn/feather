import { cx } from '@/lib/utils';
import { Code2 } from 'lucide-react';
import type { ComponentProps, ReactElement, ReactNode } from 'react';
import { Children, isValidElement } from 'react';
import CopyButton from '../shared/copy-button';

function extractTextContent(children: ReactNode): string {
  let text = '';

  Children.forEach(children, (child) => {
    if (typeof child === 'string') {
      text += child;
    } else if (typeof child === 'number') {
      text += String(child);
    } else if (isValidElement(child)) {
      const element = child as ReactElement<{ children?: ReactNode }>;
      text += extractTextContent(element.props.children);
    }
  });

  return text;
}

export function CodeBlock({
  title,
  children,
  className,
  ...props
}: ComponentProps<'pre'>) {
  const codeText = extractTextContent(children);

  return (
    <figure
      {...props}
      className={cx(
        'not-prose relative my-6 overflow-hidden rounded-xl bg-surface text-sm first:mt-0 last:mb-0',
        className,
      )}
    >
      {title ? (
        <div className="flex flex-row items-center gap-2 border-b py-1.5 pr-2.5 pl-4">
          <Code2 size={16} />
          <figcaption className="flex-1 truncate">{title}</figcaption>
          <CopyButton text={codeText} />
        </div>
      ) : (
        <CopyButton
          text={codeText}
          className="absolute top-2.5 right-2.5 z-10 backdrop-blur-md"
        />
      )}
      <Pre>{children}</Pre>
    </figure>
  );
}

export function Pre({ className, ...props }: ComponentProps<'pre'>) {
  return (
    <pre
      {...props}
      className={cx(
        'max-h-[40rem] overflow-auto p-4 focus-visible:outline-none',
        className,
      )}
    />
  );
}
