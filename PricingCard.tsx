import CheckoutButton from "./CheckoutButton";
import type { PricingTier } from "./content";

export default function PricingCard({ tier }: { tier: PricingTier }) {
  return (
    <article className={`pricing-card ${tier.highlighted ? "highlighted" : ""}`}>
      {tier.highlighted ? <span className="pricing-label">Recommended</span> : null}
      <h3>{tier.name}</h3>
      <strong>{tier.price}</strong>
      <p>{tier.description}</p>
      <ul>
        {tier.features.map((feature) => (
          <li key={feature}>{feature}</li>
        ))}
      </ul>
      <CheckoutButton checkoutKey={tier.checkoutKey} />
    </article>
  );
}
