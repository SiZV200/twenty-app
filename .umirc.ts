import { defineConfig } from "umi";

export default defineConfig({
  routes: [
    { path: "/", component: "messages" },
    { path: "/message/:id", component: "messageDetail" },
  ],
  npmClient: 'pnpm',
  mock: {
    include: ['src/mock/**/*.ts'],
  },
});
