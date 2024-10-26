// src/app/layout.tsx

import type { Metadata } from "next";
import { inter, lexendDeca } from "@/app/fonts";
import cn from "@core/utils/class-names";
import NextProgress from "@core/components/next-progress";
import HydrogenLayout from "@/layouts/hydrogen/layout";
import { ThemeProvider, JotaiProvider } from "@/app/shared/theme-provider";
import GlobalDrawer from "@/app/shared/drawer-views/container";
import GlobalModal from "@/app/shared/modal-views/container";
import SessionWrapper from "@/components/SessionWrapper"; // Import the SessionWrapper

import "./globals.css";

export const metadata: Metadata = {
  title: "App Name",
  description: "Write your app description",
};

export default function RootLayout({ children }: { children: React.ReactNode }): JSX.Element {
  return (
    <html suppressHydrationWarning>
      <body suppressHydrationWarning className={cn(inter.variable, lexendDeca.variable, "font-inter")}>
        <SessionWrapper> {/* Wrap children with SessionWrapper */}
          <ThemeProvider>
            <NextProgress />
            <JotaiProvider>
              <HydrogenLayout>{children}</HydrogenLayout>
              <GlobalDrawer />
              <GlobalModal />
            </JotaiProvider>
          </ThemeProvider>
        </SessionWrapper>
      </body>
    </html>
  );
}
