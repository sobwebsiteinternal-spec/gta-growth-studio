import Link from "next/link";

export default function CTASection() {
  return (
    <section className="section cta-section">
      <div className="container cta-panel">
        <div>
          <h2>Ready for a website that works as hard as your business?</h2>
          <p>
            Book a free call and we will map the clearest next step for your
            website, local SEO, analytics, or monthly growth support.
          </p>
        </div>
        <Link className="button button-primary" href="/contact">
          Book a free call
        </Link>
      </div>
    </section>
  );
}
