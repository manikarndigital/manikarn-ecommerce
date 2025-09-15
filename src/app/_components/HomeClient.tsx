// src/app/_components/HomeClient.tsx
"use client";
import Button from "@/components/Button";

export default function HomeClient() {
  return <Button onClick={() => alert("clicked!")}>Click me</Button>;
}
