import type { BaseLayoutProps } from 'fumadocs-ui/layouts/shared';
import { BookText, Download } from 'lucide-react';

/**
 * Shared layout options (nav, links) used across the docs and home layouts.
 */
export const baseOptions: BaseLayoutProps = {
  nav: {
    title: (
      <>
        <BookText className="size-5" />
        Hindsight
      </>
    ),
  },
  links: [
    {
      text: 'Download',
      url: 'https://github.com/iannellomarco/hindsight/releases',
      icon: <Download />,
      external: true,
    },
  ],
  githubUrl: 'https://github.com/iannellomarco/hindsight',
};
