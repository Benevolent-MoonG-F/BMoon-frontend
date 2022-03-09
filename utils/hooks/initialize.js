import Moralis from "moralis";

export const InitializeMoralis = async () => {
  await Moralis.initialize(process.env.NEXT_PUBLIC_APPID.toString());
  Moralis.serverURL = process.env.NEXT_PUBLIC_SERVERURL.toString();
  return Moralis;
};
export default InitializeMoralis;
