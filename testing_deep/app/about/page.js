import Link from "next/link";
import React from "react";

const page = () => {
  cvc;
  return (
    <div>
      <h2>About page here</h2>
      <Link href="/ab" className="cursor-alias text-blue-500"> {/*  clicks on link to test in Component testing */}
        Home
      </Link>
    </div>
  );
};

export default page;
