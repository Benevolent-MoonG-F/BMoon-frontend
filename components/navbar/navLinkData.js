const landingPagelinks = [
  {
    title: 'Home',
    href: '/',
  },
  {
    title: 'About',
    href: '/about',
  },
  {
    title: 'Community',
    href: '#',
  },
  {
    title: 'FAQs',
    href: '#',
  },
];
const appLinks = [
  {
    title: 'Dashboard',
    href: '#',
  },
  {
    title: 'New Order',
    href: '#',
  },
  {
    title: 'Community',
    href: '#',
  },
  {
    title: 'FAQs',
    href: '#',
  },
];

const menuLinks = [
  {
    title: 'Connect Wallet',
    href: '#',
    wallet: true,
  },
  {
    title: 'Whitepapers',
    href: '#',
    whitepaper: true,
  },
  {
    title: 'Developers',
    href: '#',
  },
];
const mobileLandingPageLinks = [...landingPagelinks, ...landingPagelinks];

export { landingPagelinks, appLinks, menuLinks, mobileLandingPageLinks };
