import Link from "next/link";
import LoadingIndicator from "./useLinkStatus";

const links = [ // arrays of links
  {
    href: "/useLinkk/electronics",
    label: "Electronics",
    color: "text-red-500",
  },
  { href: "/useLinkk/clothing", label: "Clothing", color: "text-green-500" },
  { href: "/useLinkk/cars", label: "Car", color: "text-yellow-500" },
];

function MenuData() {
  return (
    <div>
      {links.map((link) => (
        <Link
          key={link.label}
          href={link.href}
          prefetch={false}
          className="mr-10"
        >
          <span className={`label ${link.color} `}> {link.label} </span>
          <LoadingIndicator />
        </Link>
      ))}
    </div>
  );
}

export default function Page() {
  return (
    <div>
      <h2> Link will show pending state while being fetch, below: </h2>
      <MenuData />
    </div>
  );
}
