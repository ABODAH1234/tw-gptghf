import fs from 'node:fs';
import path from 'node:path';
import { priceImportedProduct } from '../src/lib/pricing.mjs';

const source = process.argv[2];
const output = process.argv[3] || 'dist/pmp-priced-products.csv';
if (!source) {
  throw new Error('Pass the path to a private product-cost JSON file. Cost data must not be committed to this public repository.');
}
const products = JSON.parse(fs.readFileSync(source, 'utf8'));
const headers = ['sku','name_ar','brand','category','engine_family','supplier_price_usd','landed_cost_sar','selling_price_inc_vat_sar','estimated_profit_sar','customs_rate','hs_code','source_url'];
const escape = (value) => `"${String(value ?? '').replaceAll('"', '""')}"`;
const rows = products.map(product => {
  const priced = priceImportedProduct(product);
  return headers.map(key => escape(key in priced ? priced[key] : product[key])).join(',');
});
fs.mkdirSync(path.dirname(output), { recursive: true });
fs.writeFileSync(output, [headers.join(','), ...rows].join('\n') + '\n');
console.log(`Priced ${products.length} products -> ${output}`);
