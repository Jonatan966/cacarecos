import { authMiddleware } from "@clerk/nextjs";

export default authMiddleware({
  publicRoutes: ["/", "/products(.*)", "/cart"],
});

export const config = {
  matcher: ["/((?!.*\\..*|_next).*)", "/"],
};
