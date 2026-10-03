# romangaelvarela.online

El código de mi sitio personal: [romangaelvarela.online](https://romangaelvarela.online).

*Source of my personal site: album cover portfolio, web and game projects, and a contact flow that ends in WhatsApp. Plain HTML, CSS and JS, no build step.*

## Qué es

Es mi portfolio y la puerta de entrada para quien quiere trabajar conmigo. Ahí están las portadas que hice para artistas de la escena urbana, los sitios y apps que programé y mis juegos de la facu. Todo lleva a lo mismo: que me escribas por WhatsApp.

## Qué hay en el repo

```
index.html          home: portadas, servicios, proyectos, proceso y contacto
portfolio/          galería 3D de portadas
proyectos/          demos de clientes (High Up, Salvaescaleras)
docs/               documentos de mis juegos (Galactic Defenders, Bananarang)
css/                estilos
images/             portadas en webp, thumbs y avatares
.htaccess           HTTPS, headers de seguridad y caché para Hostinger
sitemap.xml         SEO
```

## Cómo está hecho

- HTML, CSS y JavaScript a mano, sin frameworks ni build. Se sube tal cual al `public_html`.
- Imágenes en webp con miniaturas aparte, para que cargue rápido desde el celular.
- El formulario de contacto no manda mails: arma el mensaje y lo abre en WhatsApp.
- Accesible: skip link, foco visible, respeta `prefers-reduced-motion` y las portadas tienen texto alternativo.
- Colores de marca: negro, rojo `#E30000` y blanco.

## Verlo en local

Abrí `index.html` en el navegador, o levantá un server simple:

```bash
npx serve .
```

Los originales en alta de las portadas no están en el repo porque pesan más de 500 MB. Las versiones webp que usa el sitio sí están.

---

Roman Gael Varela (RGV) · [WhatsApp](https://wa.me/5491136072305) · [Instagram](https://instagram.com/Romanvarela27)
