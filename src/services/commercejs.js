import Commerce from "@chec/commerce.js";

// const devEnvironment = process.env.NODE_ENV === "development";

const commerceConfig = {
  axiosConfig: {
    headers: {
      "X-Chec-Agent": "commerce.js/v2",
      "Chec-Version": "2021-09-29",
    },
  },
};

// if (devEnvironment && !checAPIKey) {
// if (!COMMERCEJS_API_KEY) {
//   throw Error(
//     "Your public API key must be provided as an environment variable named NEXT_PUBLIC_CHEC_PUBLIC_KEY. Obtain your Chec public key by logging into your Chec account and navigate to Setup > Developer, or can be obtained with the Chec CLI via with the command chec whoami"
//   );
// }

const commerce = new Commerce(
  import.meta.env.VITE_REACT_COMMERCEJS_PUBLIC_API,
  commerceConfig
);

export default commerce;
