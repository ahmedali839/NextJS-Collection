import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export const metadata = {
  title: "Leaf & Bloom — Artisan Tea Shop",
  description:
    "Discover handcrafted teas sourced from the finest gardens around the world. Leaf & Bloom brings you warmth in every cup.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="flex flex-col min-h-screen">
        <Navbar />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
