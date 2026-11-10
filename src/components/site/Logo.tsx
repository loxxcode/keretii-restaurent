import { cn } from "@/lib/utils";
import logo from "@/assets/keretii-logo.png";

export function Logo({ className }: { className?: string }) {
  return <img src={logo} alt="Keretii Restaurant" width={648} height={483} className={cn("h-16 w-24 rounded-md object-contain", className)} />;
}