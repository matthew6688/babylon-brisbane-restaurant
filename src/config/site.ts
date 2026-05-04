export interface SiteConfig {
  name: string;
  tagline: string;
  description: string;
  email: string;
  domain: string;
  fromName: string;
  address?: string;
  phone?: string;
  rating?: number;
  review_count?: number;
  navLinks: { label: string; href: string }[];
  footer: { text: string };
}

export const siteConfig: SiteConfig = {
  name: 'Babylon Brisbane',
  tagline: 'Professional restaurant in Brisbane, Australia',
  description: 'Babylon Brisbane - restaurant in Brisbane, Australia. Rated 4.2/5 with 1381 reviews.',
  email: 'contact@babylon-brisbane.com',
  domain: 'babylon-brisbane.webjuice.fengtalk.ai',
  fromName: 'Babylon Brisbane',
  address: '145 Eagle St, Brisbane City QLD 4000, Australia',
  phone: '(07) 3186 6655',
  rating: 4.2,
  review_count: 1381,
  navLinks: [
    { label: 'Home', href: '/' },
    { label: 'About', href: '/about' },
    { label: 'Contact', href: '/contact' },
  ],
  footer: {
    text: 'Babylon Brisbane - 145 Eagle St',
  },
};
