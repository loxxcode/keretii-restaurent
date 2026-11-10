import { MessageCircle } from "lucide-react";
import type { MenuItem } from "@/data/menu";
import { whatsappOrderUrl } from "@/lib/order";

/**
 * Order action for one dish: opens WhatsApp with the clicked dish already typed
 * into the message. Falls back to a clear "to be confirmed" state when the
 * restaurant's WhatsApp number has not been supplied yet.
 */
export function OrderButton({ item, className = "" }: { item: MenuItem; className?: string }) {
  const href = whatsappOrderUrl(item);

  if (!href) {
    return (
      <span
        aria-disabled="true"
        className={`inline-flex min-h-11 items-center gap-2 rounded-full border border-dashed border-border px-5 text-sm font-semibold text-muted-foreground ${className}`}
      >
        <MessageCircle className="h-4 w-4" aria-hidden />
        WhatsApp to be confirmed
      </span>
    );
  }

  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={`Order ${item.name} on WhatsApp`}
      className={`inline-flex min-h-11 items-center gap-2 whitespace-nowrap rounded-full bg-gold px-5 text-sm font-bold text-ink transition hover:brightness-110 ${className}`}
    >
      <MessageCircle className="h-4 w-4" aria-hidden />
      Make Order
    </a>
  );
}
