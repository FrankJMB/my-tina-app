import { defineConfig } from "tinacms";

// Your hosting provider likely exposes this as an environment variable
// const branch = process.env.HEAD || process.env.VERCEL_GIT_COMMIT_REF || "main";
const branch = "main";

export default defineConfig({
  clientId: "d461681f-7da8-477b-a813-56376570c383",
  branch: "main",
//  branch:
//    process.env.TINA_BRANCH || // custom branch env override
//    process.env.VERCEL_GIT_COMMIT_REF! || // Vercel branch env
//    process.env.HEAD!, // Netlify branch env
  token: "a58be7d055808e32726b28f86a6ed04d191ab327",
  build: {
    outputFolder: "admin",
    publicFolder: "static",
  },
  media: {
    tina: {
      mediaRoot: "uploads",
      publicFolder: "static",
    },
  },
  schema: {
    collections: [
      {
        name: "post",
        label: "Posts",
        path: "content/posts",
        fields: [
          {
            type: "string",
            name: "title",
            label: "Title",
            isTitle: true,
            required: true,
          },
          {
            type: "datetime",
            label: "Date",
            name: "date",
          },
          {
            type: "boolean",
            name: "draft",
            label: "Draft",
          },
          {
            type: "rich-text",
            name: "body",
            label: "Body",
            isBody: true,
          },
        ],
      },
    ],
  },
});
