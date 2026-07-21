# PMP Salla Theme — Publishing Checkpoint

Last updated: 2026-07-21 03:25 Asia/Riyadh

## Completed

- Full Salla Twilight theme source created from the official engine baseline.
- Original PMP Arabic RTL homepage, header and footer implemented.
- PMP black/red/white visual system applied.
- Engine search paths: HEMI 5.7, HEMI 6.4/392, LS, LT, Coyote, Godzilla, 1FZ and 2JZ.
- Twelve part-type search paths and twenty performance-brand search paths.
- Original PMP hero, HEMI and LS/LT production banners bundled locally.
- Native Salla product list, search, account, cart, checkout, product and support components preserved.
- Production Webpack build passes. Output is in `public/`.

## Exact publishing blocker

The connected Salla MCP can edit settings for already-installed themes, but it cannot register or upload a new theme source repository. Salla's official flow requires either:

1. Importing this repository through Salla Partners → My Themes → Import Theme, where Salla detects the root `twilight.json`; or
2. Linking the directory with the authenticated Salla CLI.

Do not rebuild the homepage using Raed blocks. The merchant requires the standalone PMP theme.

## Build

```bash
pnpm install --frozen-lockfile
pnpm production
```

## Catalog status

- Current Salla API audit returned zero categories.
- Existing products have no category assignments.
- Several existing products have placeholder prices of 0 or 1 SAR; do not make them purchasable before verified landed-cost pricing.
- Product imports require authorized supplier data: SKU/MPN, cost, dealer discount, weight/dimensions, freight allocation, HS code/tariff, stock, fitment, approved images and market comparison.
