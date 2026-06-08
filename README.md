# Portfólio Ronaldo — Atleta de Judô

Site institucional profissional para o atleta de judô Ronaldo, da Academia Corpo Arte (Brasília).

## Tecnologias

- React + Vite + TypeScript
- Tailwind CSS v4
- Framer Motion
- React Icons
- React Helmet Async (SEO)
- GitHub Pages

## Desenvolvimento local

```bash
npm install
npm run dev
```

Acesse `http://localhost:5173`

## Editar conteúdo

Os dados do atleta estão em `src/data/`:

| Arquivo | Conteúdo |
|---------|----------|
| `athlete.json` | Perfil, bio, contato, metas |
| `statistics.json` | Números (medalhas, competições) |
| `competitions.json` | Tabela de resultados |
| `timeline.json` | Linha do tempo |
| `achievements.json` | Cards de conquistas |
| `gallery.json` | Galeria de fotos |
| `sponsors.json` | Patrocinadores |

### Adicionar ou atualizar fotos

1. Coloque as imagens nas pastas de mídia do projeto (ex.: `fotos_de_perfil`, `imagens_campeonatobrasileiro2025_joaopessoa`)
2. Execute a conversão para WebP:

```bash
npm run images
```

Isso converte todas as imagens para `public/media/` em WebP e regenera `src/data/media-manifest.json`, `gallery.json` e demais referências.

3. Ajuste categorias em `scripts/convert-images.mjs` se necessário

### Currículo PDF

O botão **Currículo PDF** abre a página `/curriculo` — currículo esportivo resumido, otimizado para ATS e leitura por IA. Use **Salvar como PDF** no navegador para exportar.

Para alterar o fundo escuro do hero, edite `heroBackground` em `src/data/images.json`.

## Deploy no GitHub Pages

### Opção 1 — GitHub Actions (recomendado)

1. Crie um repositório no GitHub
2. Faça push do código para a branch `main`
3. Em Settings → Pages, selecione **GitHub Actions** como source
4. O workflow em `.github/workflows/deploy.yml` fará o deploy automaticamente

### Opção 2 — Manual

```bash
npm run deploy
```

### Ajustar base path

Se o repositório tiver outro nome, altere em `vite.config.ts`:

```ts
base: '/nome-do-repositorio/'
```

### Domínio próprio

Crie `public/CNAME` com seu domínio:

```
www.seudominio.com.br
```

## Build de produção

```bash
npm run build
npm run preview
```

Para simular o path do GitHub Pages:

```bash
# Windows PowerShell
$env:GITHUB_PAGES='true'; npm run build
```
