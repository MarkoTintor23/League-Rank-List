"use client";

import { useParams } from "next/navigation";

export default function Players() {
  const param = useParams();

  return (
    <>
      <p>{param.name} is the player</p>
    </>
  );
}
