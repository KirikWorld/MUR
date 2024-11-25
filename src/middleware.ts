import i18nMiddleware from "@/middlewares/i18n";
import { NextRequest } from "next/server";
import { errorHandlerMiddleware } from "@/middlewares/errorHandler";

export async function middleware(request: NextRequest) {
  if (request.nextUrl.pathname.match(/^(?!\/api|\/_next|\/image|\/favicon.ico|\/docs|\/public|\/static).*$/)) {
    return i18nMiddleware(request);
  }

  return errorHandlerMiddleware(request);
}

export const config = {
  matcher: "/:path*"
};
