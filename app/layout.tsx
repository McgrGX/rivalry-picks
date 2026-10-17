import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Rivalry Picks | Amazon vs Costco deals",
  description: "A static proof of concept comparing Amazon and Costco deals in beauty, home & kitchen, and fashion.",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
