import { BlogOpeningMotion } from '@/sections/blog/listing/blog-opening-motion';
import type { Metadata } from 'next';
import { PageOpening } from '@/components/layout/page-opening/page-opening';
import { BlogListing } from '@/sections/blog/listing/blog-listing';
import { Contact } from '@/sections/home/contact/contact';
export const metadata: Metadata = {
  title: 'Blog — Traço',
  alternates: { canonical: '/blog' },
};
export default function BlogPage() {
  return (
    <main
      id="conteudo"
      className="page-content tw:relative tw:bg-paper blog-page"
      tabIndex={-1}
    >
      <BlogOpeningMotion />
      <PageOpening
        caption="Leia nossos artigos"
        title="Ideias e perspectivas para criar novas experiências."
      />
      <div
        className="reference-divider blog-opening-divider"
        aria-hidden="true"
      >
        {[0, 1, 2, 3, 4].map((line) => (
          <i key={line} />
        ))}
      </div>
      <BlogListing />
      <Contact />
    </main>
  );
}
