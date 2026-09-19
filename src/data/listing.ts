export interface Photo {
  id: number;
  src: string;
  alt: string;
  room: string;
}

export interface Host {
  name: string;
  avatar: string;
  hosting: string;
  reviews: string;
  hostRating: string;
  years: string;
  responseRate: string;
  responseTime: string;
  facts: string[];
}

const IMG = "/assets/images";

export const listing = {
  title: "Romantic Jacuzzi 1BHK Candolim | Mirashya UG10",
  subtitle: "Entire serviced apartment in Candolim, India",
  specs: "3 guests · 1 bedroom · 1 bed · 1 bathroom",
  rating: 4.95,
  reviewCount: 19,
  reviewLabel: "19 reviews",
  price: "₹28,499",
  priceNights: "for 5 nights",
  checkIn: "10/18/2026",
  checkOut: "10/23/2026",
  guests: "2 guests",
  freeCancelDate: "17 October",
  location: "Candolim, Goa, India",
  mapQuery: "Candolim Goa India",
  host: {
    name: "Mirashya Homes",
    avatar: "/images/mirashya-logo.png",
    hosting: "2 years hosting",
    reviews: "1,463",
    hostRating: "4.68",
    years: "2",
    responseRate: "Response rate: 100%",
    responseTime: "Responds within an hour",
    facts: ["Born in the 80s", "Where I went to school: NICMAR GOA"],
  },
  heroImages: [
    { src: "/images/hero-1.jpg", alt: "Living room 1" },
    { src: "/images/hero-2.jpg", alt: "Living room 2" },
    { src: "/images/hero-3.jpg", alt: "Hot tub" },
    { src: "/images/hero-4.jpg", alt: "Bedroom" },
    { src: "/images/hero-5.jpg", alt: "Exterior" },
  ],
  highlights: [
    { icon: "pool", title: "Outdoor entertainment", text: "The pool and alfresco dining are great for summer trips." },
    { icon: "fan", title: "Designed for staying cool", text: "Beat the heat with the A/C and ceiling fan." },
    { icon: "door", title: "Self check-in", text: "You can check in with the building staff." },
  ],
  description:
    "🌴 Plan Your Relaxing Holiday at Amor De Goa by Mirashya Homes! ✨ Stay in this cozy 1BHK in the heart of Candolim, featuring a private jacuzzi 🛁 for the perfect unwind. Enjoy high-speed WiFi 💻, Smart TV 📺, pet-friendly comfort 🐾, and stylish interiors. Just minutes from Candolim Beach 🏖️, popular cafés, restaurants, and nightlife 🍹, it’s ideal for couples seeking romance, relaxation, and a touch of luxury in North Goa. ❤️🌴",
  sleep: [
    { img: `${IMG}/67c61c6f-6260-4809-9510-0360e58a345d.jpeg`, title: "Bedroom", detail: "1 double bed" },
    { img: `${IMG}/a9831aeb-f441-44f5-a38f-4cf54e3f0fcf.jpeg`, title: "Living room", detail: "1 sofa" },
  ],
  amenities: [
    { icon: "kitchen", label: "Kitchen" },
    { icon: "wifi", label: "Wifi" },
    { icon: "laptop", label: "Dedicated workspace" },
    { icon: "parking", label: "Free parking on premises" },
    { icon: "pool", label: "Pool" },
    { icon: "jacuzzi", label: "Hot tub" },
    { icon: "paw", label: "Pets allowed" },
    { icon: "camera", label: "Exterior security cameras on property" },
    { icon: "smoke", label: "Carbon monoxide alarm", struck: true },
    { icon: "smoke", label: "Smoke alarm", struck: true },
  ],
  ratingsBreakdown: [
    { label: "Cleanliness", value: "5.0", icon: "spray" },
    { label: "Accuracy", value: "5.0", icon: "circle-check" },
    { label: "Check-in", value: "5.0", icon: "key" },
    { label: "Communication", value: "5.0", icon: "chat" },
    { label: "Location", value: "4.8", icon: "map-fold" },
    { label: "Value", value: "4.8", icon: "tag" },
  ],
  overallBars: [100, 6, 3, 3, 4],
  reviewChips: [
    { label: "Comfort", count: 6, img: `${IMG}/chips/comfort.png` },
    { label: "Accuracy", count: 5, img: `${IMG}/chips/accuracy.png` },
    { label: "Hot tub", count: 5, img: `${IMG}/chips/hot-tub.png` },
    { label: "Condition", count: 4, img: `${IMG}/chips/condition.png` },
    { label: "Hospitality", count: 8, img: `${IMG}/chips/hospitality.png` },
    { label: "Cleanliness", count: 4, img: `${IMG}/chips/cleanliness.png` },
    { label: "Amenities", count: 2, img: `${IMG}/chips/amenities.png` },
    { label: "Decor", count: 2, img: `${IMG}/chips/decor.png` },
    { label: "Indoor spaces", count: 2, img: `${IMG}/chips/indoor-spaces.png` },
    { label: "Location", count: 2, img: `${IMG}/chips/location.png` },
  ],
  coHosts: [
    { name: "Sharath", avatar: `${IMG}/avatars/co1.jpg`, initial: null, avatarBg: "" },
    { name: "Aman Dev Pahwa", avatar: `${IMG}/avatars/co2.jpg`, initial: null, avatarBg: "" },
    { name: "Maria Karen Priyanka", avatar: `${IMG}/avatars/co3.jpg`, initial: null, avatarBg: "" },
    { name: "Simran", avatar: `${IMG}/avatars/rev5.jpeg`, initial: null, avatarBg: "" },
    { name: "Pallavi", avatar: `${IMG}/avatars/rev1.jpeg`, initial: null, avatarBg: "" },
    { name: "Sanyukta", avatar: `${IMG}/avatars/rev2.jpeg`, initial: null, avatarBg: "" },
    { name: "Shruti", avatar: null, initial: "S", avatarBg: "#fde3ec" },
    { name: "Amisha", avatar: null, initial: "A", avatarBg: "#dcf1f6" },
  ],
  thingsToKnow: [
    { icon: "calendar-x", title: "Cancellation policy", lines: ["Free cancellation before 17 October. Cancel before check-in on 18 October for a partial refund.", "Review this host’s full policy for details."] },
    { icon: "key", title: "House rules", lines: ["Check-in after 2:00 pm", "Checkout before 11:00 am", "3 guests maximum"] },
    { icon: "shield", title: "Safety & property", lines: ["Carbon monoxide alarm not reported", "Smoke alarm not reported", "Exterior security cameras on property"] },
  ],
  neighbourhood:
    "Located in the heart of Candolim, Amor de Goa offers a peaceful stay with easy access to beaches, cafés, and popular attractions.",
  similar: [
    { title: "Beautiful Studio with a view to die for", price: "₹23,600", rating: "4.91", img: `${IMG}/similar/s1.jpeg` },
    { title: "NAQAB - 1bhk with private pool", price: "₹42,218", rating: "4.95", img: `${IMG}/similar/s2.jpeg` },
    { title: "Greentique Luxury Flat with plunge pool, Calangute", price: "₹44,506", rating: "4.94", img: `${IMG}/similar/s3.jpeg` },
    { title: "The Tropical Studio | 5 mins to Beach", price: "₹22,824", rating: "4.96", img: `${IMG}/similar/s4.jpeg` },
    { title: "Luxury Casa Bella 1BHK with plunge pool, Calangute", price: "₹39,942", rating: "4.95", img: `${IMG}/similar/s5.jpeg` },
    { title: "Kanso by Earthen Window | Jacuzzi | Terrace | Pool", price: "₹45,648", rating: "5.0", img: `${IMG}/similar/s6.jpeg` },
    { title: "Luxury Apt | Private Pool | 6 Mins from Beach", price: "₹48,786", rating: "4.93", img: `${IMG}/similar/s2.jpeg` },
    { title: "Serendipity Cottage - Calm Stay in Calangute-Baga.", price: "₹22,824", rating: "4.92", img: `${IMG}/similar/s4.jpeg` },
    { title: "2BHK Villa with private pool, Candolim", price: "₹41,200", rating: "4.90", img: `${IMG}/similar/s5.jpeg` },
    { title: "Amor De Goa - Sea-View Studio, Candolim", price: "₹24,150", rating: "4.94", img: `${IMG}/similar/s1.jpeg` },
  ],
};

// Ordered real photos for the tour + lightbox (mirrors the reference photo set).
const tourPhotos: { room: string; uuids: string[] }[] = [
  { room: "Living room 1", uuids: ["a9831aeb-f441-44f5-a38f-4cf54e3f0fcf", "a45feaa2-b607-4092-83ac-5fd4b2894959", "f1da1c3d-0d10-481e-9b63-c71f9073f30b"] },
  { room: "Living room 2", uuids: ["090d8b0b-b539-42c0-84f8-e1fb0cdf9a93", "9be71047-fc52-438a-9270-75cb470f6752", "f6de1663-4e9c-4414-b63b-29a154a92ee1", "2367476f-11c4-4a14-a7c6-267be62c1d59", "34529829-a971-44d3-ac2f-90ea3678a34d", "153aa732-4935-48b8-a6fe-b469b6af5efc", "3c6e6809-1bb1-47a6-8e24-aff593e1c28f"] },
  { room: "Full kitchen", uuids: ["56c44812-52c0-4481-90d8-101ec1f34c7a", "ddc853d7-e658-405c-bedc-8f31106c447e"] },
  { room: "Bedroom", uuids: ["67c61c6f-6260-4809-9510-0360e58a345d", "1c827136-4a85-4fe0-8e69-3fd8ea19bb17", "0622ab42-b851-4d55-9d9f-df3143bc5909", "a74e3c0b-3188-4442-9146-1cd4d6ea45df", "48a8ffbc-fbf7-4f84-bc29-ee400da3f08b", "3cf31697-f3f3-4c60-82c4-029acb119ae4"] },
  { room: "Full bathroom", uuids: ["97c78f8a-5090-4663-aebc-ba4e13b47092"] },
  { room: "Gym", uuids: ["9aa8e65f-94ac-4ba0-9a10-9ec91e536d22", "246bd88d-4dd6-4117-a401-02a36ebfcf16", "4fede77d-7a71-446f-89e3-263af937f3fa", "79f59adb-5a5f-4d6c-8109-1f01f4ca0d03", "f19d8c0a-1d88-42a4-9218-686d4f0db7e4"] },
  { room: "Exterior", uuids: ["23ea6621-6f74-4baa-acea-2fd03e312b41", "5adfdf3e-d497-4efc-ab8c-fc559dab311e", "608748cd-6ee7-4a71-88a2-ba79d3ddba5a", "5b856fde-a393-41bf-b373-c9d02e64221f", "c904e1ab-a39d-4ef0-bdea-8c0bd16b9e3d", "42befad7-fb29-473d-91db-b03e7a544d1d"] },
  { room: "Pool", uuids: ["fc02f48f-a937-42c5-895d-f9cc3113d6ca", "929545d3-e241-46c0-8a70-c24531ce7b54", "8eb65a8b-e795-4870-b141-6f63b1be24ae"] },
  { room: "Additional photos", uuids: ["70325367-cbae-4993-b560-18cd3f6edd53", "cc7a56bd-242c-498a-9aef-0cffac619e54", "30ad93b2-293f-494d-b645-626303c6cb93", "9642a60d-e9de-4e1a-89c2-9ebd230f4a74", "b6599f26-d65c-4df0-baf2-ef18c82a86a3", "dc01fd46-b119-48d3-a43b-f6c093e26eca", "fe37b80e-da8a-4225-b27b-dfbb5d763c01", "3c90338e-86b4-423f-aae1-279e0ccc3a18", "862d936c-0f34-4e50-af87-b519e2781d19", "79addceb-8c2d-419b-80ff-e29af426a94c"] },
];

let nextId = 1;
export const photos: Photo[] = [];
export const rooms: { label: string; photoIds: number[] }[] = [];
for (const t of tourPhotos) {
  const ids: number[] = [];
  for (const uuid of t.uuids) {
    ids.push(nextId);
    photos.push({ id: nextId, src: `${IMG}/${uuid}.jpeg`, alt: t.room, room: t.room });
    nextId += 1;
  }
  rooms.push({ label: t.room, photoIds: ids });
}

export type TourRoom = {
  id: string;
  title: string;
  subtitle?: string;
  thumb: string;
  layout: number[];
  images: { src: string; alt: string }[];
};

// Photo tour categories — same photos as the gallery, laid out in blocks
// (first image full-width, then pairs) and matching the reference subtitles.
const tourSpec: {
  id: string;
  title: string;
  subtitle: string;
  layout: number[];
  uuids: string[];
}[] = [
  { id: "living-room-1", title: "Living room 1", subtitle: "Sofa · Air conditioning · Ceiling fan · TV", layout: [1, 2], uuids: ["a9831aeb-f441-44f5-a38f-4cf54e3f0fcf", "a45feaa2-b607-4092-83ac-5fd4b2894959", "f1da1c3d-0d10-481e-9b63-c71f9073f30b"] },
  { id: "living-room-2", title: "Living room 2", subtitle: "Ceiling fan · Hot tub", layout: [1, 2, 1, 2, 1], uuids: ["090d8b0b-b539-42c0-84f8-e1fb0cdf9a93", "9be71047-fc52-438a-9270-75cb470f6752", "f6de1663-4e9c-4414-b63b-29a154a92ee1", "2367476f-11c4-4a14-a7c6-267be62c1d59", "34529829-a971-44d3-ac2f-90ea3678a34d", "153aa732-4935-48b8-a6fe-b469b6af5efc", "3c6e6809-1bb1-47a6-8e24-aff593e1c28f"] },
  { id: "full-kitchen", title: "Full kitchen", subtitle: "Freezer · Fridge · Blender · Cooker · Cooking basics · Kettle · Microwave · Toaster · Wine glasses · Coffee · Crockery and cutlery", layout: [2], uuids: ["56c44812-52c0-4481-90d8-101ec1f34c7a", "ddc853d7-e658-405c-bedc-8f31106c447e"] },
  { id: "bedroom", title: "Bedroom", subtitle: "Double bed · Air conditioning · Bed linen · Ceiling fan · Clothes storage · Cot · Hangers · Iron · Room-darkening blinds · Cleaning available during stay", layout: [1, 2, 1, 2], uuids: ["67c61c6f-6260-4809-9510-0360e58a345d", "1c827136-4a85-4fe0-8e69-3fd8ea19bb17", "0622ab42-b851-4d55-9d9f-df3143bc5909", "a74e3c0b-3188-4442-9146-1cd4d6ea45df", "48a8ffbc-fbf7-4f84-bc29-ee400da3f08b", "3cf31697-f3f3-4c60-82c4-029acb119ae4"] },
  { id: "full-bathroom", title: "Full bathroom", subtitle: "Hairdryer · Hot water · Shampoo · Shower gel", layout: [1], uuids: ["97c78f8a-5090-4663-aebc-ba4e13b47092"] },
  { id: "gym", title: "Gym", subtitle: "Air conditioning · Gym · Exercise equipment · Ceiling fan", layout: [1, 2, 2], uuids: ["9aa8e65f-94ac-4ba0-9a10-9ec91e536d22", "246bd88d-4dd6-4117-a401-02a36ebfcf16", "4fede77d-7a71-446f-89e3-263af937f3fa", "79f59adb-5a5f-4d6c-8109-1f01f4ca0d03", "f19d8c0a-1d88-42a4-9218-686d4f0db7e4"] },
  { id: "exterior", title: "Exterior", subtitle: "", layout: [1, 2, 1, 2], uuids: ["23ea6621-6f74-4baa-acea-2fd03e312b41", "5adfdf3e-d497-4efc-ab8c-fc559dab311e", "608748cd-6ee7-4a71-88a2-ba79d3ddba5a", "5b856fde-a393-41bf-b373-c9d02e64221f", "c904e1ab-a39d-4ef0-bdea-8c0bd16b9e3d", "42befad7-fb29-473d-91db-b03e7a544d1d"] },
  { id: "pool", title: "Pool", subtitle: "Pool", layout: [1, 2], uuids: ["fc02f48f-a937-42c5-895d-f9cc3113d6ca", "929545d3-e241-46c0-8a70-c24531ce7b54", "8eb65a8b-e795-4870-b141-6f63b1be24ae"] },
  { id: "additional", title: "Additional photos", subtitle: "", layout: [1, 2, 1, 2, 1, 2, 1], uuids: ["70325367-cbae-4993-b560-18cd3f6edd53", "cc7a56bd-242c-498a-9aef-0cffac619e54", "30ad93b2-293f-494d-b645-626303c6cb93", "9642a60d-e9de-4e1a-89c2-9ebd230f4a74", "b6599f26-d65c-4df0-baf2-ef18c82a86a3", "dc01fd46-b119-48d3-a43b-f6c093e26eca", "fe37b80e-da8a-4225-b27b-dfbb5d763c01", "3c90338e-86b4-423f-aae1-279e0ccc3a18", "862d936c-0f34-4e50-af87-b519e2781d19", "79addceb-8c2d-419b-80ff-e29af426a94c"] },
];

export const tourRooms: TourRoom[] = tourSpec.map((t) => ({
  id: t.id,
  title: t.title,
  subtitle: t.subtitle || undefined,
  thumb: `${IMG}/${t.uuids[0]}.jpeg`,
  layout: t.layout,
  images: t.uuids.map((uuid) => ({ src: `${IMG}/${uuid}.jpeg`, alt: t.title })),
}));

// Flat ordered list of every tour image — used by the lightbox (matches 1..43 numbering).
export const allPhotos = photos;

export type AmenityItem = { label: string; struck?: boolean };
export type AmenityGroup = { title: string; items: AmenityItem[] };

// 58 amenities across 12 categories — matches the "Show all 58 amenities" button.
export const amenityGroups: AmenityGroup[] = [
  { title: "Bathroom", items: [{ label: "Hairdryer" }, { label: "Cleaning products" }, { label: "Shampoo" }, { label: "Hot water" }, { label: "Shower gel" }, { label: "Soap" }] },
  { title: "Bedroom and laundry", items: [{ label: "Washing machine" }, { label: "Hangers" }, { label: "Bed linen" }, { label: "Room-darkening blinds" }, { label: "Iron" }, { label: "Clothes storage" }, { label: "Cot" }, { label: "Towels" }, { label: "Extra pillows and blankets" }, { label: "Drying rack" }] },
  { title: "Entertainment", items: [{ label: "TV" }, { label: "Smart TV" }, { label: "Speakers" }] },
  { title: "Family", items: [{ label: "Cot" }] },
  { title: "Heating and cooling", items: [{ label: "Air conditioning" }, { label: "Ceiling fan" }] },
  { title: "Home safety", items: [{ label: "Exterior security cameras on property" }, { label: "Carbon monoxide alarm", struck: true }, { label: "Smoke alarm", struck: true }] },
  { title: "Internet and office", items: [{ label: "Wifi" }, { label: "Dedicated workspace" }] },
  { title: "Kitchen and dining", items: [{ label: "Kitchen" }, { label: "Fridge" }, { label: "Freezer" }, { label: "Microwave" }, { label: "Cooking basics" }, { label: "Crockery and cutlery" }, { label: "Kettle" }, { label: "Coffee" }, { label: "Wine glasses" }, { label: "Toaster" }, { label: "Blender" }, { label: "Cooker" }, { label: "Induction cooktop" }, { label: "Rice cooker" }, { label: "RO water purifier" }] },
  { title: "Location features", items: [{ label: "Private entrance" }, { label: "Lift" }] },
  { title: "Outdoor", items: [{ label: "Patio or balcony" }, { label: "Outdoor dining area" }, { label: "Sun terrace" }, { label: "Sea view" }] },
  { title: "Parking and facilities", items: [{ label: "Free parking on premises" }, { label: "Pool" }, { label: "Hot tub" }, { label: "Gym" }, { label: "Rooftop pool" }, { label: "24×7 building security" }] },
  { title: "Services", items: [{ label: "Pets allowed" }, { label: "Cleaning available during stay" }, { label: "Long-term stays allowed" }, { label: "Self check-in" }] },
];

export const amenities = amenityGroups;

export const reviewCategories = listing.ratingsBreakdown;

export interface Review {
  id: number;
  name: string;
  meta: string;
  when: string;
  text: string;
  avatar: string;
  initial: string;
  avatarBg: string;
  avatarColor: string;
  tenure: string;
  posted: string;
  date: string;
  rating: number;
  verified: boolean;
  photo: string;
  tag: string;
}

export const reviews: Review[] = [
  { id: 1, name: "Amit", meta: "2 months on Airbnb", when: "1 week ago", text: "Very helpful and responsive team. Safe and peaceful stay. loved everything about the property.", avatar: "", initial: "A", avatarBg: "#f3d7c4", avatarColor: "bg-[#F2EBDD] text-[#8B6F47]", tenure: "2 months on Airbnb", posted: "1 week ago", date: "2026-10-12", rating: 5, verified: true, photo: "", tag: "" },
  { id: 2, name: "Aheesh", meta: "3 years on Airbnb", when: "2 weeks ago", text: "We had a wonderful stay. The apartment was clean, comfortable, and exactly as shown in the photos. The host was very responsive and helpful throughout our stay. We would definitely recommend this place and would love to stay here again.", avatar: `${IMG}/avatars/rev1.jpeg`, initial: "", avatarBg: "", avatarColor: "", tenure: "3 years on Airbnb", posted: "2 weeks ago", date: "2026-10-05", rating: 5, verified: true, photo: "", tag: "" },
  { id: 3, name: "Samiksha", meta: "8 months on Airbnb", when: "May 2026", text: "the host nitish was really great help", avatar: `${IMG}/avatars/rev2.jpeg`, initial: "", avatarBg: "", avatarColor: "", tenure: "8 months on Airbnb", posted: "May 2026", date: "2026-05-20", rating: 5, verified: true, photo: "", tag: "" },
  { id: 4, name: "Vedant", meta: "4 years on Airbnb", when: "May 2026", text: "We had an amazing stay at this property in Goa! The entire home was spotless and exceptionally well-maintained, making us feel comfortable from the moment we arrived. The cleanliness standards were truly impressive, with every corner of the house looking fresh and pristine.\nThe highlight of our stay was definitely the jacuzzi. It was clean, well-kept, and the perfect place to relax after a day of exploring Goa. It added a luxurious touch to our vacation and made our experience even more memorable.\nThe property was exactly as described, well-equipped, and offered a peaceful atmosphere. We would highly recommend this place to anyone looking for a comfortable, clean, and relaxing stay in Goa. Looking forward to visiting again!", avatar: "", initial: "V", avatarBg: "#c9b6e4", avatarColor: "bg-[#EEE6F5] text-[#6B4FA0]", tenure: "4 years on Airbnb", posted: "May 2026", date: "2026-05-18", rating: 5, verified: true, photo: "", tag: "" },
  { id: 5, name: "Vaibhav S", meta: "3 years on Airbnb", when: "May 2026", text: "Great great experience living out there , can't expect more , will always look for it in the future and will recommend my friends too.", avatar: `${IMG}/avatars/rev3.jpeg`, initial: "", avatarBg: "", avatarColor: "", tenure: "3 years on Airbnb", posted: "May 2026", date: "2026-05-14", rating: 5, verified: true, photo: "", tag: "" },
  { id: 6, name: "Mohd", meta: "5 years on Airbnb", when: "May 2026", text: "Great place. Exactly as described in the listing.", avatar: `${IMG}/avatars/rev4.jpeg`, initial: "", avatarBg: "", avatarColor: "", tenure: "5 years on Airbnb", posted: "May 2026", date: "2026-05-10", rating: 5, verified: true, photo: "", tag: "" },
];

export const host: Host = listing.host;