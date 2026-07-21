# PMP Storefront — Resume Checkpoint

Last updated: 2026-07-21 (Asia/Riyadh)

## Completed

- Recovered the correct Salla Twilight Bundle repository.
- Replaced the empty bundle metadata with the PMP storefront component definition.
- Built an original red/black PMP storefront component (not a modified ready-made theme).
- Added Arabic RTL header, global search, engine/vehicle fitment finder, 12 parts categories, 9 engine families, 20 brands, promotional areas, trust bar, and PMP footer.
- Created three original production banner assets in `assets/banners/`.
- Added a landed-cost pricing engine covering supplier discount, FX, allocated freight, insurance, tariff rate, clearance, local delivery, import VAT recovery, payment fees, margin floor, competitive market ceiling, and selling VAT.
- Added automated pricing tests and a CSV product-pricing export command.

## Data rules

- Never assume one customs percentage for all parts. Store the verified HS code and tariff rate per SKU.
- Import VAT is recoverable only when PMP is VAT-registered and the documentation supports input-tax deduction.
- Product photos/descriptions must come from PMP's authorized supplier feeds, dealer assets, or original PMP content. Do not bulk-copy another retailer's protected catalog content.
- Supplier discounts, fees, margin targets, and market ceilings must be supplied from a private cost file and must not be committed to this public theme repository.

## Next execution point

1. Finish dependency installation and run `npm run build` plus `npm run test:pricing`.
2. Preview the storefront, connect the three banner asset URLs in the Salla component settings, and fix responsive details.
3. Push the tested source to the linked GitHub repository so Salla can receive the bundle update.
4. Import real products only after obtaining an authorized supplier feed/export containing SKU, cost, weight/dimensions, HS code, images, stock, and fitment. Keep cost fields private.
5. Upload/import the priced CSV through the connected Salla surface when the Salla MCP becomes available in the active session.
