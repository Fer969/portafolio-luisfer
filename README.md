# Portafolio · Luisfer Fuentes Montoya

Sitio web profesional para desarrollador Full Stack. Diseño oscuro, minimalista y responsive. Construido con **React** y **Vite**.

## Objetivo

- Atraer clientes freelance y reclutadores
- Mostrar experiencia real en entorno empresarial
- Posicionarse como desarrollador backend y full stack competente

## Stack del sitio

- React 18
- Vite 5
- CSS (sin frameworks; diseño a medida)

## Estructura de carpetas

```
portafolio-luisfer/
├── public/                 # Assets estáticos
│   └── favicon.svg
├── src/
│   ├── components/         # Componentes por sección
│   │   ├── Header.jsx      # Navegación principal (escritorio + móvil)
│   │   ├── Header.css
│   │   ├── Hero.jsx        # Portada: nombre, título, stack, CTA
│   │   ├── Hero.css
│   │   ├── About.jsx       # Sobre mí
│   │   ├── About.css
│   │   ├── Experience.jsx  # Experiencia profesional (PISCIMAYAS)
│   │   ├── Experience.css
│   │   ├── Projects.jsx    # Proyectos (3 tarjetas)
│   │   ├── Projects.css
│   │   ├── TechStack.jsx   # Stack tecnológico (Backend, Frontend, Herramientas)
│   │   ├── TechStack.css
│   │   ├── Contact.jsx     # Email, LinkedIn, GitHub
│   │   └── Contact.css
│   ├── data/
│   │   └── content.js      # Contenido centralizado (textos, enlaces, stack)
│   ├── App.jsx             # Composición de secciones + footer
│   ├── main.jsx            # Entrada de React
│   └── index.css           # Estilos globales, variables CSS, tema oscuro
├── index.html
├── vite.config.js
├── package.json
├── vercel.json             # Configuración para deploy en Vercel
└── README.md
```

### Descripción de la estructura

- **`src/components/`**: Cada sección del portafolio es un componente con su propio archivo CSS. Nombres en inglés para el código; el contenido visible está en español en `content.js`.
- **`src/data/content.js`**: Todos los textos, enlaces (email, LinkedIn, GitHub) y listas (stack, proyectos) en un solo archivo. Facilita actualizar el contenido sin tocar la lógica de los componentes.
- **`src/index.css`**: Variables CSS (colores, tipografía, espaciado), reset suave, estilos del footer y utilidad `.reveal` para animaciones de entrada al hacer scroll.
- **Animaciones**: Se usa `IntersectionObserver` en cada sección para añadir la clase `visible` a los elementos con clase `reveal`, produciendo una aparición suave al entrar en viewport.

## Cómo editar el contenido

1. **Datos personales y enlaces**: Edita `src/data/content.js`.
   - `contact.email`, `contact.linkedin`, `contact.github` con tus datos reales.
   - Ajusta textos de `hero`, `about`, `experience`, `projects` y `techStack` si lo necesitas.

2. **SEO y título**: En `index.html` puedes cambiar el `<title>` y la meta `description`.

## Desarrollo local

```bash
npm install
npm run dev
```

Abre [http://localhost:5173](http://localhost:5173).

## Build

```bash
npm run build
```

La salida queda en la carpeta `dist/`.

## Deploy en Vercel

1. Sube el proyecto a un repositorio en GitHub (o conecta tu repo en Vercel).
2. En [vercel.com](https://vercel.com), importa el repositorio.
3. Vercel detectará Vite por defecto. El `vercel.json` incluido define:
   - `buildCommand`: `npm run build`
   - `outputDirectory`: `dist`
   - `framework`: `vite`
4. Despliega. No hace falta configuración adicional.

Si prefieres usar la CLI:

```bash
npm i -g vercel
vercel
```

Sigue los pasos y, cuando pregunte por el directorio de build, usa `dist` (ya indicado en `vercel.json`).

## Diseño

- **Tema**: Oscuro, con acento en azul (`--accent`).
- **Tipografía**: DM Sans (texto), JetBrains Mono (código/stack).
- **Responsive**: Breakpoint principal en 768px para el menú móvil; grids y espaciados con `clamp()` y `min()` para adaptación fluida.
- **Animaciones**: Solo entradas al scroll (reveal); sin efectos llamativos para mantener un aspecto profesional.

---

Luisfer Fuentes Montoya · Desarrollador Web Full Stack
