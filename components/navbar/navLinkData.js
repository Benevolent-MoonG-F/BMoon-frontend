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
    title: 'DAO',
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
    title: 'DAO',
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
    title: 'Whitepaper',
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
