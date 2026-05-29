import type { Service } from "./content";

export default function ServiceCard({ service }: { service: Service }) {
  return (
    <article className="service-card">
      <div className="card-icon" aria-hidden="true">
        <span />
      </div>
      <h3>{service.title}</h3>
      <p>{service.text}</p>
      <small>{service.detail}</small>
    </article>
  );
}
