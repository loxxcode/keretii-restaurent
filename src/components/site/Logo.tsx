import logo from "@/assets/keretii-logo.jpg.asset.json";

export function Logo() {
  return <img src={logo.url} alt="Keretii Restaurant" width={648} height={483} className="h-16 w-24 rounded-sm bg-card object-contain" />;
}