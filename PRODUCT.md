# Product

<!-- impeccable:product-schema 1 -->

## Platform

web

## Users

Marcas locales y retail (comercios, restaurantes, cafeterías, marcas de producto físico) que necesitan branding, empaque o identidad visual. Usuarios primarios: dueños de negocio o responsables de marca que evalúan al diseñador, entienden que el diseño es inversión y buscan a alguien directo, confiable y crafteado. Contactan principalmente por el formulario, email o teléfono.

## Product Purpose

Portafolio persona del diseñador gráfico que convierte visitantes en consultas de proyecto. El éxito es que el visitante decida contactar con un encargo claro. El sitio muestra quién es el diseñador, qué hace y cómo trabaja, en español y con tono directo.

## Positioning

Estudio unipersonal con identidad inspirada en el pulpo ("Tako"): ocho brazos, una idea, sin límites. Ofrece sistemas completos — identidad + empaque + editorial + dirección de arte + motion — no piezas sueltas. Diferencia real: proceso ágil y decisivo, pocas reuniones, decisiones que se quedan, y marcas con intención. Clientes: marcas locales y retail que cuidan los detalles.

## Operating Context

- Sitio web estático (HTML/CSS/JS), abierto desde navegador; español como idioma por defecto.
- Diseñador base remoto desde Guárico, Venezuela; atiende proyectos en cualquier lugar del mundo.
- Rango de proyecto típico contenido en el formulario: menos de $2.000 hasta más de $10.000.
- El visitante espera ver el trabajo casi de inmediato; la decisión se juega entre el portafolio visible y la facilidad para contactar.

## Capabilities and Constraints

- Servicios confirmados: identidad de marca, diseño de empaque, editorial y print, dirección de arte, motion y digital.
- Proceso confirmado de 4 pasos: descubrir, definir, diseñar, entregar.
- Sitio estático sin backend: el formulario de contacto es de demostración (no entrega datos reales; se debe conectar a email/WhatsApp en producción).
- Tecnología actual: HTML + CSS + JS con GSAP vía CDN; sin framework. El stack decide el proyecto existente, no este documento.
- Idiomas: sitio en español; capacidad de añadir otros idiomas sin cambiar la arquitectura.

## Brand Commitments

- Atribución principal: solo el nombre real del diseñador (Carlos Rodríguez). El nombre "Tako" queda fuera como presentación personal (decisión confirmada).
- Assets existentes: `assets/Isotipo_Tako.png` (isotipo pulpo), `assets/Logo_Original.png`, `assets/favicon-16x16.png`. Su uso final se redecide en la pasada de marca, no aquí.
- Idioma del sitio: español.
- Paleta de acentos elegida por el cliente (vínculo): violeta `#690FFF` y azul `#1181EE`, modo oscuro.
- Contacto oficial: carlosrodriguez8999@gmail.com · +58 424 327 3920 · Guárico, Venezuela.
- Redes sociales pendientes de definir (hoy con enlaces `#`).

## Evidence on Hand

- Assets de marca PNG en `assets/` (los tres listados arriba).
- Fondo oscuro y paleta violeta/azul ya implementados en `css/styles.css` (sistema de diseño heredado).
- Trabajo real de clientes en la sección de portafolio (6 piezas): Lamnah Investment (identidad, inmobiliaria), Glam (identidad, moda), Casco (empaque, producto), Tasas (empaque, café), Ormi (empaque, premium), Tech Talent (identidad, tecnología). Origen: archivos en `assets/` con copias optimizadas en `assets/work/`. Los nombres y categorías de estas piezas fueron confirmados por el cliente mediante los nombres de archivo.
- Las tarjetas del portafolio muestran solo la imagen y el nombre/etiquetas debajo; el cliente pidió no superponer el nombre sobre la imagen.
- Métricas confirmadas por el cliente para la sección de estadísticas: +6 años de experiencia, 90 proyectos entregados, 7 marcas creadas, 95% de satisfacción. Sin premios.
- Testimonios actuales en el sitio son ficticios/placeholder y NO deben presentarse como realidad en producción.
- No hay enlaces funcionales de redes sociales (aún `#`), ni casos de estudio redactados.

## Product Principles

1. El trabajo demuestra, la página solo facilita: el portafolio visible decide la consulta.
2. Directo y decisivo: el mensaje refleja pocas reuniones, claridad en el proceso y promesas que se cumplen.
3. Servir marcas locales y retail que valoran el oficio, hablando su idioma (español, sin tecnicismo vacío).
4. Sin afirmaciones inventadas: nada de testimonios, casos o cifras falsas presentados como reales.
5. La identidad personal (nombre real) precede a la marca decorativa.

## Accessibility & Inclusion

- Sin requisito de producto específico confirmado más allá de los estándares web básicos ya implementados (contraste, foco visible, `prefers-reduced-motion`).