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
    href: '/comingSoon',
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
    href: '/comingSoon',
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
    href: '/comingSoon',
    whitepaper: true,
  },
  {
    title: 'Developers',
    href: '/comingSoon',
  },
];
const mobileLandingPageLinks = [...menuLinks, ...landingPagelinks];

export { landingPagelinks, appLinks, menuLinks, mobileLandingPageLinks };
