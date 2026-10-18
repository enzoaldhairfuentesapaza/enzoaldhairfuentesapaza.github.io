# Proyectos de Enzo Aldhair Fuentes Apaza

Catálogo profesional · Actualizado el 11 de octubre de 2026

GitHub: https://github.com/enzoaldhairfuentesapaza

Los estados de despliegue indicados corresponden a la información de Enzo. Las descripciones se contrastaron con los README y, cuando fue necesario, con archivos de los repositorios.

## 1. DH & DM Maquinarias

Plataforma comercial para maquinaria pesada y repuestos, con catálogo público, solicitudes de cotización y panel de administración.

Integra cuentas de cliente, contenido editable, promociones, cotizaciones, generación de PDF, importación y exportación de Excel, y accesos diferenciados por rol. El frontend usa React y TypeScript; el backend, una API PHP con MySQL/MariaDB en producción.

**Áreas:** Desarrollo web, Software empresarial, Bases de datos.
**Lenguajes:** TypeScript, JavaScript, PHP, SQL, HTML, CSS.
**Tecnologías o conceptos:** React, TypeScript, Vite, PHP, MySQL.
**Tipo:** Proyecto para cliente. **Estado:** En producción.
**Repositorio:** https://github.com/enzoaldhairfuentesapaza/DH-DM-Maquinarias-Web
**Aplicación:** https://www.dh-dm-maquinarias.com/
**Nota:** Despliegue indicado por Enzo. La disponibilidad del hosting no se comprobó en esta revisión.

## 2. XAI en segmentación MRI 3D

Evaluación comparativa de Grad-CAM 3D y LIME 3D para interpretar una 3D U-Net de segmentación de tumores cerebrales con BraTS2020.

Compara fidelidad, infidelidad, AUC Deletion/Insertion y tiempo de cómputo. En 20 muestras, Grad-CAM obtuvo fidelidad Spearman 0.74 y un tiempo medio de 12.42 s; LIME 3D, 0.48 y 464.54 s. Son resultados de este experimento académico, no una validación clínica.

**Áreas:** IA explicable (XAI), Deep Learning, Visión por computador.
**Lenguajes:** Python.
**Tecnologías o conceptos:** Python, PyTorch, 3D U-Net, Grad-CAM, LIME.
**Tipo:** Investigación académica. **Estado:** Experimento académico.
**Repositorio:** https://github.com/enzoaldhairfuentesapaza/Implementacion-de-metodos-post-hoc-de-interpretabilidad-en-la-segmentacion-3D-de-tumores-cerebrales
**Nota:** Las métricas proceden del README del proyecto.

## 3. Sistema de Almacenamiento Inteligente

Sistema de gestión empresarial con inventario, Kardex, compras, ventas, clientes, proveedores, sedes y roles configurables.

Cada empresa dispone de una instalación independiente. Incluye importación y exportación, estadísticas, auditoría, constancias internas y una base para pronósticos y consultas mediante LLM. La IA requiere un proveedor configurado y los pronósticos, historial y evaluación temporal; ambas áreas siguen en desarrollo.

**Áreas:** Software empresarial, Bases de datos, Analítica.
**Lenguajes:** Python, TypeScript, SQL, HTML, CSS.
**Tecnologías o conceptos:** FastAPI, React, PostgreSQL, Docker.
**Tipo:** Sistema empresarial. **Estado:** En desarrollo.
**Repositorio:** https://github.com/enzoaldhairfuentesapaza/Sistema-almacenamiento-inteligente
**Nota:** Versión documentada en el repositorio: 0.2.2.

## 4. Repositorio de planes de trabajo CEDHI

Repositorio institucional para centralizar y consultar documentos y planes de trabajo, con búsquedas y accesos por usuario.

Desarrollado para CEDHI. El código permite consultar documentos mediante búsqueda de texto en MySQL y adaptar la interfaz según el rol de la sesión. Incluye módulos de administración y archivos.

**Áreas:** Sistemas de información, Bases de datos, Desarrollo web.
**Lenguajes:** PHP, JavaScript, SQL, HTML, CSS.
**Tecnologías o conceptos:** PHP, MySQL, Bootstrap, JavaScript.
**Tipo:** Proyecto institucional. **Estado:** Desplegado.
**Repositorio:** https://github.com/enzoaldhairfuentesapaza/Repositorio-de-Planes-de-Trabajo-CEDHI
**Nota:** Despliegue indicado por Enzo; falta el enlace público de la instalación.

## 5. Cotizador web HDM Maquinarias

Generación de cotizaciones de repuestos y maquinaria con autocompletado, reglas por marca, descuentos y conversión PEN/USD.

Permite registrar al cliente, editar los productos, ajustar precios y generar un PDF con vista previa. El historial se almacena en Supabase y permite recuperar cotizaciones anteriores.

**Áreas:** Automatización comercial, Desarrollo web.
**Lenguajes:** JavaScript, HTML, CSS.
**Tecnologías o conceptos:** JavaScript, HTML/CSS, Supabase, jsPDF.
**Tipo:** Herramienta comercial. **Estado:** Desplegado.
**Repositorio:** https://github.com/enzoaldhairfuentesapaza/Sistema-Web-de-Cotizaciones-HDM-Maquinarias
**Aplicación:** https://sage-swan-19bb56.netlify.app/
**Nota:** Despliegue indicado por Enzo. La disponibilidad del hosting no se comprobó en esta revisión.

## 6. Calculadora de cotizaciones HDM

Aplicación para calcular cotizaciones paso a paso: moneda, ajustes por marca y descuentos encadenados.

La interfaz divide el cálculo en tres pasos y conserva un historial de las operaciones mientras la aplicación está abierta. El README documenta la generación de un APK para Android y señala que el historial aún no tiene persistencia local al cerrar la app.

**Áreas:** Desarrollo móvil, Software empresarial.
**Lenguajes:** Dart.
**Tecnologías o conceptos:** Flutter, Dart.
**Tipo:** Aplicación móvil. **Estado:** Desplegado.
**Repositorio:** https://github.com/enzoaldhairfuentesapaza/APP-Calculadora-Cotizaciones-HDM
**Nota:** Despliegue indicado por Enzo; falta el enlace de descarga o demostración.

## 7. DistributedNeuralNetUDP

Retropropagación distribuida entre un maestro y diez trabajadores mediante un protocolo propio de transferencia fiable sobre UDP.

El maestro ejecuta el forward pass, distribuye las particiones y promedia los gradientes de los trabajadores y de su propia partición. La comunicación usa Go-Back-N, ACK acumulativos, retransmisiones y CRC32. Proyecto en equipo con Iván Sardón, Dayanna Vizcarra y Brandon Díaz.

**Áreas:** Sistemas distribuidos, Redes, Machine Learning.
**Lenguajes:** Python, C++.
**Tecnologías o conceptos:** Python, C++, UDP, pybind11.
**Tipo:** Proyecto académico en equipo. **Estado:** Proyecto académico.
**Repositorio:** https://github.com/enzoaldhairfuentesapaza/DistributedNeuralNetUDP
**Nota:** La contribución individual de cada integrante no está detallada en el README.

## 8. PlanetHunter-AI

Clasificación de exoplanetas como confirmados, candidatos o falsos positivos a partir de datos públicos de la NASA.

Utiliza Random Forest y trece variables seleccionadas, con preprocesamiento e imputación de datos. El README plantea una interfaz web y actualizaciones periódicas como trabajo futuro; no se presentan aquí como funciones ya desplegadas.

**Áreas:** Machine Learning, Ciencia de datos, Astronomía.
**Lenguajes:** Python.
**Tecnologías o conceptos:** Python, Random Forest, Datos NASA.
**Tipo:** Aprendizaje automático. **Estado:** Proyecto académico.
**Repositorio:** https://github.com/enzoaldhairfuentesapaza/PlanetHunter-AI

## 9. E-commerce Full Stack Challenge

Proyecto de retos para evaluar habilidades full stack mediante flujos de un comercio electrónico.

El repositorio documenta animación al añadir al carrito, confirmación y detalle de pedidos, paginación, persistencia del carrito, búsqueda, filtros y ordenamiento. Incluye documentación por reto y evidencia en video.

**Áreas:** Desarrollo full stack, Software, Evaluación técnica.
**Lenguajes:** Python, JavaScript, SQL, HTML, CSS.
**Tecnologías o conceptos:** React, FastAPI, PostgreSQL, Docker.
**Tipo:** Retos y evaluación técnica. **Estado:** Proyecto técnico.
**Repositorio:** https://github.com/enzoaldhairfuentesapaza/Ecommerce-fullstack-React-Vite-

## 10. Videoclip Insanity en OpenGL

Recreación de un videoclip mediante escenas 3D, animaciones, cámaras y shaders personalizados.

Proyecto del curso de Computación Gráfica en la UCSP. Explora el pipeline programable de OpenGL, transformaciones geométricas, iluminación, materiales y animaciones temporizadas.

**Áreas:** Computación gráfica, Animación 3D.
**Lenguajes:** C++, GLSL.
**Tecnologías o conceptos:** C++, OpenGL, GLSL.
**Tipo:** Computación gráfica. **Estado:** Proyecto académico.
**Repositorio:** https://github.com/enzoaldhairfuentesapaza/VideoClip-en-OpenGL

## 11. LPGuitarHero

Juego rítmico inspirado en Guitar Hero con un backend funcional en Clojure y una interfaz web.

Utiliza un servidor HTTP y comunicación WebSocket para conectar el juego con el navegador. El proyecto combina programación funcional, estado de juego y una experiencia musical interactiva.

**Áreas:** Programación funcional, Videojuegos.
**Lenguajes:** Clojure, JavaScript, HTML, CSS.
**Tecnologías o conceptos:** Clojure, JVM, WebSocket, HTML/JavaScript.
**Tipo:** Programación funcional y juegos. **Estado:** Proyecto académico.
**Repositorio:** https://github.com/enzoaldhairfuentesapaza/LPGuitarHero

## 12. Cubo de Rubik 3D

Simulación interactiva de un cubo de Rubik con rotación de caras, animaciones y control de cámara.

Renderizado tridimensional en tiempo real y controles de teclado para manipular el cubo. Aplica transformaciones geométricas a sus piezas y caras.

**Áreas:** Computación gráfica, Interacción 3D.
**Lenguajes:** C++.
**Tecnologías o conceptos:** C++, OpenGL.
**Tipo:** Gráficos e interacción. **Estado:** Proyecto académico.
**Repositorio:** https://github.com/enzoaldhairfuentesapaza/OpenGL---CuboRubik

## 13. SGBD B2

Motor académico de base de datos con simulación de disco, organización de registros e índices secundarios B+Tree.

Explora la lógica interna de un SGBD: almacenamiento físico, acceso mediante índices y operaciones de un modelo relacional. El objetivo es comprender la relación entre organización de datos y consultas.

**Áreas:** Bases de datos, Estructuras de datos, Almacenamiento.
**Lenguajes:** Python, SQL.
**Tecnologías o conceptos:** Python, B+Tree, SQL, Almacenamiento en disco.
**Tipo:** Sistemas de bases de datos. **Estado:** Proyecto académico.
**Repositorio:** https://github.com/enzoaldhairfuentesapaza/SGBD---B2

## 14. Control BOT

Base modular para desarrollar un bot de Telegram con configuración, comandos y carga de plugins.

El código inicia un cliente Pyrogram a partir de configuración JSON y carga módulos de la aplicación. Su estructura separa el arranque, las utilidades y las funciones del bot.

**Áreas:** Automatización, Bots de Telegram.
**Lenguajes:** Python.
**Tecnologías o conceptos:** Python, Pyrogram, Telegram API.
**Tipo:** Bots y automatización. **Estado:** Proyecto técnico.
**Repositorio:** https://github.com/enzoaldhairfuentesapaza/Control-BOT

## Información pendiente para completar el perfil

- Semestre actual y fecha estimada de egreso.
- Fechas de desarrollo y contribuciones individuales en proyectos en equipo.
- Enlaces públicos de CEDHI y de la app Flutter.
- LinkedIn, si existe, y correo de contacto preferido.
- Capturas, videos y muestras de pintura o escritura, si se quieren añadir más adelante.

## Fuentes del perfil

- CV original y constancias escolares proporcionados por Enzo.
- Carta de recomendación de septiembre de 2026: utilizada como respaldo del perfil académico; no se publica.
- Selección oficial PhawAI 2025: https://www.phawai.org/phawai-tarecda-25/becarios
- Repositorios enlazados en cada proyecto.
