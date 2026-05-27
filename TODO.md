# 🚀 STEIK - Product Roadmap & Task Board

---

## 🎯 FOCO DE HOY
*Regla de oro: Máximo 2 o 3 tareas. Si no están aquí, no se programan hoy.*
- [ ] 💻 **Programación:** Aplicar el prompt de Stitch para renderizar el componente del Match Insight (Tag "🔥 Over 2.5") en la tarjeta de partidos.
- [ ] 🎨 **Diseño:** Ajustar el espaciado (padding) y fijar las cuotas `1 | X | 2` para resaltar visualmente al equipo local.

---

## ⏳ BACKLOG (Próximas Tareas)
*Tareas ya masticadas listas para cuando termine lo de arriba.*

### 🎨 UI / UX (Diseño y Maquetación)
- [ ] Diseñar el modal de "Registrar Apuesta" que se abre al hacer clic largo en una cuota.
- [ ] Crear los estados de carga (Skeleton loaders) para la lista de partidos de fútbol.
- [ ] Definir la paleta de colores secundarios para cuando se integre el Béisbol (LVBP).

### 💻 Backend & Base de Datos (NestJS / Prisma)
- [ ] Configurar el modelo `SportMatch` en Prisma y probar la columna de tipo `Json` con datos simulados.
- [ ] Crear el script para calcular la fórmula matemática real del `Win Rate` basada en el historial de apuestas cargadas.
- [ ] Conectar el endpoint de favoritos (estrella) para guardar partidos en la base de datos local.

---

## 🧠 BAÚL DE IDEAS (Backlog de Dopamina)
*Aquí apuntas todo lo que se te ocurra a mitad del día para sacarlo de tu cabeza y NO perder el foco. Se revisa solo los domingos.*

### 💡 Ideas de Funcionalidades Futuras
- Agregar un sistema de notificaciones push a Telegram que te avise: *"¡Alerta! Tu racha favorita está por empezar en 15 minutos"*.
- Crear una sección de "Tipsters" locales donde creadores de contenido de TikTok en Venezuela puedan subir sus capturas de parleys.
- Integrar pasarela de pago con Binance Pay y Pago Móvil automatizado para el plan Premium.

### 📊 Ideas de Marketing / Comunidad
- Grabar un TikTok mostrando el "Antes y Después" de cómo la IA calcula el Tag de Over 2.5 combinando los dos equipos.
- Hacer una encuesta en Instagram para ver si la gente prefiere que la siguiente actualización sea de la LVBP (Béisbol) o de la SPB (Baloncesto).

---

## ✅ HECHO ESTE MES (Historial de Victorias)
*Esto es vital para tu motivación. Cuando veas esto lleno, sabrás que sí estás avanzando.*
- [x] 🎨 Completar el diseño en modo oscuro (Premium Black + Verde Neón) de la pantalla Matches.
- [x] 💻 Definir la arquitectura polimórfica para escalar a múltiples deportes en Prisma.
- [x] 💻 Corregir la duplicidad de partidos en la lista del Frontend.
