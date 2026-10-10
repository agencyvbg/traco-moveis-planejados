# Entradas da Traço e referência Ariyana

Auditoria de 09/10/2026, baseada nos atributos do HTML e nas timelines IX3 publicadas em [Ariyana Studio](https://ariyana-studio.webflow.io/).

## Mapeamento de todas as seções

| Seção                       | Comportamento da referência aplicado/preservado                                                                                |
| --------------------------- | ------------------------------------------------------------------------------------------------------------------------------ |
| Hero                        | Foto expande; marca, subtítulo e descrição entram em caracteres mascarados; redes e métrica entram depois.                     |
| Por dentro da Traço         | Palavras mudam de 30% para 100% de opacidade conforme o scroll, sem fade adicional no bloco inteiro.                           |
| Histórico                   | Deslocamento horizontal pelo scroll; textos e imagens acompanham os painéis.                                                   |
| Processo                    | Título e parágrafo têm entradas independentes. Cards mantêm abertura por interação.                                            |
| Projetos em destaque        | Título em caracteres e badge em escala/opacidade; projetos mantêm a pilha controlada pelo scroll.                              |
| Marcas                      | Depoimento em caracteres; logos estáticos; faixa mantém movimento contínuo.                                                    |
| Serviços                    | Título principal, badge e cada título de serviço entram individualmente. Tags e mídia permanecem estáticas.                    |
| Play Reel                   | Mantém expansão da mídia e aproximação dos textos ligadas ao scroll.                                                           |
| Líderes                     | Mantém abertura em leque e giro das imagens; não recebe entrada de texto genérica.                                             |
| Depoimentos                 | Título e badge; cards entram da direita com rotação no desktop. Tablet e celular exibem cards no fluxo.                        |
| Contato na Home             | Mantém faixas em direções opostas e CTA central.                                                                               |
| Rodapé                      | Textos estáticos, como na referência.                                                                                          |
| Sobre — abertura e métricas | Mantém composição e textos da página; sem aplicar entrada por caracteres onde a referência não a usa.                          |
| Sobre — por que escolher    | Dois títulos e parágrafo com entradas individuais; cards mantêm trilho horizontal.                                             |
| Sobre — equipe e prêmios    | Títulos em caracteres e badges em escala; retratos, nomes e linhas permanecem estáticos.                                       |
| Sobre — vida no estúdio     | Título e parágrafo em caracteres; fotos mantêm a composição existente.                                                         |
| Serviços — abertura         | Mantém círculos, imagem no título e vídeo ligado ao scroll. Entradas dos serviços e depoimentos são compartilhadas com a Home. |
| Projetos, Blog e Contato    | HTML publicado dessas páginas não tem `data-title-anim` ou `data-text-anim`; títulos e parágrafos permanecem estáticos.        |

## Tempos e gatilhos

- Títulos: `-100% → 0%`, 1 segundo, stagger total de 0,5 segundo, `back.inOut`. Timeline `t-d5649a58`.
- Parágrafos: `-100% → 0%`, 0,8 segundo, início em 0,2 segundo, stagger total de 0,4 segundo, `power3.out`. Timeline `t-acc0a7cb`.
- Gatilho: topo do elemento a 90% da altura da tela. Executa uma vez por visita, sem reiniciar ao subir dentro da seção.
- Badge: início em 1 segundo, duração 0,6 segundo, escala 0,5 → 1, opacidade 0 → 1, `back.out`.
- Cards de depoimentos: acima de 991px, gatilho `top center`, entrada de `100vw` com rotação de 40 graus, duração de 1 segundo e stagger total de 0,4 segundo, `back.out`. Timeline `t-f0abf957`.

## Implementação e acessibilidade

`SectionEntrances` usa GSAP, ScrollTrigger e SplitText instalados localmente. Os alvos são explícitos; não há seleção genérica de todos os títulos ou parágrafos. As timelines são montadas pausadas antes de registrar o gatilho para evitar entrada antecipada.

As fontes são aguardadas antes da divisão dos caracteres. A divisão preserva o texto acessível e a quebra entre palavras. A troca de rota limpa timelines, gatilhos e marcação do SplitText. O servidor entrega texto legível; movimento reduzido dispensa máscaras e entradas. As entradas não usam atualização de estado React em cada frame.

Os gatilhos permanecem registrados até a limpeza da rota. `play none none none` mantém a entrada concluída ao retornar à seção; não se usa `once: true`, pois a remoção automática durante o refresh pode invalidar a lista percorrida pelo ScrollTrigger ao registrar os cards. A limpeza fica disponível antes de registrar os efeitos de cada breakpoint.

O tamanho e o número de letras dos textos em português diferem do inglês; o stagger usa a mesma duração total da referência, não um atraso fixo por letra.
