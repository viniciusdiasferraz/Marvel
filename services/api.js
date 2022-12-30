import axios from "axios";
import md5 from "md5";

const publicKey = "049e5143c252f27707c61ecafc1ac954";
const privateKey = "3b22ac5470f0e341c038768118c63e67bfe3f1bd";

const ts = Number(new Date());

const hash = md5(ts + privateKey + publicKey);

const Api = axios.create({
  baseURL: "http://gateway.marvel.com/v1/public/",
  params: {
    ts,
    apikey: publicKey,
    hash,
  },
});

export default Api;
