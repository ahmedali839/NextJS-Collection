"use client";

import { useEffect, useState } from "react";

export default function GetData() {
  const [data, setData] = useState({});

  useEffect(() => {
    function fetchData() {
      fetch("https://jsonplaceholder.typicode.com/users/2")
        .then((res) => res.json())
        .then((ressult) => setData(ressult));
    }
    fetchData();
  }, []);

  return (
    <div>
      <h2>Client Side rendering</h2>
      <h3>{data.name}</h3>
    </div>
  );
}
