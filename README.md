# BanBif · PFM — Mockup demostrativo

Prototipo navegable de alta fidelidad de un módulo de **Gestión de Finanzas Personales (PFM)** para la app móvil de **BanBif** (Perú). Pensado para **mostrar a un cliente** desde un celular vía link.

> ⚠️ **Datos 100% ficticios.** No es una pieza productiva ni está afiliada oficialmente a BanBif. Identidad de marca usada con fin demostrativo.

## ✨ Qué incluye
- 12 pantallas: Login, Inicio, Cuentas, Movimientos, Analiza, Presupuestos, Metas, Salud financiera, Alertas, Más + hojas de detalle.
- Categorización automática, presupuestos con semáforo, metas de ahorro, Ahorro Vueltos, score de salud financiera, proyección de flujo, insights.
- Gráficos hechos a mano en SVG (donut, barras, línea, sparkline, rings).
- Identidad BanBif: celeste `#20A6FF` + verde lima `#C4D600`.

## 🚀 Cómo verlo localmente
Es estático: cualquier servidor sirve.
```bash
cd banbif-pfm
python -m http.server 4178
# abrir http://localhost:4178
```

## 📱 Publicar como link (GitHub Pages)
```bash
gh auth login                                  # una sola vez
gh repo create banbif-pfm --public --source=. --push
gh api -X POST repos/{owner}/banbif-pfm/pages -f source.branch=main -f source.path=/
```
→ `https://<usuario>.github.io/banbif-pfm/` · ábrela en el celular (o conviértela en QR).

**Sin GitHub:** arrastra esta carpeta a [netlify.com/drop](https://app.netlify.com/drop) para un link instantáneo.

## 🧱 Stack
HTML + CSS + JavaScript **vanilla**. Sin build, sin dependencias, **funciona offline**.

## 📂 Estructura
```
index.html   shell + 12 pantallas + íconos SVG inline
styles.css   sistema de diseño (tokens + componentes) + responsive
app.js        datos ficticios, gráficos SVG, router, interacciones
DISENO-FUNCIONAL-TECNICO.md   diseño funcional y técnico completo
```

Diseño funcional y técnico detallado → [`DISENO-FUNCIONAL-TECNICO.md`](DISENO-FUNCIONAL-TECNICO.md)
