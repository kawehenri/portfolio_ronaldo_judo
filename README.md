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

### Domínio próprio — ronaldojudo.site

O arquivo `public/CNAME` já contém o domínio. Após o deploy:

**1. GitHub (repositório `portfolio_ronaldo_judo`)**

1. Acesse [Settings → Pages](https://github.com/kawehenri/portfolio_ronaldo_judo/settings/pages)
2. Em **Custom domain**, digite: `ronaldojudo.site`
3. Salve e aguarde a verificação DNS (pode levar até 24h, geralmente minutos)
4. Quando aparecer, marque **Enforce HTTPS**

**2. Hostinger (DNS)**

No hPanel: **Domínios** → **ronaldojudo.site** → **DNS / Zona DNS**

Remova registros conflitantes do tipo `@` (A ou CNAME antigos) e adicione **4 registros A**:

| Tipo | Nome | Valor | TTL |
|------|------|-------|-----|
| A | @ | `185.199.108.153` | 14400 |
| A | @ | `185.199.109.153` | 14400 |
| A | @ | `185.199.110.153` | 14400 |
| A | @ | `185.199.111.153` | 14400 |

Opcional (IPv6) — registros **AAAA** com `@`:

- `2606:50c0:8000::153`
- `2606:50c0:8001::153`
- `2606:50c0:8002::153`
- `2606:50c0:8003::153`

**3. Testar**

Após propagar o DNS, acesse: **https://ronaldojudo.site**

Site antigo (subpath): `https://kawehenri.github.io/portfolio_ronaldo_judo/` — deixa de ser o endereço principal após o domínio ativo.

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
