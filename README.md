# NestTail Dashboard — Deploy en Vercel

## Archivos
- `api/shopify.js` — Proxy seguro para Shopify (el token nunca queda expuesto)
- `public/index.html` — Dashboard completo
- `vercel.json` — Configuración de Vercel

## Pasos para publicar (10 minutos)

### 1. Sube a GitHub
1. Ve a github.com → "New repository" → Nombre: `nesttail-dashboard`
2. Sube estos 3 archivos manteniendo la estructura de carpetas

### 2. Conecta con Vercel
1. Ve a vercel.com → "New Project"
2. Importa tu repositorio de GitHub
3. Haz clic en "Deploy"

### 3. Agrega tu token de Shopify (SEGURO)
1. En Vercel → tu proyecto → Settings → Environment Variables
2. Agrega:
   - Name: `SHOPIFY_ACCESS_TOKEN`
   - Value: (pega tu token aquí — nadie más lo ve)
3. Haz clic en Save
4. Ve a Deployments → "Redeploy"

### 4. ¡Listo!
Tu dashboard queda en: `https://nesttail-dashboard.vercel.app`

## Funciones incluidas
- Ver todos tus productos de Shopify
- Generar descripción con IA y publicar directo
- Guardar como borrador
- Generador de scripts TikTok, títulos SEO, bullets
- Cálculo automático de precio según margen
