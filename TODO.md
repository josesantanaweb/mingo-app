# 🚀 STEIK - Product Roadmap & Task Board

---

## 🎯 FOCO DE HOY
- 💻 **Programación:** .
  - [ ] Maquetar la pantalla de lista de partidos
- 🎨 **Diseño:** 
  <!-- - [ ] Diseñar la pantalla de listado de apuestas. -->

---

## ⏳ BACKLOG (Próximas Tareas)
*Tareas ya masticadas listas para cuando termine lo de arriba.*

### 🎨 UI / UX (Diseño y Maquetación)
- [ ] Diseñar la pantalla de listado de apuestas.
- [ ] Diseñar la pantalla de creacion de apuestas.
- [ ] Diseñar la pantalla de Login y Registro.

### 💻 Desarrollo

#### 🎨 Frontend
- [ ] Maquetar la pantalla de lista de partidos
- [ ] Integrar lista de partidos
- [ ] Maquetar la pantalla de lista de apuestas
- [ ] Integrar lista de apuestas
- [ ] Maquetar la pantalla de Login y Registro.
- [ ] Integrar la pantalla de Login y Registro.

#### 🧠 Backend
- [ ] Agregar tabla de Stats para los equipos y ligas.
- [ ] Agregar filtro de fecha a los partidos.
- [ ] Crear relaciones del modelo User
- [ ] Agregar mutation de Login y Registro.
---

## 🧠 BAÚL DE IDEAS (Backlog de Dopamina)
<!-- *Aquí apuntas todo lo que se te ocurra a mitad del día para sacarlo de tu cabeza y NO perder el foco. Se revisa solo los domingos.* -->

### 💡 Ideas de Funcionalidades Futuras
---
#### 💰 Módulo: Marketplace de Tipsters & Canales Privados (Fase 2)
*Modelo de negocio 'OnlyFans para Apostadores' enfocado en el mercado de Latinoamérica.*
- [ ] **Arquitectura Backend (NestJS):** 
  - Crear el módulo `modules/subscriptions` para gestionar estados de pago.
  - Crear el módulo `modules/channels` con resolvers GraphQL para publicaciones (Free vs. Premium).
- [ ] **Base de Datos (Prisma):** 
  - Añadir rol `TIPSTER` al modelo `User`.
  - Crear la tabla `ChannelMessage` vinculada a un `Match` o `Bet` para evitar alteraciones o borrados de historial (Estadísticas 100% Verificadas).
  - Estructurar el modelo `Subscription` con enums `ACTIVE`, `EXPIRED`, `PENDING`.
- [ ] **Estrategia UI/UX (Frontend Next.js):**
  - Diseñar la ruta `/tipsters` con un feed de posts dinámico.
  - Implementar un componente de bloqueo visual (`PremiumPostBlur`) que esconda el pronóstico y muestre el botón de pago si el usuario no está suscrito.
- [ ] **Pasarelas de Pago Contextuales (Latam):**
  - Integrar Webhooks para validar pagos automáticos mediante Binance Pay (Cripto), Pago Móvil (Venezuela), Nequi (Colombia) y SPEI (México).

### 📊 Ideas de Marketing / Comunidad
- Grabar un TikTok mostrando el "Antes y Después" de cómo la IA calcula el Tag de Over 2.5 combinando los dos equipos.
- Hacer una encuesta en Instagram para ver si la gente prefiere que la siguiente actualización sea de la LVBP (Béisbol) o de la SPB (Baloncesto).

---

## ✅ HECHO ESTE MES (Historial de Victorias)
- [x] 🎨 ~~Completar el diseño en modo oscuro (Premium Black + Verde Neón) de la pantalla Matches.~~
- [x] 💻 ~~Definir la arquitectura polimórfica para escalar a múltiples deportes en Prisma.~~
- [x] 💻 ~~Corregir la duplicidad de partidos en la lista del Frontend.~~
