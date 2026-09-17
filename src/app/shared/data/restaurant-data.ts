// ---------------------------------------------------------------------------
// Single source of truth for Matsya Amazon Kitchens content.
// Facts here (address, phone, hours, ratings, highlighted dishes, benefits)
// come directly from the client brief. Nothing here is invented.
// ---------------------------------------------------------------------------

export const restaurant = {
  name: 'Matsya Amazon Kitchens',
  tagline: 'Authentic Andhra flavours. Made to be remembered.',
  types: ['Andhra restaurant', 'Family restaurant', 'Fast food', 'Tea house', 'Highway stop'],
  address: 'Kurnool Road, Andhra Pradesh 518216, India',
  phone: '+91 91603 33332',
  phoneHref: 'tel:+919160333332',
  hoursLabel: '11:00 AM – 10:00 PM',
  hoursNote: 'Open every day',
  mapEmbedSrc:
    'https://www.google.com/maps?q=Matsya+Amazon+Kitchens+Kurnool+Road+Andhra+Pradesh+518216&output=embed',
  directionsHref:
    'https://www.google.com/maps/dir/?api=1&destination=Matsya+Amazon+Kitchens+Kurnool+Road+Andhra+Pradesh+518216'
};

export const ratings = {
  google: { score: 4.0, count: 4237, label: 'Google reviews' },
  tripadvisor: { score: 3.9, count: 13, label: 'Tripadvisor reviews' }
};

// Real reviews as supplied — nothing fabricated.
export const reviews = [
  {
    name: 'Subhrajit Chakraborty',
    quote: 'Good place to have your meal, decent price and service is good.',
    source: 'Google'
  },
  {
    name: 'Ajay Kumar',
    quote: 'Food is fresh, ordered chicken items, tastes good but lots of delays.',
    source: 'Google'
  },
  {
    name: 'Priyanku Baruah',
    quote: 'They served fried rice, a supposedly Chinese dish, with raita and gravy.',
    source: 'Google'
  }
];

// The brief names these dishes explicitly as "known / highlighted food" —
// not sourced from the unavailable menu photo, so safe to use as-is.
export const signatureDishes = [
  { name: 'Rayalaseema Roast', note: 'A Matsya highlight — smoky, spice-forward Rayalaseema style.' },
  { name: 'Chicken Andhra', note: 'The house chicken preparation, cooked in classic Andhra spice.' },
  { name: 'Tandoori Roti', note: 'Charred straight from the tandoor, made to order.' },
  { name: 'Biryani', note: 'Slow-cooked, layered, and one of the most-ordered plates on the table.' }
];

export const highlightedFoodGroups = [
  'Andhra cuisine',
  'Chicken dishes',
  'Seafood',
  'Vegetarian dishes'
];

export const highwayBenefits = [
  {
    title: 'Authentic Andhra food',
    detail: 'A proper Andhra kitchen, not a highway compromise.'
  },
  {
    title: 'Ample car parking',
    detail: 'Pull in, park easily, and get straight to the table.'
  },
  {
    title: 'Family friendly',
    detail: 'Built for families travelling together, not just solo stops.'
  },
  {
    title: "Children's play area",
    detail: 'Somewhere for the kids while the food is on its way.'
  },
  {
    title: 'Comfortable dining',
    detail: 'A proper sit-down room to rest before the next stretch of road.'
  }
];

// Menu categories are given directly in the brief. Individual dishes and
// prices are NOT — they depend on a menu photograph that was never
// attached to this conversation. Flagging rather than guessing, as
// instructed.
export interface MenuItem {
  name: string;
  price: string;
}

export interface MenuCategory {
  id: string;
  label: string;
  items: MenuItem[];
  pending: boolean;
}

export const menuCategories: MenuCategory[] = [
  { id: 'nonveg-starters', label: 'Non-Veg Starters', items: [], pending: true },
  { id: 'barbeque-sakaharam', label: 'Barbeque Sakaharam', items: [], pending: true },
  { id: 'mansaharam', label: 'Mansaharam', items: [], pending: true },
  { id: 'korameenu', label: 'Korameenu', items: [], pending: true },
  { id: 'rottelu', label: 'Rottelu', items: [], pending: true },
  { id: 'praramblam-soups', label: 'Praramblam / Soups', items: [], pending: true },
  { id: 'sakaharam', label: 'Sakaharam', items: [], pending: true },
  { id: 'kodi-guddu-spl', label: 'Kodi Guddu Spl', items: [], pending: true },
  { id: 'biriyanis', label: 'Biriyanis', items: [], pending: true },
  { id: 'kuralu-sakaharam', label: 'Kuralu Sakaharam', items: [], pending: true }
];

// Gallery placeholders — swap `src` for real files dropped into
// public/images/gallery once available. `tone` just varies the
// placeholder colour so the grid doesn't look uniform.
export interface GalleryPlaceholder {
  id: string;
  label: string;
  tone: 'clay' | 'charcoal' | 'gold' | 'cream';
  span: 'tall' | 'wide' | 'normal';
}

export const galleryPlaceholders: GalleryPlaceholder[] = [
  { id: 'g1', label: 'Restaurant exterior', tone: 'charcoal', span: 'wide' },
  { id: 'g2', label: 'Biryani', tone: 'clay', span: 'tall' },
  { id: 'g3', label: 'Rayalaseema Roast', tone: 'gold', span: 'normal' },
  { id: 'g4', label: 'Dining room', tone: 'cream', span: 'normal' },
  { id: 'g5', label: "Children's play area", tone: 'clay', span: 'normal' },
  { id: 'g6', label: 'Tandoori Roti', tone: 'charcoal', span: 'tall' },
  { id: 'g7', label: 'Parking', tone: 'cream', span: 'wide' },
  { id: 'g8', label: 'Seafood plate', tone: 'gold', span: 'normal' }
];
