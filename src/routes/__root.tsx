import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import {
  Outlet,
  Link,
  createRootRouteWithContext,
  useRouter,
  HeadContent,
  Scripts,
} from "@tanstack/react-router";
import { useEffect, type ReactNode } from "react";
import { Toaster } from "sonner";

import appCss from "../styles.css?url";
import { Header } from "../components/site/Header";
import { Footer } from "../components/site/Footer";
import { reportLovableError } from "../lib/lovable-error-reporting";

function NotFoundComponent() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-background pattern-overlay px-4">
      <div className="max-w-md text-center">
        <h1 className="font-display text-7xl font-bold text-foreground">404</h1>
        <h2 className="mt-4 text-xl font-semibold text-foreground">Sayfa BulunamadÄ±</h2>
        <p className="mt-2 text-sm text-muted-foreground">
          AradÄ±ÄŸÄ±nÄ±z sayfa mevcut deÄŸil veya taÅŸÄ±nmÄ±ÅŸ olabilir.
        </p>
        <div className="mt-6">
          <Link
            to="/"
            className="inline-flex items-center justify-center rounded-full bg-forest px-6 py-3 text-xs uppercase tracking-[0.2em] font-medium text-offwhite transition-colors hover:bg-forest/90"
          >
            Ana Sayfaya DÃ¶n
          </Link>
        </div>
      </div>
    </div>
  );
}

function ErrorComponent({ error, reset }: { error: Error; reset: () => void }) {
  console.error(error);
  const router = useRouter();
  useEffect(() => {
    reportLovableError(error, { boundary: "tanstack_root_error_component" });
  }, [error]);

  return (
    <div className="flex min-h-screen items-center justify-center bg-background pattern-overlay px-4">
      <div className="max-w-md text-center">
        <h1 className="font-display text-xl font-semibold tracking-tight text-foreground">
          Sayfa YÃ¼klenemedi
        </h1>
        <p className="mt-2 text-sm text-muted-foreground">
          Beklenmeyen bir durum oluÅŸtu. Yeniden deneyebilir veya ana sayfaya dÃ¶nebilirsiniz.
        </p>
        <div className="mt-6 flex flex-wrap justify-center gap-3">
          <button
            onClick={() => {
              router.invalidate();
              reset();
            }}
            className="inline-flex items-center justify-center rounded-full bg-forest px-6 py-3 text-xs uppercase tracking-[0.2em] font-medium text-offwhite transition-colors hover:bg-forest/90"
          >
            Tekrar Dene
          </button>
          <a
            href="/"
            className="inline-flex items-center justify-center rounded-full border border-border bg-background px-6 py-3 text-xs uppercase tracking-[0.2em] font-medium text-foreground transition-colors hover:bg-sand/40"
          >
            Ana Sayfa
          </a>
        </div>
      </div>
    </div>
  );
}

export const Route = createRootRouteWithContext<{ queryClient: QueryClient }>()({
  head: () => ({
    meta: [
      { charSet: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { title: "TERRA â€” Peyzaj MimarlÄ±ÄŸÄ± & DÄ±ÅŸ MekÃ¢n TasarÄ±mÄ±" },
      {
        name: "description",
        content:
          "TERRA Peyzaj MimarlÄ±ÄŸÄ±; villa bahÃ§eleri, kamusal parklar, otel avlularÄ± ve kurumsal aÃ§Ä±k alanlar iÃ§in doÄŸa ve mimariyi buluÅŸturan premium peyzaj tasarÄ±mlarÄ± Ã¼retir.",
      },
      { name: "author", content: "TERRA Peyzaj MimarlÄ±ÄŸÄ±" },
      { property: "og:title", content: "TERRA â€” Peyzaj MimarlÄ±ÄŸÄ±" },
      {
        property: "og:description",
        content: "DoÄŸayÄ± ve mimariyi buluÅŸturan, iklime duyarlÄ± zamansÄ±z peyzaj projeleri.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [
      { rel: "preconnect", href: "https://fonts.googleapis.com" },
      { rel: "preconnect", href: "https://fonts.gstatic.com", crossOrigin: "anonymous" },
      {
        rel: "stylesheet",
        href: "https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:ital,wght@0,300;0,400;0,500;0,600;0,700;1,400&family=Syne:wght@400;500;600;700;800&display=swap",
      },
      {
        rel: "stylesheet",
        href: appCss,
      },
      { rel: "icon", href: "/favicon.ico", type: "image/x-icon" },
    ],
  }),
  shellComponent: RootShell,
  component: RootComponent,
  notFoundComponent: NotFoundComponent,
  errorComponent: ErrorComponent,
});

function RootShell({ children }: { children: ReactNode }) {
  return (
    <html lang="tr">
      <head>
        <HeadContent />
      </head>
      <body className="min-h-screen bg-background pattern-overlay text-foreground antialiased selection:bg-terracotta selection:text-primary-foreground">
        {children}
        <Scripts />
      </body>
    </html>
  );
}

function RootComponent() {
  const { queryClient } = Route.useRouteContext();

  return (
    <QueryClientProvider client={queryClient}>
      <div className="flex min-h-screen flex-col">
        <Header />
        <main className="flex-1">
          <Outlet />
        </main>
        <Footer />
        <Toaster position="bottom-right" richColors />
      </div>
    </QueryClientProvider>
  );
}
