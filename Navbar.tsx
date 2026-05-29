import Link from "next/link";
import { navItems } from "./content";

export default function Navbar() {
  return (
    <header className="site-header">
      <nav className="container nav-shell" aria-label="Primary navigation">
        <Link className="brand" href="/">
          <span className="brand-mark">G</span>
          <span>GTA Growth Studio</span>
        </Link>
        <div className="nav-links">
          {navItems.map((item) => (
            <Link key={item.href} href={item.href}>
              {item.label}
            </Link>
          ))}
        </div>
        <Link className="nav-cta" href="/contact">
          Free call
        </Link>
      </nav>
    </header>
  );
}
