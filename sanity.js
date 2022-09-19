import sanityClient from "@sanity/client";
import createImageUrlBuilder from "@sanity/image-url";
const client = sanityClient({
  projectId: "o58eg32r",
  dataset: "production",
  useCdn: true,
  apiVersion: "2021-10-21",
});

const builder = createImageUrlBuilder(client);

export const urlFor = (source) => builder.image(source);

export default client;
