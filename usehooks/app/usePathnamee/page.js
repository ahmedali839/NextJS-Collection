"use client";

import { usePathname, useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";

export default function Page() {
  const pathname = usePathname();
  const searchParams = useSearchParams();

  const [values, setValues] = useState({
    pathname: "",
    searchValue: "",
  });

  useEffect(() => {
    setValues({
      pathname: pathname,
      searchValue: searchParams,
    });
  }, [pathname, searchParams]);

  return (
    <div>
      <h2>
        Real time Values = pathname: {values.pathname}, searchParams:{" "}
        {values.searchValue}
      </h2>
    </div>
  );
}
