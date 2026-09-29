# 7 Vidas

*Siete vidas en cada página.*

Creada por melitalove 📚 para melitalove · versión 1.1.0

7 Vidas es mi biblioteca personal: una app para registrar mis libros, mis lecturas y todo lo que cada libro me deja. Frida y Lina, mis gatas, me acompañan en cada pantalla.

## Qué hace

- **Guarida:** lo que estoy leyendo, avisos de préstamos, la frase del día y un cielo que suma una estrella por cada libro terminado (la dorada es la de Mai).
- **¿Qué leo ahora?:** Frida y Lina sortean un libro por leer, con filtro de ánimo (miedo o crecer).
- **Biblioteca:** portadas con mis fotos, filtros (físicos, leyendo, leídos, por leer, releídos) y colecciones automáticas por autor y estilo.
- **Agregar:** foto de portada, escaneo del código de barras o ISBN escrito, que completa título, autor, páginas y estilo.
- **Ficha del libro:** estado, progreso, relecturas, huellitas, velas de miedo, las siete vidas, frases, notas y edición.
- **Mi librero:** mi librero real ordenado por estilo y numerado de izquierda a derecha, con buscador por número.
- **Leer · Mi otra dimensión:** cronómetro con ronroneo, lluvia o bosque; al salir anoto la página y las vidas que me dio la lectura.
- **Mi ritmo:** promedios semanales y mensuales, constelación de vidas, autores más leídos y mi año lector, que cierra cada 3 de noviembre con un resumen.
- **Frases, Deseos y Préstamos.**
- **Ajustes:** español, inglés o italiano; modo noche o musgo; sonidos; respaldo e instalación.

## Archivos

```
index.html              la app completa
manifest.webmanifest    nombre, colores e íconos para instalarla
sw.js                   funcionamiento sin conexión
icons/                  ícono de siete estrellas en todos los tamaños
.nojekyll               evita que GitHub Pages procese los archivos
```

## Publicarla en GitHub Pages

1. En GitHub, crea un repositorio nuevo, por ejemplo `7vidas`.
2. Sube todos estos archivos respetando la carpeta `icons`.
3. Ve a **Settings → Pages**. En *Source* elige **Deploy from a branch**, rama **main**, carpeta **/ (root)** y guarda.
4. En uno o dos minutos la app queda en `https://TU-USUARIO.github.io/7vidas/`.

## Instalarla en el celular

- **Android (Chrome):** abre el link, menú ⋮ → **Instalar app**. También puedes usar el botón *Instalar en mi celular* en Ajustes.
- **iPhone (Safari):** abre el link, toca **Compartir** → **Agregar a inicio**.

## Mis datos

Todo se guarda en el propio celular (IndexedDB). No hay servidor ni cuentas. Cada teléfono o navegador tiene su propia biblioteca, así que:

- Exporta un respaldo de vez en cuando desde **Ajustes → Exportar datos y fotos**.
- Para pasar tu biblioteca a otro dispositivo, importa ese archivo en **Ajustes → Importar respaldo**.

El escaneo con cámara funciona en Chrome para Android. En iPhone se escribe el ISBN y la app busca los datos igual. La búsqueda por ISBN usa Google Books y Open Library, y necesita conexión.

## Actualizar

Cuando cambies `index.html`, sube también `sw.js` con un número de versión nuevo en la línea `VERSION`. La próxima vez que abras la app se actualizará sola.
