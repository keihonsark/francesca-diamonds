import Link from "next/link";

const footerLinks = [
  { href: "/collection", label: "Collection" },
  { href: "/design", label: "Custom Design" },
  { href: "/diamonds", label: "Diamonds" },
  { href: "/about", label: "About" },
  { href: "/appointment", label: "Appointment" },
  { href: "/contact", label: "Contact" },
];

export default function Footer() {
  return (
    <footer className="bg-foreground text-background">
      <div className="max-w-content mx-auto px-6 py-16 md:py-20">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-8">
          {/* Brand */}
          <div>
            <Link
              href="/"
              className="font-cormorant font-light text-2xl tracking-[0.15em] uppercase"
            >
              FRANCESCA.
            </Link>
            <p className="mt-4 text-sm text-background/60 leading-relaxed max-w-xs">
              Fine jewelry designed around you. By appointment only in Carlsbad,
              California.
            </p>
            {/* Social icons */}
            <div className="flex gap-4 mt-6">
              <a
                href="https://instagram.com/francescadiamonds"
                target="_blank"
                rel="noopener noreferrer"
                className="text-background/60 hover:text-accent transition-colors"
                aria-label="Instagram"
              >
                <svg width="20" height="20" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                </svg>
              </a>
              <a
                href="https://facebook.com/francescadiamonds"
                target="_blank"
                rel="noopener noreferrer"
                className="text-background/60 hover:text-accent transition-colors"
                aria-label="Facebook"
              >
                <svg width="20" height="20" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385h-3.047v-3.47h3.047v-2.642c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953h-1.514c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385c5.738-.9 10.126-5.864 10.126-11.854z" />
                </svg>
              </a>
              <a
                href="https://pinterest.com/francescadiamonds"
                target="_blank"
                rel="noopener noreferrer"
                className="text-background/60 hover:text-accent transition-colors"
                aria-label="Pinterest"
              >
                <svg width="20" height="20" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12.017 0c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm0 2c5.514 0 10 4.486 10 10 0 4.239-2.644 7.863-6.375 9.312-.029-.87-.005-1.917.221-2.862.243-1.013 1.573-6.664 1.573-6.664s-.402-.803-.402-1.99c0-1.864 1.081-3.257 2.427-3.257 1.145 0 1.698.859 1.698 1.889 0 1.151-.733 2.872-1.11 4.467-.316 1.335.67 2.424 1.987 2.424 2.384 0 3.985-3.072 3.985-6.709 0-2.764-1.862-4.831-5.252-4.831-3.829 0-6.215 2.858-6.215 6.047 0 1.1.325 1.874.835 2.474.234.277.267.389.182.707-.061.234-.199.797-.256 1.02-.082.318-.337.432-.621.314-1.738-.71-2.549-2.616-2.549-4.762 0-3.542 2.991-7.793 8.934-7.793 4.772 0 7.912 3.454 7.912 7.158 0 4.904-2.726 8.567-6.745 8.567-1.349 0-2.617-.728-3.052-1.553 0 0-.724 2.876-.878 3.427-.267.967-.789 1.934-1.268 2.689 1.099.333 2.26.514 3.467.514 5.523 0 10-4.477 10-10s-4.477-10-10-10z" />
                </svg>
              </a>
            </div>
          </div>

          {/* Navigation */}
          <div>
            <h3 className="font-cormorant text-lg font-light tracking-wider mb-4">
              Navigate
            </h3>
            <ul className="space-y-3">
              {footerLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-background/60 hover:text-accent transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-cormorant text-lg font-light tracking-wider mb-4">
              Visit Us
            </h3>
            <div className="space-y-3 text-sm text-background/60">
              <p>Carlsbad, CA 92008</p>
              <p>By Appointment Only</p>
              <p>
                <a
                  href="mailto:hello@francescadiamonds.com"
                  className="hover:text-accent transition-colors"
                >
                  hello@francescadiamonds.com
                </a>
              </p>
              <p>
                <a
                  href="tel:+17605551234"
                  className="hover:text-accent transition-colors"
                >
                  (760) 555-1234
                </a>
              </p>
              <div className="pt-4">
                <Link href="/appointment" className="btn-primary text-xs py-2.5 px-6 bg-accent hover:bg-hover">
                  Book an Appointment
                </Link>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-background/10 mt-12 pt-8 text-center text-xs text-background/40">
          <p>&copy; {new Date().getFullYear()} FRANCESCA. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
