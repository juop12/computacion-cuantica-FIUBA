# ⚛️ Página Web - Curso de Computación Cuántica

[![Netlify Status](https://api.netlify.com/api/v1/badges/9c5f5d07-de35-4cbd-9417-4d8035560815/deploy-status)](https://app.netlify.com/projects/computacion-cuantica-fiuba/deploys)

Este repositorio contiene el código fuente de la página web oficial de la materia **Computación Cuántica**, Facultad de Ingeniería, Universidad de Buenos Aires.  
El sitio está construido con **Astro**, un framework moderno para generar sitios estáticos rápidos, simples y fáciles de mantener.


## 📖 Contenido de la página

- [ ] Información general del curso
- [ ] Cronograma y calendario de clases
- [ ] Bibliografía recomendada
- [ ] Apuntes y material de lectura
- [ ] Ejercicios y prácticas
- [ ] Sección de noticias y eventos (conferencias, hackathons, novedades en el área)


## 🛠️ Tecnologías utilizadas

- **[Astro](https://astro.build/)** → framework base
- **TypeScript** → tipado opcional y robusto
- **TailwindCSS** → utilidades para estilos rápidos y consistentes
- **ESLint** → análisis estático de código
- **Netlify** → hosting y despliegue continuo


## 🚀 Instalación y desarrollo local

1. Clona este repositorio:
   ```bash
   git clone https://github.com/usuario/WebPageCompuCuantica.git
   cd WebPageCompuCuantica
   ```

2. Instala las dependencias:
   ```bash
   npm install
   ```

3. Levanta el servidor de desarrollo:
   ```bash
   npm run dev
   ```

4. Abre en tu navegador:
   ```
   http://localhost:4321
   ```


## 📦 Construcción para producción

```bash
npm run build
```

Los archivos generados quedarán en la carpeta `dist/`.

Para previsualizar:
```bash
npm run preview
```


## 📂 Estructura de carpetas

```bash
WebPageCompuCuantica/
├── public/                # Archivos estáticos (imágenes, íconos, etc.)
├── src/
│   ├── components/        # Componentes reutilizables (NavBar, Footer, etc.)
│   ├── layouts/           # Layouts principales del sitio
│   ├── pages/             # Páginas del sitio (index.astro, about.astro, etc.)
│   ├── styles/            # Archivos CSS o Tailwind adicionales
│   └── assets/            # Markdown o colecciones de contenido
├── astro.config.mjs       # Configuración de Astro
├── eslint.config.cjs      # Configuración de ESLint
├── package.json           # Dependencias y scripts
└── tsconfig.json          # Configuración de TypeScript
└── vitest.config.ts       # Configuración de Vitest para unit testing
```


## 🧩 Convenciones del proyecto

- Código escrito en **TypeScript**.
- Estilos con **TailwindCSS**.
- **ESLint** configurado para mantener buenas prácticas.


## 📚 Futuras expansiones

- Integración con un blog de noticias usando **Markdown**.
- Buscador interno de apuntes y ejercicios.
- Sistema de tags para eventos y conferencias.
- Posibilidad de internacionalización (i18n) para inglés/español.


## 👨‍🏫 Autor

Curso de **Computación Cuántica**  
Developer: *[Julián Melmer Stiefkens]*
