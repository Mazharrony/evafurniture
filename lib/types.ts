export type NavLink = {
  label: string;
  href: string;
};

export type Sector = {
  slug: string;
  name: string;
  arabic: string;
  tagline: string;
  intro: string;
  description: string[];
  cover: string;
  gallery: string[];
  offerings: string[];
  stats: { value: string; label: string }[];
};

export type Service = {
  slug: string;
  title: string;
  tagline: string;
  description: string;
  image: string;
  features: string[];
  icon: string;
};

export type Project = {
  slug: string;
  title: string;
  category: string;
  sector: string;
  location: string;
  year: string;
  summary: string;
  description: string[];
  cover: string;
  gallery: string[];
  scope: string[];
  area: string;
};

export type Collection = {
  slug: string;
  name: string;
  tagline: string;
  description: string;
  cover: string;
  pieces: CollectionPiece[];
  materials: string[];
};

export type CollectionPiece = {
  name: string;
  type: string;
  price: string;
  image: string;
};

export type Post = {
  slug: string;
  title: string;
  excerpt: string;
  category: string;
  date: string;
  readTime: string;
  author: string;
  cover: string;
  body: string[];
};

export type Testimonial = {
  quote: string;
  author: string;
  role: string;
};
