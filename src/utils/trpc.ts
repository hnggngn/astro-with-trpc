import type { IAppRouter } from "@/server";
import { createTRPCProxyClient, httpBatchLink } from "@trpc/client";

export const trpc = createTRPCProxyClient<IAppRouter>({
  links: [
    httpBatchLink({
      url: import.meta.env.DEV
        ? "http://127.0.0.1:3000/api/trpc"
        : import.meta.env.PUBLIC_APP_URL,
    }),
  ],
});