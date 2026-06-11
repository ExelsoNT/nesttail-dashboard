export default async function handler(req, res) {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');

  if (req.method === 'OPTIONS') return res.status(200).end();

  const SHOPIFY_TOKEN = process.env.SHOPIFY_ACCESS_TOKEN;
  const SHOP_URL = 'https://nesttail-2.myshopify.com/admin/api/2025-04';

  if (!SHOPIFY_TOKEN) {
    return res.status(500).json({ error: 'Token no configurado en variables de entorno' });
  }

  const { action } = req.query;

  try {
    if (action === 'products') {
      const r = await fetch(`${SHOP_URL}/products.json?limit=50`, {
        headers: { 'X-Shopify-Access-Token': SHOPIFY_TOKEN }
      });
      const data = await r.json();
      return res.status(200).json(data);
    }

    if (action === 'create_product') {
      const r = await fetch(`${SHOP_URL}/products.json`, {
        method: 'POST',
        headers: {
          'X-Shopify-Access-Token': SHOPIFY_TOKEN,
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(req.body)
      });
      const data = await r.json();
      return res.status(200).json(data);
    }

    if (action === 'inventory') {
      const r = await fetch(`${SHOP_URL}/inventory_levels.json`, {
        headers: { 'X-Shopify-Access-Token': SHOPIFY_TOKEN }
      });
      const data = await r.json();
      return res.status(200).json(data);
    }

    return res.status(400).json({ error: 'Acción no reconocida' });

  } catch (err) {
    return res.status(500).json({ error: err.message });
  }
}
