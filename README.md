# Lúmen Óptica — Landing Page

Template para clínicas/óticas. Cliente demo: **Lúmen Óptica**.

## Stack
Bootstrap 5 (grid/utilitários, via CDN) + design system próprio em `css/`.
Three.js (via CDN) só para a lente 3D do hero — o resto é CSS/JS puro.

## Estrutura
```
oticas-lp/
├── index.html
├── .nojekyll
├── .gitignore
├── README.md
├── css/
│   ├── variables.css
│   ├── style.css
│   └── animations.css
└── js/
    ├── config.js
    ├── render.js
    ├── tilt3d.js
    ├── hero3d.js
    └── app.js
```

## Rodando localmente (VSCode)
1. Abra a pasta no VSCode.
2. Instale a extensão **Live Server**.
3. Botão direito em `index.html` → **Open with Live Server**.

Ou via terminal:
```bash
python -m http.server 5500
```

## Publicando no GitHub Pages
```bash
git init
git add .
git commit -m "feat: primeira versão da Lúmen Óptica"
git branch -M main
git remote add origin https://github.com/SEU-USUARIO/oticas-lp.git
git push -u origin main
```
Depois em **Settings → Pages → Source: Deploy from a branch → main / (root)**.
Site em `https://SEU-USUARIO.github.io/oticas-lp/`.

O `.nojekyll` impede o GitHub de processar o site com Jekyll.

## Como trocar de cliente
1. Edite `js/config.js` (nome, serviços, diferenciais, galeria, avaliações, contato).
2. Para nova paleta, mexa em `css/variables.css` (`--prism-1/2/3`, `--ink`, `--bg`, `--section-blue-*`).

## Acessibilidade
- Contraste AA sobre os azuis de seção
- `:focus-visible` com anel prismático
- `prefers-reduced-motion` respeitado em todas as animações