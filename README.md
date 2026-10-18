# Portafolio de Enzo Aldhair Fuentes Apaza

Página personal en español: desarrollo de software, investigación en IA, 14 proyectos, habilidades, formación y una sección personal. Incluye búsqueda y filtros, detalles de proyectos, animaciones al desplazarse, menú móvil y descarga del CV profesional de dos páginas.

## Subir a tu repositorio

1. Descomprime el ZIP.
2. Copia **el contenido** a la raíz de tu repositorio. `index.html` debe quedar directamente en la raíz, junto a `styles.css`, `personality.css`, `script.js` y la carpeta `assets`.
3. Guarda los cambios con un commit y súbelos a GitHub, o utiliza **Add file → Upload files** desde la página de tu repositorio. Sube los archivos descomprimidos; GitHub Pages no descomprime el ZIP.
4. Si utilizas GitHub Pages con publicación desde una rama, entra a **Settings → Pages** y selecciona **Deploy from a branch**, la rama correspondiente y la carpeta **/ (root)**.

Si tu repositorio ya utiliza un dominio propio, conserva su archivo `CNAME`. Si ya tiene un flujo de despliegue, consérvalo y ajusta su carpeta de publicación a la raíz cuando corresponda.

La página es estática: no requiere Node.js, npm, una API ni un proceso de compilación. Sus rutas relativas permiten alojarla tanto en un dominio propio como en una subcarpeta de GitHub Pages. `.nojekyll` permite servir directamente sus archivos estáticos.

## Abrir en tu computadora

Puedes abrir `index.html` en el navegador. Para comprobarla con un servidor local, ejecuta desde la carpeta del proyecto:

```bash
python -m http.server 5500
```

Luego abre `http://localhost:5500`. En Windows también puedes utilizar `py -m http.server 5500`.

## Editar el contenido

| Archivo | Contenido |
| --- | --- |
| `index.html` | Presentación, navegación, proyectos destacados, habilidades, formación, intereses y contacto. |
| `styles.css` | Diseño base y adaptación a pantallas pequeñas. |
| `personality.css` | Acentos azules, etiquetas y animaciones. |
| `projects.json` | Datos editables de los 14 proyectos: áreas, lenguajes, tecnologías, descripciones y enlaces. |
| `script.template.js` | Lógica del catálogo, filtros, búsqueda, ventanas de detalle y animaciones. |
| `script.js` | JavaScript listo para el navegador, con los datos de los proyectos incorporados. |
| `build_content.py` | Genera `script.js` y el catálogo Markdown a partir de los archivos editables. |
| `assets/` | Fotografía, fuente, emblema UCSP, favicon, CV y catálogo descargable. |

Después de modificar `projects.json` o `script.template.js`, ejecuta:

```bash
python build_content.py
```

Python 3 usa únicamente su biblioteca estándar. El resultado actualiza `script.js` y `assets/Proyectos_Enzo_Fuentes.md`. Las tarjetas destacadas de `index.html` se editan por separado. Para actualizar el CV, reemplaza `assets/CV_Enzo_Fuentes_Profesional.pdf` conservando su nombre.

## Contenido publicado

El paquete contiene los archivos de la página y su CV descargable. No incluye el historial Git, credenciales ni configuración de la plataforma donde se preparó la página. Los proyectos en desarrollo se identifican como tales. Las animaciones respetan la preferencia del sistema de reducir movimiento.
