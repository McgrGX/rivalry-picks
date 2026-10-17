import type { Metadata } from "next";
import Link from "next/link";
import "./globals.css";

export const metadata: Metadata = {
  title: "Rivalry Picks | Amazon vs Costco deals",
  description: "A static proof of concept comparing Amazon and Costco deals in beauty, home & kitchen, and fashion.",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en">
      <body>
        <header className="site-header">
          <Link className="site-brand" href="/" aria-label="Rivalry Picks home"><span className="brand-mark">R</span><span>Rivalry <b>Picks</b></span></Link>
          <nav aria-label="Main navigation"><Link href="/#scoreboard">Scoreboard</Link><Link href="/#categories">Categories</Link><Link href="/#method">Our method</Link></nav>
          <span className="header-status"><i /> SAMPLE EDITION</span>
        </header>
        {children}
        <footer className="site-footer"><span>RIVALRY PICKS <b>·</b> INDEPENDENT RETAIL COMPARISONS</span><span>Illustrative photos · Sample prices · No retailer endorsement</span></footer>
      </body>
    </html>
  );
}
