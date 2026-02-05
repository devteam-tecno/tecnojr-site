import { ContactInfo } from "./contact-info";
import { Copyright } from "./copyright";
import { Description } from "./description";
import { QuickLinks } from "./quick-links";

export function Footer() {
  return (
    <footer className="border-t border-purple-500/20 bg-gradient-to-t from-zinc-950 to-zinc-900">
      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-4 lg:gap-12">
          <Description />
          <QuickLinks />
          <ContactInfo />
        </div>
        <Copyright />
      </div>
    </footer>
  );
}
