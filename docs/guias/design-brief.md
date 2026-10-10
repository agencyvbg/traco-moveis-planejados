## Artigos — proporção e entradas

Usar medidas da folha publicada: header1000px, imagem principal12/5 com margens100px; mobile3/2, margens28/44px. Abertura184px/273px,tablet150px,mobile120px. Aplicar controlador existente a títulos, data e parágrafos. Preservar conteúdo e imagem secundária local.

## Blog — faixas após abertura

Adicionar cinco faixas pretas decrescentes abaixo da abertura e antes da listagem, reutilizando o divisor responsivo existente.

## Blog — abertura e listagem

Abertura273px em telas1440+,184px desktop,150px tablet,120px mobile; etiqueta com círculo e entrada por caracteres. Títulos e datas da listagem com entrada existente. Separar wrapper de borda e conteúdo90% (75% em1920+), container1680px. Preservar imagens17/12 e conteúdo local.

## Serviços — entradas e proporções da Ariyana

Adicionar abertura por caracteres e escala da imagem inline, entrada do subtítulo dos serviços. Restaurar título principal heading-large, container1680px, cards100px de padding e mídia600px no breakpoint1920. Abertura150px tablet/120px mobile. Preservar mídia local e indicação de vídeos pendentes.

## Works / Projetos

Reproduzir abertura da Works: padding184px (273px >=1440), título24ch, caption30px com círculo, botão primário. Entrada por caracteres back.inOut. Faixa laranja com tipografia128px máxima e loop contínuo. Coleção limitada1680px, imagens quadradas, gap36px (60px >=1440), offsets80px pares. Aplicar entrada de títulos e badge sem trocar conteúdo Traço.

## Galeria Vida — interações individuais

Reproduzir ações publicadas a-73 a a-80: offsets por card [0,7,5,5], [2,0,2,2], [-15,-8,0,10], [-10,-8,-10,0] em vw. Hover escala 1.1, rotação 0, 800ms back.out. Saída restaura escala e deslocamentos em 600ms; rotação usa ease. Limpar tweens e eventos ao desmontar.

## Transição após prêmios

Adicionar as cinco faixas decrescentes existentes no sistema, na cor #f9ebe4 da seção de prêmios, antes da galeria Vida no estúdio, conforme About da Ariyana.

## Cards da equipe — correção da posição final

Comparação visual com /about-us: cards entram sequencialmente de yPercent 100 e terminam em 0. A escada de 100/200/300px pertence às margens; grid usa stretch, não start. Preservar track 300vh, sticky 10%, scrub 0.8 e fluxo estático no mobile.

## About — fidelidade à página publicada da Ariyana

Reproduzir medidas, abertura por caracteres, contador em colunas, cartões que reduzem a largura durante a rolagem (sem deslocamento horizontal), equipe em estágio sticky com entrada sequencial, galeria com entrada e afastamento no hover, e preenchimento vertical dos prêmios. Desktop usa tracks de 300vh, sticky a 10%, scrub 0.8; até 991px as seções voltam ao fluxo normal. Manter conteúdo e recursos locais da Traço e avisos demonstrativos existentes. Validar /sobre em desktop e mobile, navegação e limpeza das animações.

Fidelidade integral da apresentação Ariyana: restaurar escala original do título (sem redução de 10%), largura máxima de 29ch, tracking -0,01em, margem superior de 40 px e inferior de 32 px. Container central de até 1680 px com 5% de respiro lateral; etiqueta em DM Sans 600/30 px e círculo de 28 px, com reduções responsivas da referência. Imagem de 350 px no desktop e 449 px a partir de 1920 px. Preservar conteúdo da Traço, nota demonstrativa, botão e revelação das palavras.

Redução visual aprovada do título de apresentação: diminuir o font-size em 10% em todas as telas, mantendo a largura proporcional já ajustada. No desktop de 1920 px, passar de 84 px para 75,6 px. Preservar conteúdo e animação.

Apresentação abaixo do hero: remover o teto fixo de 820 px da coluna. O título deve ocupar até 29ch com a mesma escala heading-medium da referência, sem alterar texto ou animação. Medir fonte e largura nas mesmas viewports para distinguir tamanho de fonte de quebra de linha.

Hero e rodapé: remover o botão WhatsApp do rodapé conforme solicitado. Igualar o subtítulo do hero à referência: 96 px a partir de 1920 px; manter 6vw no desktop menor, 8vw no tablet e 44 px no celular, como na Ariyana. Preservar texto, fontes e animação de entrada.

Isolamento dos caracteres animados: usar spans com classe própria, separados do ícone circular do CTA. O tamanho, o fundo e o arredondamento do ícone jamais devem alcançar as letras, inclusive durante o hover e navegação entre páginas. Comparar botão principal, secundário e CTA com a referência em repouso e em movimento.

Consistência dos botões: aplicar a troca de letras também aos CTAs de contato, WhatsApp e newsletter. CTA grande mantém a escala de 0,9 no hover e stagger de 0,6 s da referência. Preservar variantes de tamanho, ações de formulário e botões funcionais de menu, vídeo e acordeões.

## Botões e links do rodapé — referência Ariyana

Reproduzir as duas variantes: botão principal com Bebas Neue 24 px, traço de 25 px, borda de 2 px e pequenos recortes; variante secundária com DM Sans e espaçamento de 20 px. Letras duplicadas com troca vertical por caractere e tempos da referência. Rodapé usa duas linhas de texto com stagger de 0,2/0,3 s, sem reversão ao sair. Preservar destinos, conteúdo, paleta e revelação do rodapé. Oferecer o mesmo efeito por foco de teclado, movimento reduzido e limpeza ao desmontar.

# Traço — estudo conceitual

Entradas de todas as seções (09/10/2026): auditar todos os elementos, reproduzindo os alvos da Ariyana sem acrescentar fade genérico. Títulos: caracteres mascarados de -100% a 0, 1s, stagger total 0,5s, back.inOut. Parágrafos: 0,8s, atraso 0,2s, stagger total 0,4s, power3.out. Gatilho top 90%, uma execução por visita. Badges: opacity 0→1 e scale 0,5→1, 0,6s, back.out, após 1s. Depoimentos: cards de 100vw/40 graus, 1s, stagger 0,4s, back.out, top center, apenas acima de 991px. Preservar scrubs do estúdio, projetos, vídeo e círculo de fotos, assim como os elementos estáticos da referência. Sem mudanças em textos, cores, dimensões ou navegação. Movimento reduzido, SSR legível e limpeza nas rotas obrigatórios.

Organização híbrida autorizada: usar classes Tailwind com prefixo `tw:` para propriedades simples de layout, alinhamento, dimensões e espaçamentos fixos. Manter CSS por seção para composição fluida (clamp/calc), tipografia editorial, estados, seletores contextuais e efeitos de rolagem. Expor os tokens existentes ao tema Tailwind, sem duplicar cores. Comparar estilos calculados antes/depois e revisar largura/altura de telas variadas. Preservar funcionamento, conteúdo, navegação e animações ao corrigir problemas de responsividade.

Ambientes para viver: manter a sobreposição também em telas menores, com um respiro de rolagem entre os painéis (160–260 px conforme a altura visível). Painéis altos rolam até mostrar a parte inferior antes de fixar; só depois desse respiro o próximo ambiente começa a cobrir o anterior. Medir novamente quando conteúdo, menu ou viewport mudarem. No celular, reservar espaço abaixo do CTA para o WhatsApp flutuante. Manter leitura normal com movimento reduzido e sem JavaScript. Não reduzir ou ocultar descrições para fazer o botão caber.

Escala mais compacta aprovada: reduzir títulos da coleção e dos detalhes; limitar galerias a 1280 px e capa a 1120 px. Fotos de uso e detalhe em formato horizontal, com proporção 4:3 no celular. Recortes móveis dos projetos serão refeitos a partir dos originais para preservar mais contexto. Ajustar espaços verticais e tamanhos responsivos das imagens somente nas páginas de projetos.

Refinamento de clareza aprovado: submenu Ambientes somente na Home; Projetos identifica a coleção em todas as páginas. Categorias são os títulos dos cards, nomes dos estudos ficam em segundo plano. Fotos horizontais no desktop, retrato no celular, desnível discreto entre colunas. Detalhes mantêm apresentação, fotos e contato; próximo projeto vira navegação compacta, sem bloco promocional separado. Sem novas pastas, dependências ou alterações de rotas.

Página Projetos aprovada: coleção editorial de seis ambientes com páginas individuais, capas e três vistas de cada estudo. Galeria assimétrica, recortes responsivos WebP locais, transição compartilhada, contato e footer. Conteúdo identificado como estudo conceitual, sem dados de obras realizadas. Brief e estrutura em ../secoes/projetos.md.

Marca fictícia autorizada pelo usuário para portfólio de web design. Segmento: móveis planejados.
Direção: editorial arquitetônica, composição assimétrica, madeira natural, linhas técnicas.
Paleta vigente: marfim #F5F1EA predominante, azul-ardósia #27323A, bege quente #DCC5B7 e marrom terroso #897061. Branco #FFFFFF como apoio no FAQ. Fonte: Plus Jakarta Sans variável local.
Referência visual: segunda prancha aprovada para implementação exploratória.
Escopo: header compartilhado, submenu Ambientes, menu mobile e Home editorial.
Movimento: revelações discretas com Framer Motion; respeitar prefers-reduced-motion.
As imagens são estudos gerados por IA, não fotografias de trabalhos de uma empresa real.
Não há formulário de captação, número de telefone ou promessa comercial fictícia.

Revisão do rodapé: Instagram da Traço junto aos canais de contato, destino fornecido pelo usuário mantido em contact.ts. Crédito CREATED BY/VBG separado. Header com Contato e acesso à visão geral dos ambientes; menu compacto abaixo de 1200px.

Menu mobile: painel carvão com bordas de respiro, títulos editoriais em marfim, divisórias finas e CTA areia. Cabeçalho e contato persistem; somente a navegação interna rola. Submenu de ambientes em duas colunas com revelação suave. Desktop preservado.

Ambientes permanece na Home. O submenu usa acordeões com uma dúvida prática por ambiente, resposta curta, link para a seção e WhatsApp contextual. Estilos claros no desktop e carvão no mobile; somente um item aberto por menu.

Teste Serviços → Processo: em desktop com altura disponível, as seções ocupam o mesmo plano. O scroll vertical controla a entrada do Processo pela margem esquerda, cobrindo Serviços; ao subir, o movimento se inverte. Mobile, telas baixas e movimento reduzido preservam o fluxo vertical. Links internos usam marcadores no fluxo para chegar ao painel correto, e o foco de teclado revela o painel correspondente.

Simplificação dos CTAs: o bloco de materiais mantém apenas título e texto; no rodapé, WhatsApp concentra a ação de contato, sem repetir o telefone abaixo. Instagram recebe 20px de respiro acima.

Página Sobre (/sobre): adaptar a abertura da Home One de Archiesta à paleta marfim, carvão e cobre e à Plus Jakarta Sans existente. No desktop, texto à esquerda sai horizontalmente enquanto a imagem expande; apresentação breve sobre a imagem e composição final de três estudos visuais sobrepostos, com texto à direita e palavra NOSSO TRAÇO na base. Encerrar com o footer compartilhado. Mobile e movimento reduzido mantêm leitura vertical. Imagens geradas autorizadas pelo usuário, identificadas como estudos, em WebP com recortes desktop/tablet/mobile. Não inventar história, equipe ou projetos realizados.

Transição entre Home e Sobre: cortina marfim com marca e traçado em cobre, cobrindo a troca de rota antes de revelar a página. Navegação interna pelo App Router, preparação do destino e das âncoras sob a cortina. Links dentro da mesma página mantêm scroll suave. Movimento reduzido omite a cortina animada. Sem spinner genérico nem bloqueio prolongado.

Revisão aprovada — FAQ e paleta: FAQ independente depois do Estúdio e antes do
Contato, com as cinco perguntas e respostas já existentes sobre ambientes.
Título e introdução na coluna esquerda acompanham o scroll apenas dentro da
seção em desktop; perguntas à direita, todas fechadas e uma aberta por vez.
Mobile e telas baixas usam fluxo normal. Ambientes volta a links diretos.
A Home e Sobre usam a nova paleta: marrom nas aberturas, branco nas áreas de
leitura, bege nos blocos de contraste, azul-ardósia no footer e fundos escuros.
Textos pequenos sobre marrom usam branco para contraste. Cores oficiais dos
ícones de plataformas permanecem. As descrições anteriores registram o histórico.

Refinamento aprovado: marfim predominante nas áreas de leitura, header e
aberturas da Home e Sobre. Azul-ardósia nos textos, CTAs principais e footer;
bege no Processo, Contato e blocos de apoio. Marrom reservado a traçados e
detalhes, sem grandes fundos. FAQ permanece branco. Textos pequenos sobre
marfim usam azul-ardósia, pois o marrom original não oferece contraste 4,5:1
nesse fundo. Preservar tipografia, imagens e comportamento das animações.

Ajustes aprovados: amostra de material escura; final de Sobre bege separado do footer. Legendas descritivas dos materiais, sem aviso de geração na interface. Frase inicial da imagem em uma linha no desktop. Ícone Ambientes centralizado sem sublinhado; contato sem telefone repetido; voltar ao início circular com seta e nome acessível.

Abertura de Ambientes aprovada: fundo azul-ardósia #27323A apenas no bloco
da mensagem. Título revelado em marfim #F5F1EA, legenda e seta claras;
palavras ainda não reveladas em tom suave legível. Galeria preserva fundo
marfim e textos escuros. Movimento reduzido exibe o título inteiro em marfim.

Entrada inicial aprovada: reutilizar a cortina com marca e símbolo da navegação
na primeira abertura e ao recarregar. Revelar após preparar fonte e imagem
principal, com espera limitada e sem atraso mínimo artificial. Menus na mesma
página preservam scroll suave; movimento reduzido omite a entrada. Sem JavaScript,
a cortina deve desaparecer automaticamente e deixar o conteúdo acessível.

Ajuste aprovado — Serviços e Processo: preservar a entrada horizontal do Processo também em telas de desktop baixas e tablets a partir de 768px. No celular, manter a sobreposição vertical dos serviços independentemente da altura da tela. Imagem do acordeão limitada pela altura útil da viewport, com respiro para descrição e controles; preservar estado, interação e preferência de movimento reduzido.

Ajuste aprovado — abertura de Ambientes: manter o texto preso e a revelação por palavras também em viewports com altura até 650px. Ajustar tipografia, espaçamento e altura mínima pela altura útil. Somente a preferência de movimento reduzido exibe a mensagem inteira sem animação. Galeria e sobreposições permanecem.

Refinamento aprovado — fim do Processo: liberar a altura herdada de Serviços quando a entrada horizontal termina. Preservar o respiro normal abaixo do CTA e da legenda, sem prolongar o fundo bege por causa de uma seção já encoberta. Ao subir, Serviços volta a participar do palco para manter a reversão da animação.

Ajuste aprovado — texto sobre a imagem de Sobre: ampliar discretamente a tipografia da frase de apresentação, de clamp(25px, 2.6vw, 42px) para clamp(28px, 3vw, 48px), ampliando a largura de leitura proporcionalmente. Preservar contraste e animação.

Revisão solicitada — frase sobre a imagem de Sobre: o primeiro aumento ficou sutil. Ampliar para clamp(36px, 4vw, 64px), com largura de leitura até 1200px, mantendo as duas frases equilibradas e a animação existente.

Navegação aprovada: substituir O processo por Como funciona, Estúdio por Nosso olhar e Dúvidas por Perguntas frequentes. Aplicar a configuração compartilhada no header, menu mobile e rodapé; preservar os destinos das âncoras e a rolagem suave.

## Direção vigente — Ariyana Studio — revisão de 2026-10-08

Reproduzir rigorosamente a estrutura, proporções, fontes e interações de https://ariyana-studio.webflow.io/. Esta direção substitui as descrições visuais anteriores. O usuário autorizou alterar toda a apresentação, preservando a linguagem/stack do projeto e as fotos de ambientes. Em 2026-10-08 também autorizou conteúdo do Ariyana traduzido e identificado como demonstração.

Fontes locais Bebas Neue e DM Sans. Branco #fff, preto #121212, cinza #f0f0f0 e linho #e9dcd2, com cores de destaque da referência. Home: hero, apresentação e seis anos, processo com quatro cartões independentes sem fotos, quatro projetos em perspectiva, marcas e citação, quatro serviços, reel, círculo de fotos, quatro depoimentos, CTA duplo e footer. Histórico horizontal também no mobile; processos expostos em fluxo vertical no mobile. Menu completo em overlay. Sobre, Projetos e detalhes, Serviços, Contato, Blog/artigos e informações acompanham a referência.

Usar fotos de ambientes do próprio projeto. Recursos gráficos, retratos e marcas da referência apenas em blocos demonstrativos, com procedência documentada. Datas, métricas, clientes, equipe, premiações e depoimentos não devem ser apresentados como fatos da Traço. Vídeos aguardam envio; manter foto e indicação clara, sem botão de reprodução falso. Contato e newsletter demonstrativos, sem transmissão externa. Respeitar movimento reduzido, navegação por teclado e a arquitetura por seção. Inventário e revisão registrados na auditoria e nos outputs da conversa.
Revisão de 2026-10-08: vídeo local do reel recebido e integrado; marcas em grade de 22 colunas, sem curvas externas em Marcas/Serviços; barras após Serviços e antes do footer; marca do footer com degradê branco/preto e sem área branca no fim. Os quatro vídeos específicos de Serviços continuam pendentes.

Header Ariyana — 2026-10-08: reproduzir as proporções do header, círculos vazados e troca vertical dos rótulos. Menu ocupa a tela com marca em gradiente, faixa inclinada e links com preenchimento laranja. X de duas linhas: desktop a partir de 1440 px no topo (28/36 px), entre 992 e 1439 px à direita a 15% da base, tablet/celular no topo (16 px). Manter dialog nativo, Escape, retorno de foco e movimento reduzido.

Por dentro da Traço — 2026-10-08: título escurece palavra por palavra com scroll, conforme data-text-reveal do Ariyana. Opacidade 0,3→1, duração 0,5, intervalo 0,25, ease none, scrub 1,2; início top bottom e fim bottom center, com clamp. Reversível ao subir. Movimento reduzido e ausência de JavaScript mantêm título escuro e legível; nome acessível único. GSAP já instalado, sem nova dependência.

Transição Estúdio → Processo — 2026-10-08: espaço branco abaixo do histórico, como about_section do Ariyana. Aplicar padding-bottom com section-space (150/100/80/64 px), mantendo o arredondamento da seção Processo e as imagens existentes.

Correção em notebook — 2026-10-08: o histórico fixado passa a ter altura automática e altura mínima de viewport, incluindo o conteúdo real. ResizeObserver mede a faixa e ajusta o top para que painéis altos rolem até revelar as fotos antes de fixar. Preservar margem branca de section-space ao final, sem transbordamento das imagens sobre Processo.

Animações Ariyana — 2026-10-08: entrada inicial com marca em letras, cortina saindo em 1s a partir de 1,44s; foto expandindo em 1,5s a partir de 1,6s; título 2,57s, subtítulo 3,46s, descrição 4,06s, redes 4,89s e métrica 5,05s. Play Reel: progresso da entrada até bottom bottom, keyframes 32/42/60%, máscara 50vw×40vh→100vw×100vh, textos das bordas→±34vw, opacidade 0→1, suavização Webflow 90%. Líderes: giro 0→360° com suavização 85%, abertura em leque 1s, opacidade central 0,5→1 e órbita 1→0,8 ao hover desktop. Fotos da Traço preservadas; movimento reduzido e leitura sem JS preservados.

Correção de recarga por âncora — aguardar as fontes e a conclusão da cortina antes de posicionar a seção. Usar posicionamento instantâneo na restauração para evitar disputa com as animações de scroll durante o carregamento. Navegação por links continua suave.

Correção solicitada — a recarga da home sempre executa a cortina e inicializa a entrada do hero, inclusive com âncora ou posição restaurada. Líderes mantém o leque enquanto a seção está visível: gatilho usa a seção estável, e a saída não recolhe as imagens antes de elas deixarem a tela.

Líderes em notebook — altura mínima considera o diâmetro real da órbita (76vw mais 160px de respiro), não somente 150vh. Tablet/celular também acomodam as fotos e a legenda; legenda fica 32px acima da base. Evitar cortes na borda da seção e sobreposição com depoimentos.

# Header da Traço — efeitos da Ariyana (2026-10-09)

Detalhes de projeto — 2026-10-10: reproduzir a estrutura de Floral Botanical Matt Business Card: abertura 184/273px, capa de largura total 192/65, duas fotos 9/10 deslocadas, indicadores em h5 com contador vertical, segunda panorâmica 12/5, frase central em quatro linhas com máscara vinculada ao scroll, resultado rosado com texto e três imagens sticky (80px), fotos 81/70. Preservar conteúdo, recursos locais, navegação e identificação das métricas demonstrativas. Desativar movimento decorativo em reduced motion.

Auditoria dos artigos — 2026-10-10: comparar cabeçalho editorial de 1000px, título h4 sem limite em caracteres, espaçamento a partir do topo da página e imagem 12/5 (3/2 somente até 479px). Parágrafos 20px/1,5, citação em fonte display com borda preta de 2px. Preservar imagens e avisos demonstrativos, posicionando o aviso fora do cabeçalho para não alterar sua composição. Verificar os quatro títulos em desktop e celular.

Reproduzir a troca vertical de letras com atraso progressivo nos links do header e o giro do toggle de -45° para 0°, expandindo as duas linhas curtas até a largura da central. Manter a composição, links, abertura e fechamento do menu. Aplicar também ao foco de teclado e respeitar a preferência por movimento reduzido.

Cabeçalho dos artigos: data em DM Sans 600, 30px, com círculo preto de 28px e gap de 10px; título com tracking -0,01em e quebra equilibrada para evitar uma palavra isolada na última linha. Data responsiva de 24/20px, círculos 20/18px.
Detalhes em telas largas: aplicar contêiner máximo de 1680px a abertura, narrativa, dupla de fotos, indicadores e resultado. Capa e panorâmica continuam ocupando a largura completa. A confirmação anterior em 1536px não cobria esse limite.
Footer: substituir utilitários por Instagram da Traço com ícone, perfil no Google com letras nas cores da marca e cuidados com seus móveis. Por solicitação do usuário, os três itens são textos sem links enquanto os destinos não forem definidos.
Footer mobile: contato ocupa largura completa; duas colunas para navegação e projetos/artigos; informações em largura completa; divisórias entre blocos, textos sem links preservados e sem novo CTA. Manter fundo preto da Traço.
