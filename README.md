# Portfólio — Samuel Alencar

Portfólio profissional com Next.js (App Router), TypeScript e CSS. Apresenta trajetória, projetos, formação e contatos de Samuel Alencar.

## Executar

Com Node.js 20.9 ou superior e npm:

```bash
npm install
npm run dev
```

Abra o endereço informado pelo terminal, normalmente http://localhost:3000. Se essa porta estiver ocupada, o Next.js escolhe a próxima disponível.

## Verificar e compilar

```bash
npm run build
npm run typecheck
```

Após a compilação, `npm start` executa a versão de produção.

## Personalizar o conteúdo

- `app/data/portfolio.ts`: contatos, experiências, formação, cursos e habilidades.
- `app/data/projects.ts`: descrição, categoria, tecnologias, imagem e link de cada projeto.
- `app/page.tsx`: organização das seções e textos de apresentação.
- `app/globals.css`: cores, temas, animações e layouts responsivos.
- `app/layout.tsx`: título, descrição, idioma e fonte local.
- `public/curriculo-samuel-alencar.pdf`: currículo disponibilizado para download.
- `public/projects/`: capturas dos projetos, usadas pelo componente `next/image`.
- `public/fonts/`: arquivos locais da fonte Manrope e licença.
- `app/icon.svg`: ícone do site.

## Componentes interativos

Em `app/components/`:

- `navigation.tsx`: navegação, indicação da seção ativa, menu móvel e tema persistido no navegador.
- `interactive-orbit.tsx`: tecnologias clicáveis e cartão com inclinação suave ao mover o mouse.
- `project-gallery.tsx`: filtros por categoria, expansão da lista e detalhes em um `dialog` nativo.
- `skills.tsx`: seleção de categorias de habilidades.
- `contact-actions.tsx`: cópia do e-mail com confirmação ou mensagem de erro.
- `scroll-effects.tsx`: entrada de seções na tela e progresso de rolagem.
- `ui-icon.tsx`: pequenos ícones SVG compartilhados.

A página principal continua sendo um componente de servidor; `"use client"` é usado nos componentes que precisam de estado, eventos ou APIs do navegador. A experiência e os cursos usam elementos nativos `details` e `summary`.

As animações respeitam `prefers-reduced-motion`. O conteúdo permanece visível sem animações. Os modais oferecem fechamento com Escape, foco contido e retorno ao botão de origem. Não há bibliotecas adicionais de animação ou de componentes.

## Fontes do conteúdo

- Currículo `CV (2).pdf` fornecido pelo autor, com cargos, datas, formação e contatos.
- [Portfólio de referência](https://samuel-alencar-ten.vercel.app/), consultado em 17/09/2026, para descrições e capturas dos projetos.
- “14+ anos em desenvolvimento” usa janeiro de 2012 como início da atuação profissional em desenvolvimento. As seis empresas são contadas sem duplicar os dois cargos na Tok&Stok.
- Projetos sem captura no portfólio original usam composições identificadas como ilustrativas. Links que apontavam incorretamente para outra empresa foram omitidos; os detalhes continuam disponíveis no próprio portfólio.

O contato funciona por links de e-mail, LinkedIn e WhatsApp. Não há formulário ou serviço de envio de mensagens no servidor.

Referência técnica: [documentação do Next.js](https://nextjs.org/docs/app/getting-started).
