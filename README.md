# Fronted

Pequeña aplicación interactiva construida con **Svelte**. Muestra una cara sonriente,
un texto (guión de la historia) y botones que, al pulsarlos, avanzan la historia y
suman puntos de "felicidad".

## Demo

[Ver demo de la aplicación](https://drive.google.com/file/d/1vkonMr0FQD-gHDOcSn6zeq_K_e2hY-Bn/view?usp=sharing)
## Estructura del proyecto

```
.
├── index.html        # Punto de entrada HTML (carga normalize.css, index.css y el bundle)
├── index.js          # Crea la instancia de App y la monta en document.body
├── App.svelte        # Componente raíz: orquesta la historia, el score y los subcomponentes
├── Container.svelte  # Contenedor de pantalla completa que centra el contenido
├── Header.svelte     # Cabecera decorativa con el logo de Svelte
├── Face.svelte       # Cara/expresión renderizada según un índice
├── Buttons.svelte    # Renderiza botones y despacha el evento `click` con un `value`
├── normalize.css     # Reset de estilos base
├── index.css         # Estilos globales del proyecto (requerido por index.html)
└── story.js          # Datos de la historia: array de { smileySays, buttons } (requerido por App.svelte)
```

## Componentes

- **App.svelte**: mantiene el estado `storyIndex`, `happyScore` y `showHeader`.
  Lee el texto y los botones del paso actual de `story` y los pasa a sus hijos.
- **Face.svelte**: recibe `index` y `size`, y muestra una de las expresiones
  `['=)', '=|', '>:(']`.
- **Buttons.svelte**: dibuja un botón por cada entrada de `buttons` y emite un
  evento `click` con `{ value }` al pulsarlo.
- **Container.svelte**: envoltorio a pantalla completa con borde y centrado flex.
- **Header.svelte**: cabecera con logos de Svelte (se muestra si `showHeader` es `true`).

## Requisitos previos

- [Node.js](https://nodejs.org/) (recomendado LTS)
- Un empaquetador compatible con Svelte (p. ej. [Rollup](https://rollupjs.org/)
  o [Vite](https://vitejs.dev/)). El `index.html` espera un bundle generado en
  `index.pack.js`.

## Puesta en marcha

1. Instala las dependencias (incluye `svelte` y el empaquetador elegido):

   ```bash
   npm install
   ```

2. Construye el proyecto para generar `index.pack.js` (ajusta el script a tu
   empaquetador):

   ```bash
   npm run build
   ```

3. Abre `index.html` en el navegador (o sirve la carpeta con un servidor estático):

   ```bash
   npx serve .
   ```

## Notas

- `index.html` enlaza `index.css`, que debe contener los estilos globales.
- `App.svelte` importa `./story`; crea `story.js` exportando un array de objetos
  con la forma:

  ```js
  export default [
    {
      smileySays: '¿Cómo estás hoy?',
      buttons: [
        { text: 'Bien 🙂', value: 1 },
        { text: 'Mal 🙁', value: -1 }
      ]
    }
    // ...más pasos
  ];
  ```
