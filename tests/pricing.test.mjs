import test from 'node:test';
import assert from 'node:assert/strict';
import { priceImportedProduct } from '../src/lib/pricing.mjs';

test('calculates discounted landed cost and VAT-inclusive selling price', () => {
  const result = priceImportedProduct({
    supplier_price_usd: 100,
    dealer_discount_rate: 0.05,
    international_shipping_sar: 50,
    customs_rate: 0.05,
    vat_registered: true,
    payment_fee_rate: 0,
    payment_fee_fixed_sar: 0,
    target_margin_rate: 0.2,
  });
  assert.equal(result.goods_cost_sar, 356.25);
  assert.equal(result.cif_value_sar, 406.25);
  assert.equal(result.customs_sar, 20.31);
  assert.equal(result.recoverable_import_vat_sar, result.import_vat_sar);
  assert.equal(result.landed_cost_sar, 426.56);
  assert.equal(result.selling_price_inc_vat_sar, 613.18);
});

test('never undercuts configured minimum margin when market ceiling is too low', () => {
  const result = priceImportedProduct({
    supplier_price_usd: 100,
    dealer_discount_rate: 0,
    vat_registered: true,
    payment_fee_rate: 0,
    payment_fee_fixed_sar: 0,
    target_margin_rate: 0.2,
    minimum_margin_rate: 0.1,
    market_ceiling_sar: 100,
  });
  assert.ok(result.estimated_margin_rate >= 0.1);
  assert.equal(result.price_was_market_capped, true);
});
