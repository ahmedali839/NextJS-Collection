// components/link.jsx
import Link from "next/link";
import { useState } from "react";

export function CustomLink({ href, children, className, ...props }) {
  const [active, setActive] = useState(false);
  return (
    <Link
      href={href}
      prefetch={active ? null : false} 
      We disable automatic prefetching here!
      className={`font-bold text-blue-600 hover:text-blue-800 transition ${className}`}
      {...props}
    >
      {children}
    </Link>
  );
}
