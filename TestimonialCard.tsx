type Testimonial = {
  quote: string;
  name: string;
  role: string;
};

export default function TestimonialCard({
  testimonial,
}: {
  testimonial: Testimonial;
}) {
  return (
    <figure className="testimonial-card">
      <blockquote>&ldquo;{testimonial.quote}&rdquo;</blockquote>
      <figcaption>
        <strong>{testimonial.name}</strong>
        <span>{testimonial.role}</span>
      </figcaption>
    </figure>
  );
}
