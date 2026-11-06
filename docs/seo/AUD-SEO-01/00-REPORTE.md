# AUD-SEO-01 · Reporte de saneamiento técnico (6 nov 2026)

## Alcance real de esta ejecución
Hecho en código y verificado con build + rastreo local de 204 rutas (`scripts/seo-audit.mjs`). **No se pudo**: medir el sitio en producción, `www.jaak.ai` ni `blog.jaak.ai` (el proxy bloquea esos hosts), ni usar Search Console (sin acceso). Esos puntos quedan como pendientes con responsable.

## Hallazgos corregidos (evidencia antes → después)
| # | Hallazgo | Antes | Después |
|---|---|---|---|
| 1 | Canonical heredado a la home desde `layout.tsx` | **138** páginas indexables (85 docs, 20 blog, `/bancos`, `/cumplimiento/*`, `/soluciones/*`…) | **0**. Canonical relativo `./`: cada ruta se autorreferencia y sin query string |
| 2 | `robots.txt`: `public/robots.txt` ocultaba a `robots.ts` | `Disallow` de `/api/`, `/private/`, `/docs/pulse`, orden confirmada **no vigentes** | Eliminado el estático; el servido sale de `robots.ts` con los `Disallow` (verificado) |
| 3 | `/firma-simple-cobre` con canonical en `www.jaak.ai` | host distinto al resto | `https://jaak.ai/...` |
| 4 | Sitemap listaba `/plataforma/firma-electronica` (su canonical es otra URL) | 1 URL no canónica | Reemplazada por `/firma-electronica` |
| 5 | Sitemap omitía 20 páginas indexables autocanónicas | firma-electronica-*, recursos/*, validar-ine, validar-curp-renapo, consultas-oficiales, sello de tiempo | Añadidas |
| 6 | Títulos duplicados | 72 con sufijo «\| JAAK \| JAAK»; 6 páginas con el título de la home; 2 docs idénticos | Sufijo corregido (excepto `firma-nom151-demo-autoservicio`); títulos propios en `/bancos`, `/financieras`, `/inmobiliarias`, `/webinar`; docs América/Europa diferenciados |
| 7 | BreadcrumbList ausente en el blog | 20 de 22 artículos | Todos; migas de pan **visibles** (Inicio › Blog JAAK) para que el schema coincida con el contenido |
| 8 | `/firma-simple-cobre/gracias` indexable con la metadata de la landing | indexable | `noindex` + título propio |

Resultado del rastreo posterior: 1 canonical no autorreferenciado (`/plataforma/firma-electronica`, intencional, ver pendientes).

## Parámetros y filtros (01.4)
`/blog?categoria=…` y las variantes con query comparten canonical `/blog` (el filtro es del lado cliente); la búsqueda de docs (FlexSearch) no genera URL. Sin cambios de navegación.

## Pendientes y riesgos (responsable / decisión)
1. **Search Console (SEO)**: exportar clics/impresiones/canonical elegido por Google (columnas «pendiente GSC» del inventario), inspeccionar y solicitar reindexación de: `/`, `/blog`, `/precios`, `/firma-electronica`, `/bancos`, `/financieras`, `/inmobiliarias`, posts del blog. Tras desplegar, correr `BASE=https://jaak.ai node scripts/seo-audit.mjs` (requiere `npm run build` previo).
2. **Host `www`** (DevOps/Vercel): HubSpot registra tráfico en `www.jaak.ai`. Confirmar redirección 301 `www → jaak.ai` (el código usa el apex en todas partes).
3. **`/plataforma/firma-electronica`** (SEO + Producto): página delgada con canonical a `/firma-electronica`, pero enlazada desde navegación y footer. Decidir: redirigir 301 y actualizar enlaces, o diferenciar contenido.
4. **`blog.jaak.ai`** (Marketing en HubSpot): criterio aprobado, 301 por URL a su equivalente. Ejecución pendiente en HubSpot con `03-redirecciones-hubspot.csv`; solo 4 filas están «listas tras validar par». Ver también hallazgos de slugs con tildes y metas duplicadas en la matriz.
5. **Autoservicio** (no tocado por la condición): `/autoservicio/orden-confirmada-autoservicio` solo está bloqueada por robots (sin `noindex`) y comparte el título de la home; `/firma-nom151-demo-autoservicio` conserva el sufijo duplicado; `/comprar`, demos y `/autoservicio-enterprise` fuera del sitemap. Decidir con el responsable de Autoservicio.
6. **Fuera del sitemap por decisión**: `/webinar`, `/efisys-lab-connect`, `/guardian`, `/firma-simple-cobre` (campañas/comerciales). Confirmar indexación deseada.
7. **Docs sin `<h1>`**: ~30 páginas `/docs/*` no renderizan H1 (el título está solo en el frontmatter). Cambio de plantilla; evaluar en fase aparte.
8. `lastModified: now` en el sitemap para páginas estáticas: Google puede ignorarlo. Sustituir por fechas reales.
9. `public/signa-sitemap.xml` (2 URL, de febrero) no está referenciado en robots: confirmar en GSC si está enviado y retirarlo.
10. `/documentacion` (legacy) sigue indexable con contenido solapado con `/docs`; decidir consolidación.
11. Títulos largos (p. ej. `firma-expediente-defendible-sector-crediticio`) y la ausencia de `dateModified` en algunos artículos: revisar en la fase editorial.

La reindexación por Google se medirá después; no es inmediata ni está garantizada.
