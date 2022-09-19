export default {
  name: "featured",
  title: "Featured Resturant",
  type: "document",
  fields: [
    {
      name: "name",
      title: "Featured Name",
      type: "string",
      validation: (Rule) => Rule.required(),
    },
    {
      name: "short_description",
      title: "Short Description of Feature",
      type: "string",
      validation: (Rule) => Rule.max(200),
    },
    {
      name: "resturant",
      title: "Resturants",
      type: "array",
      of: [{ type: "reference", to: [{ type: "resturant" }] }],
    },
  ],
};
