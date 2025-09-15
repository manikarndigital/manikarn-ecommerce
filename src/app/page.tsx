"use client";

import Image from "next/image";
import Button from "@/components/Button";

export default function Home() {
  return (
    <main style={{ padding: 24 }}>
      <h1>Alias test</h1>
      <Button onClick={() => alert("Alias OK!")}>Click me</Button>
    </main>
  );
}
