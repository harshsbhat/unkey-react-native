import { Ratelimit } from "@unkey/ratelimit";
export const unkey = new Ratelimit({
    rootKey: process.env.UNKEY_ROOT_KEY!,
    namespace: "unkey-react-native",
    limit: 3,
    duration: "30s",
  });