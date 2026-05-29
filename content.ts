export type Service = {
  title: string;
  text: string;
  detail: string;
};

export type PricingTier = {
  name: string;
  price: string;
  description: string;
  features: string[];
  checkoutKey: "starter" | "growth" | "premium";
  highlighted?: boolean;
};

export const navItems = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Services", href: "/services" },
  { label: "Pricing", href: "/pricing" },
  { label: "Booking / Contact", href: "/contact" },
];

export const services: Service[] = [
  {
    title: "Website Design",
    text: "High-end layouts, messaging, and user journeys that make your business look established from the first click.",
    detail: "Brand-aligned pages, conversion sections, mobile-first layouts, and polished visual systems.",
  },
  {
    title: "Website Development",
    text: "Fast, responsive websites built with clean React and TypeScript foundations.",
    detail: "Production-ready frontends, scalable components, performance basics, accessibility, and launch support.",
  },
  {
    title: "Local SEO",
    text: "Search structure for Toronto and GTA customers who are already looking for your service.",
    detail: "Service pages, metadata, local keyword mapping, internal linking, and Google Business Profile guidance.",
  },
  {
    title: "Monthly Website Management",
    text: "Ongoing edits, content updates, maintenance, and performance checks without chasing freelancers.",
    detail: "Monthly improvement cycles, technical care, content changes, and priority support.",
  },
  {
    title: "Analytics Setup",
    text: "Clear measurement so you can see what is bringing traffic, calls, form fills, and booked jobs.",
    detail: "GA4, conversion events, form tracking, reporting dashboards, and practical monthly insights.",
  },
  {
    title: "Optional AI Chatbot",
    text: "A guided assistant for FAQs, lead qualification, and after-hours inquiry capture.",
    detail: "Website-trained responses, inquiry routing, lead prompts, and handoff paths for your team.",
  },
];

export const featuredServices = services.slice(0, 3);

export const credibility = [
  {
    stat: "01",
    title: "Local market clarity",
    text: "Messaging and SEO structure built for how GTA customers compare contractors, clinics, consultants, and service providers.",
  },
  {
    stat: "02",
    title: "Conversion-first design",
    text: "Your website is planned around trust, proof, service clarity, and the shortest path to a qualified inquiry.",
  },
  {
    stat: "03",
    title: "Ongoing growth support",
    text: "Launch is treated as the beginning of the system, with management options for updates, tracking, and improvement.",
  },
];

export const testimonials = [
  {
    quote:
      "The new site finally matched the quality of our work. We started getting better inquiries within the first month.",
    name: "Daniel R.",
    role: "Home Services Owner, Mississauga",
  },
  {
    quote:
      "They made the process clear, handled the details, and gave us a website that feels premium without being overdone.",
    name: "Priya S.",
    role: "Clinic Director, North York",
  },
  {
    quote:
      "Our old site looked like an afterthought. GTA Growth Studio rebuilt the whole experience around trust and bookings.",
    name: "Marcus T.",
    role: "Consulting Firm Partner, Toronto",
  },
];

export const values = [
  {
    title: "Clarity",
    text: "Plain recommendations, clean messaging, and no bloated deliverables.",
  },
  {
    title: "Performance",
    text: "Design choices are balanced with speed, usability, and measurable outcomes.",
  },
  {
    title: "Local growth",
    text: "We build around the realities of Toronto and GTA competition.",
  },
  {
    title: "Partnership",
    text: "The site stays useful through ongoing improvements, support, and reporting.",
  },
];

export const pricing: PricingTier[] = [
  {
    name: "Starter Website",
    price: "$79.99/mo",
    description: "A lean monthly website plan for small businesses that need a polished one-page presence with support.",
    checkoutKey: "starter",
    features: [
      "1-page professional website",
      "Mobile optimization",
      "Contact form",
      "Basic SEO setup",
      "Hosting included",
      "Domain connection",
      "1 small edit/update per month",
      "Basic support",
    ],
  },
  {
    name: "Growth Website",
    price: "$129.99/mo",
    description: "A stronger monthly website plan for businesses that need more pages, booking flow, and local visibility.",
    checkoutKey: "growth",
    features: [
      "Up to 5 website pages",
      "Modern custom design",
      "Mobile optimization",
      "Contact forms and call-to-action setup",
      "Google Maps integration",
      "Basic SEO optimization",
      "Hosting included",
      "3 edits/updates per month",
      "Priority support",
    ],
  },
  {
    name: "Premium Website",
    price: "$249.99/mo",
    description: "A premium monthly website plan for companies that need a custom multi-page site and ongoing optimization.",
    checkoutKey: "premium",
    highlighted: true,
    features: [
      "Custom multi-page website",
      "Advanced design customization",
      "Booking/contact systems",
      "SEO optimization",
      "Monthly SEO improvements",
      "Analytics setup",
      "Performance monitoring",
      "Unlimited minor edits (10)",
      "Hosting included",
      "Priority response support",
    ],
  },
];
