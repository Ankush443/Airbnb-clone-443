# Instruction Manual for the Terminal Agent

**Project:** Pixel-perfect clone of an Airbnb listing page ("Romantic Jacuzzi 1BHK Candolim | Mirashya UG10")
**Reference (single source of truth):** https://airbnb-clone-umber-two.vercel.app
**Goal:** Reproduce the reference exactly, in visual design, motion, interaction and accessibility, using original code.

Read this whole manual before writing any code. Follow the sections in order. When this manual and the reference disagree, the reference wins.

---

## 1. Ground Rules

1. **Originality is mandatory.** Write every line of code yourself. Do not copy, download, mirror or "save as" the reference's HTML, CSS, JavaScript bundles, source maps or component code. Do not use site-scraping tools (wget, httrack, curl of bundles, etc.) to lift the codebase. A lift-and-shift will be penalized or disqualified.
2. **Observe, then rebuild.** Study the reference by rendering it in a browser (Playwright/Chromium), taking screenshots, measuring layout in DevTools, and recording behavior. Then implement from scratch.
3. **Assets** (photos, logos, icons) must look identical to the reference. Reproduce them as image files in `/public`, and never hot-link them from the reference domain. Icons should be your own inline SVGs or from an open icon set, matched to the reference visually.
4. **Never invent content.** Every string, number, name and date must match the reference. If text is unreadable, re-inspect at full resolution and do not guess. If it still can't be read, flag it in your report.
5. **Change only what differs.** After the first full build, work as a diff: compare, list mismatches, fix them, re-compare. Don't rewrite sections that already match.
6. **Report honestly.** At the end of each task, list what you changed, what you could not match, and any assumption you made.

---

## 2. Tech Stack and Project Setup

- **Framework:** Next.js (App Router) + TypeScript
- **Styling:** Tailwind CSS with design tokens in `tailwind.config` / CSS variables (see §3)
- **Icons:** inline SVG components in `components/icons/`
- **State:** React state/hooks only (no heavy state library needed)
- **Deployment target:** Vercel (case-sensitive file system: filenames and import paths must match exactly)
- **Tooling:** ESLint, Prettier, `npm run build` must pass with zero errors

Suggested structure:

```
app/
  layout.tsx
  page.tsx                       # listing page
  rooms/[id]/photos/page.tsx     # photo tour (or use a full-screen overlay, see §7)
components/
  header/            Header, SearchPill, UserMenu
  gallery/           PhotoGrid, ShowAllPhotos
  listing/           Summary, GuestFavouriteCard, HostRow, Highlights, Description, Sleeping, Amenities
  booking/           PromoCard, BookingCard, DatePicker, GuestsPicker, StickySubNav
  reviews/           ReviewsHero, RatingBreakdown, CategoryChips, ReviewGrid, ReviewsModal
  host/              MeetYourHost, ThingsToKnow, MoreStaysNearby
  ui/                Modal, Button, Divider, Avatar
  icons/
public/
  images/            gallery, tour, logos (lowercase, no spaces, e.g. mirashya-logo.png)
lib/
  data.ts            all listing content in one typed object
```

Keep all listing content (title, host, reviews, amenities, prices) in `lib/data.ts` so components stay presentational.

---

## 3. Design Tokens

| Token | Value |
|---|---|
| Text primary | `#222222` |
| Text secondary | `#717171` |
| Border / divider | `#DDDDDD` |
| Surface grey (buttons, chips hover) | `#F2F2F2` / `#F7F7F7` |
| Brand red | `#FF385C` |
| Reserve gradient | `linear-gradient(to right, #E61E4D, #D70466)` |
| Reserve (sticky bar) | `#E31C5F` |
| Host green (logo bg) | `#0F4A3A` |
| Radius | 8px (inputs/buttons), 12px (images), 16px (cards), 24px (host card), 9999px (pills) |
| Container | ~1154px max width, centered, side padding responsive |

- **Font:** an Airbnb-Cereal-like sans (use Inter or a close match, weights 400/500/600/700 with system fallback). Measure the reference's font sizes and line heights and reproduce them exactly.
- Define spacing, font sizes and shadows as tokens after measuring. Do not eyeball each component separately.

---

## 4. Page Structure (top to bottom)

Build in this order, verifying each against the reference before moving on.

### 4.1 Header (≈88px, white, 1px bottom border)
- **Logo:** the official red (`#FF385C`) Airbnb "Bélo" outline mark plus lowercase "airbnb" wordmark, left edge ≈ x 82. Use a clean SVG, keep the aspect ratio, and add nothing else beside it (no badge, box, tagline or grey block). Do not hand-draw the path; use a correct SVG asset.
- **Search pill** (centered, ≈415×48, 1px border, fully rounded, soft shadow): small **raster house image** (a real 3D-looking house, ≈30×30, light walls, red door accent, small green tree; this is an `<img>`, not an SVG or emoji), then `Anywhere` | `Anytime` | `Add guests` (last one grey placeholder), dividers between, and a 34px circular red search button with white magnifier at the right end.
- **Right cluster:** "Become a host" text, then globe and hamburger icons in 40px circular `#F2F2F2` buttons. Right edge ≈ x 1824.

### 4.2 Title row
- H1 "Romantic Jacuzzi 1BHK Candolim | Mirashya UG10" (~26px, weight 600).
- Right: **Share** (upload icon + underlined label) and **Save** (outline heart + underlined label). Save toggles a filled red heart.
- No breadcrumb above the title. No rating line below it.

### 4.3 Photo gallery (~508px tall)
- One large image on the left (~50% width) and a 2×2 grid on the right, 8px gaps, only outer corners rounded (12px).
- Five images in order: (1) living area with rattan chairs, grey stone-tile wall and wall lights; (2) rattan sofa set with white ottoman; (3) jacuzzi on wooden deck beside big window; (4) bedroom; (5) aerial exterior with yellow/white building and pink-red roof.
- **"Show all photos"** button: bottom-right of the grid, white, 1px border, radius 8px, 3×3 dots icon.
- Clicking any image or the button opens the Photo Tour (§7).

### 4.4 Listing summary (left column ≈ 672px) and booking column (right ≈ 383px)

**Left column**
- "Entire serviced apartment in Candolim, India" (~24px, 600) and "3 guests · 1 bedroom · 1 bed · 1 bathroom".
- **Guest favourite card:** 1px border, radius 16, ≈84px tall. Zone 1: laurel icons flanking bold two-line "Guest / favourite" (Title case). Zone 2: "One of the most loved homes on Airbnb, according to guests". Zone 3: "4.95" with 5 solid black stars beneath, vertical divider, then "19 / Reviews".
- **Laurels:** the left laurel is the source asset and the right one is its horizontal mirror (`transform: scaleX(-1)`). Both must be symmetrical.
- **Host row:** 48px round avatar using the Mirashya logo image, "Hosted by Mirashya Homes", "2 years hosting" (grey).
- Divider, then **highlights** (24px line icon + semibold title + grey description):
  1. Outdoor entertainment: "The pool and alfresco dining are great for summer trips."
  2. Designed for staying cool: "Beat the heat with the A/C and ceiling fan."
  3. Self check-in: "Check yourself in with the building staff."
- **Description:** grey rounded note "Some info has been automatically translated. Show original", then the paragraph clamped to ~5 lines with an underlined "Show more ›" that opens a modal with the full text. Copy the text verbatim from the reference.
- **Where you'll sleep:** two photo cards side by side (bedroom, living room) with captions, verbatim from the reference.
- **What this place offers:** 2-column list of amenities with icons in the reference's exact order, unavailable items greyed with line-through, and an outlined "Show all N amenities" button that opens a modal (grouped list with a close button).
- **Calendar:** heading "5 nights in Candolim", subtext with the selected range, two months side by side (October 2026, November 2026) with prev/next arrows, selected start/end as solid black circles, range fill in light grey, unavailable dates greyed, keyboard icon bottom-left and underlined "Clear dates" bottom-right.

**Right column (sticky, `top ≈ 24px`)**
- **Promo card:** green tag icon, "Get 10% off your next stay." with underlined "Terms apply", grey "Claim" button.
- **Booking card** (1px border, radius 16, soft shadow, 24px padding):
  - "₹28,499" (22px, 600, underlined) + "for 5 nights".
  - Date box: CHECK-IN | CHECKOUT cells (10/18/2026, 10/23/2026), full-width GUESTS row "2 guests" with chevron.
  - Grey banner: "Free cancellation before **17 October**".
  - Full-width gradient pill **Reserve** button (~50px tall) and "You won't be charged yet".
  - Below the card: flag icon + underlined "Report this listing".

### 4.5 Sticky sub-navigation
- Hidden at first. It slides in after the user scrolls past the gallery.
- Tabs: **Photos, Amenities, Reviews, Location** (no "Overview"). Active tab has a 2px dark underline (scroll-spy).
- Right side: "₹28,499 for 5 nights" with "★ 4.95 · 19 reviews", plus a red pill **Reserve** button (`#E31C5F`, ≈100×42).
- Tabs smooth-scroll to sections with correct offset for the sticky bars.

### 4.6 Reviews section
- **Hero:** giant "4.95" (~100–110px, weight 700) flanked by large dark laurel icons (~50×90 each, right one mirrored, soft shadow), "Guest favourite" (24px, 600), a two-line description (max width ≈ 430px), and underlined "How reviews work".
- **Rating breakdown:** 7 columns separated by 1px vertical dividers.
  - Column 1: "Overall rating" with bars 5→1 (5 nearly full, 4 a small sliver, 3/2/1 empty).
  - Columns 2–7: Cleanliness 5.0, Accuracy 5.0, Check-in 5.0, Communication 5.0, Location 4.8, Value 4.8, each with a consistent 32px line icon (spray bottle, circle-check, key, chat bubble, folded map, tag).
- **Category chips:** single horizontally scrollable row (Comfort 6, Accuracy 5, Hot tub 5, Condition 4, Hospitality 8, Cleanliness 4, Amenities 2, …), no visible scrollbar, last chip clipped at the edge.
- **Review grid:** 2 columns, 6 reviews (Amit, Aheesh, Samiksha, Vedant, Vaibhav S, plus the last reviewer shown in the reference), round avatars (photo or colored initial), name, "N months/years on Airbnb", 5 solid black stars · relative date, body clamped to 4 lines with underlined "Show more". Copy names, dates and text verbatim.
- Outlined **"Show all 19 reviews"** button opens a reviews modal.

### 4.7 Map ("Where you'll be")
- Section heading, location text, map area as in the reference, plus the explanatory text and "More about this area" link.

### 4.8 Meet your host
- H2 "Meet your host".
- **Left card** (~350px, radius 24, soft shadow): 90px round Mirashya logo with red verified-check badge at bottom-right; "Mirashya Homes" (~28px, 600) and "Host"; vertical divider; stacked stats separated by thin lines: **1,463 Reviews**, **4.68★ Rating**, **2 Years hosting**.
- Under the card: "Born in the 80s" and "Where I went to school: NICMAR GOA" with icons.
- **Right side:** "Co-Hosts" (3-column grid, 32px avatars): Sharath, Aman Dev Pahwa, Maria Karen Priyanka, Simran, Pallavi, Sanyukta, Shruti (pink circle "S"), Amisha (light-blue circle "A"). Then "Host details": "Response rate: 100%", "Responds within an hour", a grey "Message host" button and the shield-icon payment-safety note.

### 4.9 Things to know
Three equal columns, each with a line icon above the title:
- **Cancellation policy:** "Free cancellation before 17 October. Cancel before check-in on 18 October for a partial refund." / "Review this host's full policy for details." / underlined "Learn more".
- **House rules:** "Check-in after 2:00 pm", "Checkout before 11:00 am", "3 guests maximum", "Learn more".
- **Safety & property:** "Carbon monoxide alarm not reported", "Smoke alarm not reported", "Exterior security cameras on property", "Learn more".

### 4.10 More stays nearby
- H2 at left; at right "1 / 2" and two 34px circular outlined arrow buttons (left disabled on page 1).
- Carousel of 10 cards (5 per page × 2 pages), ≈214px wide, rounded image tops, 8px gaps. Arrows page the carousel and update the counter.

### 4.11 Footer
- Columns and bottom row (copyright, Privacy / Terms / Sitemap, language, currency) as in the reference. The page must end at the footer with no extra blank space below it.

---

## 5. Interactions and Behavior

Implement every behavior the reference shows. Test each one in the browser.

| Area | Behavior |
|---|---|
| Header | Hover states on search segments, buttons and menu icons. Menu button toggles a dropdown (closes on outside click and Esc). |
| Share / Save | Save toggles filled heart with a subtle scale animation. |
| Gallery | Image hover dims slightly. Click opens Photo Tour. |
| Sticky sub-nav | Appears/disappears with a slide+fade tied to scroll position. Scroll-spy sets the active tab. Click smooth-scrolls to the section. |
| Booking card | Sticky within the left content's height range. Clicking date cells opens the date picker. Guests row opens a dropdown (max 3 guests, adults/children/infants steppers with min/max disabled states). |
| Calendar | Choose check-in then check-out (range highlight on hover), "Clear dates" resets. Nights count and the heading ("N nights in Candolim") update. Displayed total updates proportionally (₹28,499 ÷ 5 nights per night, rounded); flag this assumption in your report. |
| Modals | "Show more", "Show all amenities", "Show all reviews" open accessible modals (see §8). |
| Reviews | "Show more" expands a clamped review. Chips row scrolls horizontally with the mouse wheel/drag/touch. |
| Carousel | Prev/next buttons page with a translate transition, update the "n / 2" counter, and disable at the ends. |
| Reserve | Button hover state and pressed state, as in the reference. |

### Motion
- Reproduce the reference's transition durations and easings (measure them with DevTools). If none can be measured, use 150–250 ms ease-out for hovers and 300 ms cubic-bezier(0.2, 0, 0, 1) for panels and modals.
- Animated: hover color/scale changes, sub-nav appearance, modal fade/scale, carousel slide, heart toggle, calendar day hover.
- Respect `prefers-reduced-motion: reduce` by disabling non-essential motion.

---

## 6. Assets

- Save everything under `/public/images/` using lowercase, hyphenated filenames, and reference them as `/images/<name>` (never `/public/...`).
- Required assets: five gallery images, the Photo Tour images (§7), the Mirashya logo (`mirashya-logo.png`, min 256×256, square crop of the round logo), the house image for the search pill (`anywhere-house.png`, ≥64×64), avatars, and "more stays" card images.
- If a `next/image` is used, set explicit `width`/`height` (or `fill` with a sized parent) and configure `next.config.js` for any remote domain (prefer local files).
- Every image gets meaningful `alt` text. Decorative icons get `aria-hidden="true"`.
- **Broken-image safety:** the Mirashya avatar must have an `onError` fallback (dark green circle with cream "MIRASHYA" text) so a broken icon never shows. If the logo fails to load, debug in the Network tab: check the URL, file case, path prefix, commit status and file size before changing anything else.

---

## 7. Photo Tour ("Show all photos")

Opens a full-screen white view (route `/rooms/[id]/photos` or a fixed overlay with a z-index above the header) and locks body scroll while open.

- **Top bar (~100px):** back chevron at left (closes/returns), centered "Photo tour" (16px, 600), share and outline-heart icons at right.
- **Content column:** ~1006px wide, centered.
- **Category strip:** thumbnails ≈115×108, radius 8, 12px gap, label below (14px, `#717171`). Row 1: Living room 1, Living room 2, Full kitchen, Bedroom, Full bathroom, Gym, Exterior, Pool. Row 2: "Additional photos". Clicking a thumbnail smooth-scrolls to its section, and the active thumbnail is highlighted while scrolling.
- **Sections** (two columns, ≈500px pitch):
  - Left: room name (~34px, 600, tight letter-spacing) and a grey subtitle of amenities separated by " · " (e.g. Living room 1: "Sofa · Air conditioning · Ceiling fan · TV"; Living room 2: "Ceiling fan · Hot tub"). Only include subtitles that the reference shows.
  - Right (≈472px wide): first image full width (~472×314), following images in pairs (~230×153 each), radius 12, 12px gaps.
- Image content per category: Living room 1 (yellow lower wall, orange leather sofa, dining set, rug), Living room 2 (grey stone-tile wall, rattan furniture, jacuzzi), Full kitchen (orange cabinets, green tiles), Bedroom (white bed, mirrored wardrobe), Full bathroom (round mirror, marble walls), Gym (treadmill, bike, dumbbells), Exterior (aerial building shot), Pool (blue courtyard pool), Additional photos (grey tile wall room with jacuzzi).
- The main-page gallery must reuse these same images.
- Esc and the back button close the view and return focus to the "Show all photos" button.

---

## 8. Accessibility and Keyboard Support

- **Semantics:** one `<h1>`, ordered headings, landmarks (`header`, `nav`, `main`, `section` with `aria-labelledby`, `footer`). Add a "Skip to content" link that appears on focus.
- **Focus:** every interactive element is reachable with Tab in visual order and has a clearly visible focus ring (match the reference's style; use `:focus-visible`). Never remove outlines without a replacement.
- **Modals/dialogs:** `role="dialog"`, `aria-modal="true"`, labelled by their title. Move focus into the dialog on open, trap Tab/Shift+Tab inside, close on Esc and backdrop click, and restore focus to the trigger on close. Lock background scroll.
- **Dropdowns (menu, guests):** button with `aria-expanded` / `aria-haspopup`, arrow-key navigation where appropriate, Esc to close.
- **Calendar:** grid roles, arrow-key navigation between days, Enter/Space to select, `aria-label` with the full date (e.g. "Sunday, 18 October 2026"), and `aria-disabled` on unavailable days.
- **Carousel:** prev/next buttons with `aria-label`, disabled state exposed via `disabled`, live region announcing "Page 1 of 2".
- **Sticky sub-nav:** `aria-current="true"` on the active tab.
- **Images/icons:** alt text or `aria-hidden` as appropriate. Icon-only buttons need `aria-label`.
- **Color contrast:** at least WCAG AA for text and controls.
- **Motion:** honor `prefers-reduced-motion`.

---

## 9. Responsive Behavior

Match the reference at these widths and check for horizontal overflow at each: 1903, 1440, 1024, 768, 390.

- Below ~1128px the booking column collapses. On mobile, show a sticky bottom bar with price and a red **Reserve** button.
- Gallery becomes a single swipeable image with an "1 / 5" counter on mobile.
- Two-column sections stack. Wide content (calendar, chips) scrolls inside its own container.

---

## 10. Working Method

1. **Capture the reference.** Using Playwright, take full-page and viewport screenshots at 1903px (and the widths above), and record hover/focus/scroll behavior. Save them in `/reference` (not shipped) for comparison.
2. **Scaffold** the project and tokens, then add `lib/data.ts` with the content.
3. **Build section by section** in the order of §4, one component at a time, and screenshot each to compare with the reference before continuing.
4. **Add interactions and motion** (§5) once the static layout matches.
5. **Photo Tour** (§7), then **accessibility pass** (§8), then **responsive pass** (§9).
6. **Diff pass.** Screenshot the clone at the same viewports and compare side by side (or with a pixel-diff script). List every mismatch in spacing, size, color, text, icon and behavior, and fix them.
7. **Quality gates:** `npm run build` passes, no console errors or warnings, no broken images (Network tab shows no 404s), Lighthouse accessibility score ≥ 95.

---

## 11. Common Pitfalls to Avoid

- Broken assets on Vercel due to path prefix (`/public/...`), filename case, or spaces.
- Adding elements that the reference does not have (breadcrumbs, extra rating lines, always-visible tab bars, brand names, extra badges next to the logo).
- Using generic stock photos in place of the listing's actual images.
- Uppercase "GUEST FAVOURITE" (it is Title case), outline instead of solid black stars, and non-mirrored right laurel.
- Extra blank space below the footer (remove any fixed `min-height` or stray spacers).
- Tiny, clipped or inconsistent icons in the rating breakdown row.
- Missing scroll offset for sticky bars, causing anchors to hide behind them.
- Guessing text instead of reading it from the reference.

---

## 12. Definition of Done

- [ ] Every section in §4 matches the reference in layout, spacing, typography, color and content.
- [ ] Every interaction in §5 works, with matching motion.
- [ ] Photo Tour opens, scrolls to sections, closes and restores focus.
- [ ] Full keyboard operation and screen-reader semantics per §8.
- [ ] Responsive at all listed widths without horizontal scroll.
- [ ] No 404s, no console errors, production build passes.
- [ ] All code is original: no copied source, bundles or components from the reference.
- [ ] Final report lists changes, unmatched details and assumptions.

---

## 13. Final Report Format

When finished, output:

1. **Summary of what was built** (per section number).
2. **Deviations:** anything that does not match the reference, and why.
3. **Assumptions:** for example, the per-night price calculation and any text that couldn't be read.
4. **How to run:** install, dev, build and deploy commands.
5. **Verification:** the screenshots or diff results supporting the match.
