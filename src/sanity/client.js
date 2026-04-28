import { createClient } from "@sanity/client";
// im

export const client = createClient({
  projectId: "796cwoh5",
  dataset: "production",
  apiVersion: "2024-01-01",
  useCdn: true,
});