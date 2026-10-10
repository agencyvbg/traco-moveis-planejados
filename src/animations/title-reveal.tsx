export function TitleReveal({
  text,
  level = 2,
  id,
  className,
}: {
  text: string;
  level?: 1 | 2 | 3;
  id?: string;
  className?: string;
}) {
  const Heading = level === 1 ? 'h1' : level === 3 ? 'h3' : 'h2';
  return (
    <Heading id={id} className={className} data-title-anim="">
      {text}
    </Heading>
  );
}
