const roundMoney = (value) => Math.round((value + Number.EPSILON) * 100) / 100;

export function priceImportedProduct(input) {
  const {
    supplier_price_usd,
    dealer_discount_rate = 0,
    usd_sar_rate = 3.75,
    international_shipping_sar = 0,
    insurance_sar = 0,
    customs_rate = 0,
    clearance_sar = 0,
    local_delivery_sar = 0,
    payment_fee_rate = 0,
    payment_fee_fixed_sar = 0,
    target_margin_rate = 0,
    vat_rate = 0.15,
    vat_registered = true,
    market_ceiling_sar = null,
    minimum_margin_rate = 0,
  } = input;

  if (!(supplier_price_usd >= 0)) throw new Error('supplier_price_usd must be zero or greater');
  const discountedUsd = supplier_price_usd * (1 - dealer_discount_rate);
  const goodsSar = discountedUsd * usd_sar_rate;
  const cif = goodsSar + international_shipping_sar + insurance_sar;
  const customs = cif * customs_rate;
  const importVat = (cif + customs) * vat_rate;
  const recoverableImportVat = vat_registered ? importVat : 0;
  const landedCost = cif + customs + clearance_sar + local_delivery_sar + importVat - recoverableImportVat;

  const priceForMargin = (landedCost + payment_fee_fixed_sar) /
    Math.max(0.01, 1 - target_margin_rate - payment_fee_rate);
  const minimumPrice = (landedCost + payment_fee_fixed_sar) /
    Math.max(0.01, 1 - minimum_margin_rate - payment_fee_rate);
  const competitiveExVat = market_ceiling_sar == null
    ? priceForMargin
    : Math.max(minimumPrice, Math.min(priceForMargin, market_ceiling_sar / (1 + vat_rate)));

  const sellingExVat = roundMoney(competitiveExVat);
  const sellingVat = vat_registered ? roundMoney(sellingExVat * vat_rate) : 0;
  const sellingIncVat = roundMoney(sellingExVat + sellingVat);
  const paymentFee = roundMoney(sellingExVat * payment_fee_rate + payment_fee_fixed_sar);
  const profit = roundMoney(sellingExVat - landedCost - paymentFee);

  return {
    supplier_price_after_discount_usd: roundMoney(discountedUsd),
    goods_cost_sar: roundMoney(goodsSar),
    cif_value_sar: roundMoney(cif),
    customs_sar: roundMoney(customs),
    import_vat_sar: roundMoney(importVat),
    recoverable_import_vat_sar: roundMoney(recoverableImportVat),
    landed_cost_sar: roundMoney(landedCost),
    payment_fee_sar: paymentFee,
    selling_price_ex_vat_sar: sellingExVat,
    selling_vat_sar: sellingVat,
    selling_price_inc_vat_sar: sellingIncVat,
    estimated_profit_sar: profit,
    estimated_margin_rate: sellingExVat ? roundMoney(profit / sellingExVat) : 0,
    price_was_market_capped: market_ceiling_sar != null && priceForMargin > market_ceiling_sar / (1 + vat_rate),
  };
}
