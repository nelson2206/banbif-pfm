# BanBif · PFM — Diseño Funcional y Técnico
### Mockup de app móvil de Gestión de Finanzas Personales (Personal Finance Management)

> **Propósito del entregable:** prototipo navegable de alta fidelidad para presentar a cliente la **visión de un módulo PFM** dentro de la BanBif App. Se comparte como **link** (GitHub Pages), se abre en **cualquier celular** y funciona **sin conexión** (100% autocontenido). Datos **ficticios**.

---

## 0. Resumen ejecutivo

| | |
|---|---|
| **Producto** | Módulo PFM ("Mis Finanzas") embebido en la app de banca móvil de BanBif |
| **Audiencia del demo** | Cliente / sponsor de negocio (no técnico) |
| **Tipo de pieza** | Mockup interactivo de alta fidelidad (no es producto productivo) |
| **Dirección de diseño** | Lenguaje visual de la BanBif App actual (dark theme: azul-noche, violeta primario, cian para positivos) con visión PFM aspiracional |
| **Plataforma técnica** | Web app estática (HTML + CSS + JS vanilla), mobile-first, PWA-ready |
| **Distribución** | URL pública vía GitHub Pages — se escanea/abre en el celular del cliente |
| **Estado de datos** | 100% simulados (soles PEN, comercios peruanos), sin backend ni datos reales |

**Qué demuestra el prototipo:** que BanBif puede pasar de una banca *transaccional* (consultar saldo, transferir) a una banca *relacional / asesora* que ayuda al cliente a **entender, planificar y mejorar** su vida financiera — el corazón de un PFM.

---

## 1. Diseño funcional

### 1.1 Persona de referencia
**Valeria Ríos Quispe**, 31 años, profesional dependiente en Lima, cliente Premium. Recibe sueldo por BanBif, usa tarjeta de crédito, hace Yape/Plin, quiere ahorrar para metas concretas y "no sabe en qué se le va la plata". Es el perfil que más valor obtiene de un PFM.

### 1.2 Mapa de capacidades PFM (alcance funcional)

| # | Capacidad PFM | Descripción | Pantalla(s) |
|---|---|---|---|
| C1 | **Visión 360° del patrimonio** | Consolida cuentas, ahorros y tarjetas en un solo "patrimonio neto" | Inicio, Cuentas |
| C2 | **Categorización automática** | Cada movimiento se etiqueta solo (Alimentación, Restaurantes, etc.) | Movimientos |
| C3 | **Análisis de gasto** | ¿En qué gasto? Tendencias, comparativos mes a mes | Analiza |
| C4 | **Presupuestos** | Límite por categoría con semáforo y alertas | Presupuestos |
| C5 | **Metas de ahorro** | Objetivos con progreso (viaje, fondo de emergencia, etc.) | Metas |
| C6 | **Ahorro inteligente** | Redondeo de compras ("Ahorro Vueltos") y ahorro programado | Metas |
| C7 | **Salud financiera** | Score 0–100 + recomendaciones accionables | Salud financiera |
| C8 | **Proyección de flujo** | Estima cierre de mes y saldo mínimo proyectado | Analiza |
| C9 | **Alertas proactivas** | Avisos de presupuesto, ingresos, vencimientos, hitos de meta | Alertas |
| C10 | **Insights contextuales** | Mensajes tipo "gastaste 23% más en Restaurantes" | Inicio |
| C11 | **Agregación multibanco + consentimientos** | Cuentas de otros bancos vía open banking, con gestión y revocación de consentimientos | Inicio, Cuentas, Conexiones |
| C12 | **Recomendaciones comerciales** | Ofertas y productos según comportamiento (depósito a plazo, beneficios, metas sugeridas) | Inicio, Metas |

La experiencia se organiza en **3 pilares** que estructuran el Home: ① *Tu panorama financiero en tiempo real* (C1, C11) · ② *Entiende tus finanzas y toma mejores decisiones* (C2, C3, C7, C8, C9, C10) · ③ *Alcanza tus metas con recomendaciones para ti* (C5, C6, C12). Detrás operan capacidades de agregación de cuentas, gestión de consentimientos, categorización transaccional, analítica avanzada, generación de insights, recomendaciones comerciales y motores de notificaciones contextuales.

### 1.3 Inventario de pantallas (13)

| Pantalla | Rol | Elementos clave |
|---|---|---|
| **Splash / Login** | Entrada de marca | Logo, saludo, Face ID / clave (simulados) |
| **Inicio (Home)** | Centro de control | Patrimonio total + ojo, accesos rápidos, carrusel de cuentas, score de salud, resumen del mes, donut de gasto, insight |
| **Cuentas** | Detalle de productos | Activos/deudas/neto, lista de cuentas y tarjeta de crédito |
| **Movimientos** | Historial | Buscador, chips de filtro por categoría, lista agrupada por fecha, +/− |
| **Detalle de movimiento** (sheet) | Edición | Categoría, cuenta, estado, acciones: recategorizar / dividir / recibo |
| **Analiza** | Núcleo PFM | Selector de mes, barras ingresos vs gastos (6m), donut por categoría, línea de tendencia, flujo proyectado |
| **Presupuestos** | Control de gasto | Ring global, lista por categoría con semáforo verde/ámbar/rojo |
| **Metas** | Ahorro | Toggle Ahorro Vueltos, tarjetas de meta con % y faltante |
| **Nueva meta** (sheet) | Creación | Nombre, monto objetivo, aporte sugerido |
| **Salud financiera** | Asesoría | Score grande, 4 factores con barras, recomendaciones |
| **Alertas** | Notificaciones | Lista de avisos (no leídos resaltados) |
| **Conexiones** | Open banking | Bancos conectados (BCP, Interbank), fechas de renovación, consentimientos revocables |
| **Más / Perfil** | Configuración | Perfil, agrupaciones de ajustes |

### 1.4 Flujos principales (user journeys)
1. **"¿En qué gasto?"** → Inicio → *Analizar* → Analiza (donut + tendencia) → tap categoría → Movimientos filtrados.
2. **"Quiero controlar mis salidas a comer"** → Inicio (insight Restaurantes) → *Ajustar presupuesto* → Presupuestos.
3. **"Quiero ahorrar para un viaje"** → Metas → **+** Nueva meta → aporte sugerido → meta creada.
4. **"¿Cómo va mi salud financiera?"** → Inicio (tarjeta score) → Salud financiera → recomendaciones.
5. **Privacidad en público** → Inicio → tap **ojo** → saldos ocultos `S/ ••••••`.

### 1.5 Reglas de negocio modeladas (lógica del PFM)
- **Categorización:** cada movimiento tiene una categoría con color e ícono propios; los ingresos se separan de los gastos.
- **Presupuesto / semáforo:** `<80%` verde ("vas bien"), `80–99%` ámbar ("te queda…"), `≥100%` rojo ("excedido en…").
- **Tasa de ahorro:** `(ingresos − gastos) / ingresos`; se compara contra meta del 30%.
- **Ahorro Vueltos:** redondeo de cada compra al sol superior; acumulado mensual visible.
- **Salud financiera:** score compuesto por 4 factores (capacidad de ahorro, nivel de deuda, control de gasto, diversificación), cada uno con su barra; el global colorea el ring (≥75 verde, 55–74 ámbar, <55 rojo).
- **Proyección de flujo:** estimación de cierre de mes y piso de saldo según recurrentes.

### 1.6 Identidad de marca aplicada (BanBif App actual)
Tomada de las pantallas reales de la app renovada de BanBif (referencias del App Store):
- **Dark theme** como base: fondo azul-noche `#0B0E16`, superficies `#181D2B`, glows ambientales púrpura-azul.
- **Violeta `#8B5CF6`** = acción primaria (CTAs, FAB, tab activa, links en lavanda `#B9A8FF`, pills destacando palabras clave en titulares).
- **Cian `#41B9FF`** = montos positivos/ingresos y acentos de dato (como en la app real, donde los abonos se muestran en celeste).
- **Semáforos** solo para estados: verde `#34D399` / ámbar `#FBBF24` / rosa `#FB7185` en presupuestos y salud financiera.
- **Componentes de la app real replicados:** wordmark blanco, tiles oscuros de acceso rápido con borde sutil, tarjetas de movimiento oscuras redondeadas, pill gradiente para destacar palabras ("claras"), números tabulares.
- *Nota:* la paleta legacy del logotipo (celeste `#20A6FF` + lima `#C4D600`) quedó descartada tras validar contra las capturas de la app actual.

---

## 2. Diseño técnico

### 2.1 Decisiones de arquitectura (y por qué)

| Decisión | Elección | Razón |
|---|---|---|
| **Stack** | HTML + CSS + JavaScript **vanilla**, sin framework | Cero build, cero dependencias, carga instantánea; ideal para un mockup que debe "solo abrir y andar" en el celular del cliente |
| **Sin paso de compilación** | Archivos servidos tal cual | GitHub Pages publica la carpeta directamente; no hay CI ni node_modules |
| **Autocontenido / offline** | Sin CDNs, sin fuentes externas, **íconos SVG inline**, **gráficos SVG a mano** | Funciona sin wifi en la reunión; nada que "se quede cargando" |
| **Fuentes** | Stack del sistema (SF/Segoe/Roboto) | Look nativo en cada SO, sin descarga externa |
| **Gráficos** | SVG generado en JS (donut, barras, línea, sparkline, rings con `conic-gradient`) | Sin librerías (Chart.js, D3); control total del estilo de marca |
| **Estado/datos** | Objetos JS en memoria (`app.js`) | Es un prototipo; no requiere backend ni persistencia |

### 2.2 Estructura de archivos
```
banbif-pfm/
├── index.html   → shell de la app, 12 pantallas + sprite de íconos SVG
├── styles.css   → sistema de diseño (tokens + componentes), responsive
├── app.js       → datos ficticios, render, gráficos SVG, router, interacciones
├── README.md    → guía rápida + cómo desplegar
└── DISENO-FUNCIONAL-TECNICO.md (este documento)
```

### 2.3 Sistema de diseño (CSS)
- **Design tokens** en `:root`: paleta (`--cyan`, `--lime`, neutros, estados), radios, sombras, colores de categoría.
- **Componentes:** `hero-card`, `acct-card`, `quick`, `donut`, `ring`, `bdg` (budget), `goal`, `factor`, `txn`, `sheet`, `tabbar`, `chip-f`, `switch`.
- **Mobile-first**; el `@media (max-width:760px)` convierte el "frame de iPhone" (vista escritorio, para presentar en laptop) en **pantalla completa** real en el celular, respetando *safe areas* (`env(safe-area-inset-*)`).

### 2.4 Navegación (SPA)
- Pantallas = `<section class="view" data-view="…">`; sólo una con `.is-active`.
- **Router** en `app.js`: `go(id)` cambia de vista, resalta la tab correspondiente, hace scroll-top y **renderiza gráficos de forma perezosa** (lazy) la primera vez.
- **Pila de navegación** (`stack`) para el botón "atrás" en subpantallas; las tabs reinician la pila.
- Delegación de eventos única (un `click` global) → atributos `data-go`, `data-nav`, `data-tab`, `data-back`, `data-txn`, `data-chip`.

### 2.5 Datos (modelo del prototipo)
Estructuras en `app.js`: `CATS` (categorías), `ACCOUNTS`, `TXNS` (17 movimientos), `BUDGETS`, `SPEND`, `GOALS`, `FACTORS`, `TIPS`, `NOTIFS`, `IE` (serie 6 meses), `TREND` (acumulado diario). Todo en **soles** con comercios reales del Perú (Tottus, Plaza Vea, Rappi, Cineplanet, Luz del Sur, Movistar, InkaFarma, Yape/Plin, etc.) para realismo del demo.

### 2.6 Rendimiento y compatibilidad
- Peso total ≈ pocos KB (3 archivos de texto, sin imágenes binarias).
- Compatible con Safari iOS y Chrome Android actuales (Grid/Flex, `conic-gradient`, `backdrop-filter`, `dvh`, `env()`).
- Sin tracking, sin cookies, sin red.

---

## 3. Despliegue (GitHub Pages)

El repositorio queda **inicializado y commiteado** localmente. Para publicar:

```bash
# 1) (una sola vez) re-autenticar GitHub CLI
gh auth login        # o:  gh auth refresh -h github.com

# 2) crear el repo y subir todo
cd C:\Users\nebernal\banbif-pfm
gh repo create banbif-pfm --public --source=. --push

# 3) activar GitHub Pages (rama main, carpeta raíz)
gh api -X POST repos/{owner}/banbif-pfm/pages -f source.branch=main -f source.path=/
```
**URL resultante:** `https://nelson2206.github.io/banbif-pfm/`
(tarda 1–2 min en propagar; ábrela en el celular o genera un QR con esa URL para la reunión).

> Alternativa sin GitHub: arrastrar la carpeta a **netlify.com/drop** → link instantáneo.

---

## 4. De mockup a producto real (roadmap para el pitch)

Si el cliente aprueba la visión, el camino a producción:

1. **Agregación de cuentas y categorización** — motor de enriquecimiento de transacciones (MCC + ML de categorización), idealmente sobre el *core* bancario y open banking.
2. **Backend y APIs** — servicios de cuentas, movimientos, presupuestos, metas; persistencia y reglas de negocio del lado servidor.
3. **App nativa / híbrida** — portar la UI a React Native / Flutter o módulo dentro de la app actual de BanBif.
4. **Seguridad y cumplimiento** — autenticación biométrica real, cifrado, SBS/normativa de protección de datos (Ley N° 29733), tokenización.
5. **Personalización** — insights con IA, recomendaciones de ahorro, nudges conductuales.
6. **Medición** — analítica de adopción, NPS del módulo, impacto en retención y cross-sell.

---
*Documento de diseño · BanBif PFM · mockup demostrativo · datos ficticios · junio 2026.*
