import Link from "next/link";
import { navItems } from "./content";

export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="container footer-grid">
        <div>
          <Link className="brand footer-brand" href="/">
            <span className="brand-mark">G</span>
            <span>GTA Growth Studio</span>
          </Link>
          <p>
            Premium websites, local SEO, and marketing systems for Toronto and
            GTA businesses ready to grow with more clarity.
          </p>
        </div>
        <div className="footer-links">
          {navItems.map((item) => (
            <Link key={item.href} href={item.href}>
              {item.label}
            </Link>
          ))}
        </div>
        <div className="footer-contact">
          <span>Toronto / GTA</span>
          <a href="mailto:hello@gtagrowthstudio.com">hello@gtagrowthstudio.com</a>
          <a href="tel:+14165550190">+1 416 555 0190</a>
        </div>
      </div>
    </footer>
  );
}
