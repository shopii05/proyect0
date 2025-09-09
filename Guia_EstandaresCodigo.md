# FIND & RATE - Guía de Estándares de Código

## Propósito
Unificar criterios de escritura, nomenclatura, estilo y estructura para el equipo.

---

## 1. Reglas de nombres
- **Variables / funciones:** `camelCase` (ej. `getUserReviews`, `userName`).
- **Constantes:** `UPPER_CASE` (ej. `API_BASE_URL`).
- **Componentes / clases:** `PascalCase` (ej. `HomePage`, `ReviewCard`).
- **Archivos:** componentes en `PascalCase.jsx` (ej. `Home.jsx`), utilitarios en minúsculas con guiones (ej. `date-utils.js`).

---

## 2. Comentarios y documentación
- Usar comentarios claros y CIFRADOS (`//` para inline, `/** ... */` para funciones públicas).
- Documentar funciones importantes:
```js
/**
 * Fetch reviews for a place
 * @param {string} placeId
 * @returns {Promise<Array>}
 */
async function fetchReviews(placeId) { ... }
