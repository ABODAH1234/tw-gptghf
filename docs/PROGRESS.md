# PMP Storefront — Resume Checkpoint

Last updated: 2026-07-21 (Asia/Riyadh)

## Recovery publication

- The recovered full theme is preserved on branch `agent/recover-full-pmp-theme`.
- Draft PR: `https://github.com/ABODAH1234/tw-gptghf/pull/2`.
- Production builds for both the full theme and standalone component pass; pricing tests pass 2/2.
- Salla Partners CLI upload is currently blocked because `api.salla.dev/partners/v1` is unreachable from the active runtime. The merchant storefront connection remains healthy, and no live theme activation has been attempted.

## Live homepage bridge

- `salla/homepage-live.html` is the self-contained Arabic RTL homepage used for immediate Salla deployment while native Twilight bundle registration propagates.
- It includes the generated PMP hero, HEMI and LS/LT banners, store search, engine families, parts taxonomy, brands and support CTA.
- It now renders Salla's latest-products slider and routes aggregate calls-to-action to the live product catalog while Salla categories remain empty.
- Native component source and the private-input pricing engine remain the long-term implementation.

### Salla status at 2026-07-21 03:20 Asia/Riyadh

- Salla now reports the former HTML bundle block as unsupported and no longer returns it in the active homepage blocks.
- The active Raed preview therefore contains only its built-in latest-products area; the native PMP bundle is still absent from the available bundle catalog.
- Do not rebuild the storefront with Raed blocks: the merchant explicitly requires an original theme.
- A complete standalone Twilight theme was recovered from the former scratch workspace and is now stored under `theme/` in this repository.
- The recovered source corresponds to local commits `a14c4a3c08e318c829accc938b26b118c6171ffc` and `f0947f6`, and its production build was revalidated on 2026-07-21.
- The next publishing action is to import the standalone theme's root `twilight.json` through the Salla Partners theme flow or link it with Salla CLI; homepage MCP cannot register theme source code.

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

## Current Salla catalog audit

- Salla currently returns zero categories; existing products therefore have no category assignments.
- Existing products include real drafts/out-of-stock items plus several products with placeholder prices of 0 or 1 SAR.
- Do not expose placeholder-priced items as purchasable stock. Price and classify them only after verified supplier cost, freight allocation, weight, HS code and market comparison are available.

## Next execution point

1. The component build and pricing tests pass, and the tested native bundle has been published to GitHub.
2. Publish the standalone full theme in `theme/` through Salla Partners/CLI and preview the generated version on the PMP store.
3. Use `salla/homepage-live.html` only as a reference/fallback; Salla no longer supports its former HTML component on the active theme.
4. Import real products only after obtaining an authorized supplier feed/export containing SKU, cost, weight/dimensions, HS code, images, stock, and fitment. Keep cost fields private.
