import * as z from "zod";

// const imgType = z
//   .instanceof(File)
//   .refine((file) => file.type.startsWith("image/"), {
//     message: "File must be an image",
//   })
//   .refine((file) => file.size <= 5 * 1024 * 1024, {
//     message: "File size must be less than 5MB",
//   });

export default pageSchema = z.object({
  pageName: z.string().max(100),
  pageType: z.string().max(100),
  content: z.object({
    heading: z.string(),
    body: z.string(),
    links: z.map(z.string(), z.string()),
    tags: z.array(),
  }),
});
