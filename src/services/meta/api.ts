import ky from "ky";

export const metaApi = ky.create({
  prefixUrl: "/api",
});
