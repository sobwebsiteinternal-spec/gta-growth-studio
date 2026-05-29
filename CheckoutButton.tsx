"use client";

import { useState } from "react";
import type { PricingTier } from "./content";

export default function CheckoutButton({
  checkoutKey,
}: {
  checkoutKey: PricingTier["checkoutKey"];
}) {
  const [status, setStatus] = useState<"idle" | "loading" | "error">("idle");

  async function startCheckout() {
    setStatus("loading");

    try {
      const response = await fetch("/api/create-checkout-session", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ packageKey: checkoutKey }),
      });

      const data = (await response.json()) as { url?: string; error?: string };

      if (!response.ok || !data.url) {
        throw new Error(data.error ?? "Unable to start checkout.");
      }

      window.location.href = data.url;
    } catch {
      setStatus("error");
    }
  }

  return (
    <div className="checkout-action">
      <button
        className="button button-secondary"
        type="button"
        onClick={startCheckout}
        disabled={status === "loading"}
      >
        {status === "loading" ? "Opening checkout" : "Subscribe with Stripe"}
      </button>
      {status === "error" ? (
        <p className="checkout-error">
          Stripe checkout is not configured yet. Add the Stripe environment
          variables in Netlify.
        </p>
      ) : null}
    </div>
  );
}
