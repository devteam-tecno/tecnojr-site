import { ContactInfo } from "./contact-info";
import { Copyright } from "./copyright";
import { Description } from "./description";
import { QuickLinks } from "./quick-links";

/**
 * Main footer component with multi-column layout and gradient background.
 *
 * Layout structure:
 * - Description: Logo, company description, social links
 * - QuickLinks: Navigation links (Sobre, Serviços, Projetos, etc.)
 * - ContactInfo: Email, phone, address
 * - Copyright: Bottom copyright text
 *
 * Responsive grid: 1 column on mobile, 4 columns on lg+ screens.
 * Border-top with purple gradient for visual separation from page content.
 *
 * @example
 * // Usage in root layout
 * <main>{children}</main>
 * <Footer />
 *
 * @see {@link Description} - Logo and company description sub-component
 * @see {@link QuickLinks} - Navigation links sub-component
 * @see {@link ContactInfo} - Contact details sub-component
 * @see {@link Copyright} - Copyright notice sub-component
 */
export function Footer() {
  return (
    <footer className="border-t border-purple-500/20 bg-linear-to-t from-zinc-950 to-zinc-900">
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
