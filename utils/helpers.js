import axios from 'axios';

export const getEllipsisTxt = (str, n = 6) => {
  if (str) {
    return `${str.substr(0, n)}...${str.substr(str.length - n, str.length)}`;
  }
  return '';
};

export const fetchCurrentPrice = async (symbol) => {
  await axios.get(
    `https://min-api.cryptocompare.com/data/price?fsym=ONE&tsyms=USD&api_key={91567bde561a987a996db00ddca1add8323f6c965aac1eae074592fd3d556df3}`
  );
};
