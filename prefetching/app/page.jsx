// app/page.jsx
import { PricingCard } from "../components/PricingCard";

export default function Home() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 p-6">
      <PricingCard />
    </div>
  );
}