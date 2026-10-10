import { HoverLabel } from '@/components/ui/hover-label';
import Link from 'next/link';
import { articles } from '@/content/articles';
import { projects } from '@/content/projects';
import { ResponsiveImage } from '@/components/media/responsive-image';
import { DemoNote } from '@/components/ui/demo-note';
import './blog-listing.css';
export function BlogListing() {
  return (
    <section
      className="blog-listing section"
      aria-label="Artigos demonstrativos"
    >
      <DemoNote>
        Artigos da referência Ariyana apresentados em português como resumos
        demonstrativos.
      </DemoNote>
      {articles.map((article, index) => (
        <article key={article.slug} className="blog-row">
          <div className="blog-row-inner">
            <time data-text-anim="">{article.date}</time>
            <div className="blog-row-right">
              <Link href={`/blog/${article.slug}`} className="blog-row-image">
                <ResponsiveImage
                  {...projects[index].images.meio}
                  alt={`${projects[index].category} — estudo conceitual`}
                  sizes="65vw"
                />
              </Link>
              <div className="blog-row-copy">
                <Link href={`/blog/${article.slug}`}>
                  <h2 data-title-anim="">{article.title}</h2>
                </Link>
                <Link className="pill-link" href={`/blog/${article.slug}`}>
                  <HoverLabel variant="v2">Saiba mais</HoverLabel>
                </Link>
              </div>
            </div>
          </div>
        </article>
      ))}
    </section>
  );
}
