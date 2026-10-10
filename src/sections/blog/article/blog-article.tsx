import type { articles } from '@/content/articles';
import { projects } from '@/content/projects';
import { ResponsiveImage } from '@/components/media/responsive-image';
import { DemoNote } from '@/components/ui/demo-note';
import './blog-article.css';
export function BlogArticle({
  article,
  index,
}: {
  article: (typeof articles)[number];
  index: number;
}) {
  return (
    <article className="blog-article section">
      <header>
        <div className="blog-article-date">
          <span className="blog-article-date-circle" aria-hidden="true" />
          <span data-text-anim="">{article.date}</span>
        </div>
        <h1 data-title-anim="">
          {index === 0 ? (
            <>
              {article.title.split(': ')[0]}:
              <br />
              {article.title.split(': ')[1]}
            </>
          ) : (
            article.title
          )}
        </h1>
      </header>
      <div className="blog-article-image">
        <ResponsiveImage
          {...projects[index].images.capa}
          alt={`${projects[index].category} — estudo conceitual`}
          eager
          sizes="90vw"
        />
      </div>
      <div className="blog-richtext">
        <DemoNote>
          Resumo demonstrativo do artigo da referência Ariyana. Imagens da
          coleção Traço.
        </DemoNote>
        <h2 data-title-anim="">Um olhar sobre a criação</h2>
        <p data-text-anim="">{article.summary}</p>
        <h2 data-title-anim="">Qualidade e intenção</h2>
        <p data-text-anim="">
          A referência discute um trabalho criativo atento ao contexto, à
          identidade e à experiência das pessoas. A apresentação visual une
          tipografia marcante, composição e movimento.
        </p>
        <blockquote>
          Criar uma experiência começa por compreender quem vai usá-la.
        </blockquote>
        <h2 data-title-anim="">Dentro do tema</h2>
        <p data-text-anim="">
          Este resumo ocupa a estrutura editorial do artigo para demonstrar a
          composição da página. O texto definitivo da Traço poderá ser incluído
          nesta mesma estrutura.
        </p>
        <div className="blog-article-secondary">
          <ResponsiveImage
            {...projects[index].images.detalhe}
            alt={`${projects[index].category} — estudo conceitual`}
            sizes="70vw"
          />
        </div>
        <h2 data-title-anim="">Ideias que ganham forma</h2>
        <p data-text-anim="">
          O objetivo da demonstração é mostrar como título, imagens, texto e
          destaques convivem na leitura, mantendo a linguagem visual da
          referência.
        </p>
      </div>
    </article>
  );
}
