import { ReactNode } from "react";
import Navigation from "./Navigation";
import Footer from "./Footer";

export default function SiteLayout({ children }: { readonly children: ReactNode }) {
  return (
    <div className="min-h-screen bg-background text-foreground font-sans flex flex-col items-center">
      <Navigation />
      <main className="flex-1 w-full">{children}</main>
      <Footer />
    </div>
  );
}
