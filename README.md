# Airbnb Listing Clone — Romantic Jacuzzi 1BHK Candolim | Mirashya UG10

A pixel-faithful, desktop-first recreation of the reference Airbnb listing page
(`airbnb-clone-umber-two.vercel.app`) with its authored motion, built as a
Playpower-style take-home.

## Stack

- Vite 6 + React 19 + TypeScript (strict)
- Tailwind CSS v4 (Airbnb design tokens in `src/globals.css`)
- Airbnb Cereal VF variable font served locally from `public/assets/fonts`
- No backend — all content is static data in `src/data/listing.ts`

## Run

```bash
npm install
npm run dev        # http://localhost:5173
npm run build      # typecheck + production build
npm run lint
```

## The four animations (matched to the reference)

| Motion | Spec |
| --- | --- |
| Photo-tour overlay | full-screen, slides up/down `0.3s cubic-bezier(.2,0,0,1)` |
| Lightbox | cross-fade `0.18s`, prev/next arrows, `<count>/<total>` counter |
| Hero / filmstrip hover-zoom | inner image `scale(1.05)`, `0.35s` ease-out |
| Sticky section nav | slide-down `0.3s cubic-bezier(.2,0,0,1)` when it sticks at `top:80px` |

## Interaction & accessibility

- `←` / `→` navigate photos (lightbox and photo tour), `Esc` unwinds
  lightbox → tour → page
- Browser Back closes the topmost overlay; URLs are history-synced
  (`?view=photos`, `?view=photos&photo=N`, `?view=amenities`, `?view=reviews`)
- Body scroll locks while an overlay is open; focus moves into each dialog and
  returns to its trigger on close
- Focus rings render only for keyboard users (`html.kbd`)
- `prefers-reduced-motion` is honoured
- Photo tour groups every image by room with a filterable filmstrip

## Structure

```
src/
  App.tsx                 # overlay state + history/keyboard/scroll-lock
  components/
    Header.tsx            # sticky top bar with search pill
    HeroGrid.tsx          # 1-big + 2×2 grid, hover-zoom, Show all photos
    Overview.tsx          # title, meta, Share / Save
    SectionNav.tsx        # sticky scroll-spy subnav (slide-down)
    BookingCard.tsx       # sticky reserve card with price breakdown
    Calendar.tsx          # dual-month, range 18–23 Oct 2026
    AmenitiesModal.tsx
    ReviewsModal.tsx
    SimilarStays.tsx
    Footer.tsx
    gallery/PhotoTour.tsx # overlay + Lightbox (slide-up, filmstrip, rooms)
    sections/*            # GuestFavourite, Highlights, Sleeps, Amenities,
                          # Calendar, Reviews, Map, Host
  data/listing.ts         # photos, amenities, reviews, host, similar stays
  lib/icons.tsx           # Airbnb-style stroke icon set
  lib/useReveal.ts        # scroll-reveal helper
```

> Note: the live reference URL blocks automated fetching (Vercel security
> checkpoint), so imagery uses stable placeholder photos (`picsum.photos`
> seeds). Swap `src/data/listing.ts` image URLs with the real listing photos to
> match the reference content exactly; layout, type scale and motion are
> already implemented to the reference's authored values.