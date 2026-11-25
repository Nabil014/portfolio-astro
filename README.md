# Nabil Allis — Portfolio

Portafolio personal de **Nabil Allis**, desarrollador Full Stack.
Disponible en español e inglés.

🔗 **Demo:** https://nabil-allis-portfolio.vercel.app/ · [English](https://nabil-allis-portfolio.vercel.app/en/)

## Tecnologías

- [Astro](https://astro.build/) (sitio estático)
- [Tailwind CSS](https://tailwindcss.com/)
- TypeScript
- Desplegado en [Vercel](https://vercel.com/)

## Secciones

- **Inicio** — presentación, redes y descarga del CV (ES / EN)
- **Experiencia** — línea de tiempo profesional
- **Proyectos** — selección de proyectos con demo
- **Contacto**

## Desarrollo local

```bash
npm install
npm run dev      # http://localhost:4321
npm run build    # genera ./dist
npm run preview  # sirve el build localmente
```

## Estructura

```text
public/cv/            CV en PDF (ES / EN)
src/components/       Componentes de cada sección
src/data/data.json    Experiencia y proyectos
src/i18n/             Textos traducidos (es / en)
src/layouts/          Layouts de página
src/pages/            Rutas: / (es), /en/ (en), 404
```

Para agregar un proyecto o una experiencia, editá `src/data/data.json`.
