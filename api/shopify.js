
export default async function handler(req, res) {
  const { action } = req.query;
  const TOKEN = process.env.SHOPIFY_ACCESS_TOKEN;
  const SHOP = 'https://nesttail-2.myshopify.com/admin/api/2025-04';

  if (!TOKEN) return res.status(200).json({ error: 'TOKEN_MISSING' });

  if (action === 'products') {
    const r = await fetch(`${SHOP}/products.json?limit=50`, {
      headers: { 'X-Shopify-Access-Token': TOKEN }
    });
    const data = await r.json();
    return res.status(200).json(data);
  }

  if (action === 'create_product') {
    const r = await fetch(`${SHOP}/products.json`, {
      method: 'POST',
      headers: { 'X-Shopify-Access-Token': TOKEN, 'Content-Type': 'application/json' },
      body: JSON.stringify(req.body)
    });
    const data = await r.json();
    return res.status(200).json(data);
  }
}
