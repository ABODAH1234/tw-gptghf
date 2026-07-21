# PMP Storefront — Resume Checkpoint

Last updated: 2026-07-21 (Asia/Riyadh)

## Live homepage bridge

- `salla/homepage-live.html` is the self-contained Arabic RTL homepage used for immediate Salla deployment while native Twilight bundle registration propagates.
- It includes the generated PMP hero, HEMI and LS/LT banners, store search, engine families, parts taxonomy, brands and support CTA.
- Native component source and the private-input pricing engine remain the long-term implementation.

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

1. The component build and pricing tests pass, and the tested native bundle has been published to GitHub.
2. Deploy and verify `salla/homepage-live.html` in the currently active Salla theme as the immediate live bridge.
3. Replace the bridge with the native `salla-pmp-storefront` component once Salla registers the updated bundle.
4. Import real products only after obtaining an authorized supplier feed/export containing SKU, cost, weight/dimensions, HS code, images, stock, and fitment. Keep cost fields private.
