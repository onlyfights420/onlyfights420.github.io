# onlyfights420.github.io

El sitio de **4-20 Systems** en [onlyfights420.github.io](https://onlyfights420.github.io): una terminal con estética de máquina *arcade* que presenta los proyectos (RetroFightersTV, su galería y RetaBot) y los enlaces del canal. Las guías para colaborar (WSL, Git, Claude Code, OpenSpec y las *skills*) están en la [wiki](https://github.com/onlyfights420/onlyfights420.github.io/wiki).

## Estructura

```text
index.html           # la página; contenido de respaldo para quien no tiene JavaScript
assets/css/style.css # estilos: pantalla con líneas de barrido, botones y diseño adaptable
assets/js/script.js  # la sesión de terminal que se escribe sola (SESSION)
```

Sin dependencias ni compilación: solo las fuentes Press Start 2P y VT323 de Google Fonts. GitHub Pages publica `main` tal cual.

## Probar en local

```bash
python3 -m http.server 8000
# abre http://localhost:8000
```

Revisa también el ancho de un celular (360 px) y con «reducir movimiento» activado, que muestra la sesión completa sin animación.

## Cambiar el contenido

Los textos de la terminal están en `SESSION`, en `assets/js/script.js`; los botones y el pie, en `index.html`. Si cambias un proyecto, cambia también el contenido de respaldo del `<noscript>`.

- Press Start 2P no tiene acentos: los textos con esa fuente (título, lema y botones) van en mayúsculas sin acentos.
- **Es un sitio público:** nada de infraestructura (IP, nombres de máquinas, repositorios privados) ni datos de usuarios.

## Contribuir

Ver la guía general de [4-20 Systems](https://github.com/onlyfights420/.github/blob/main/CONTRIBUTING.md).

## Licencia

Código con licencia MIT; ver [LICENSE](./LICENSE). Los juegos y sus personajes pertenecen a sus dueños.

---

*Copyright © 2026 4-20 Systems.*
