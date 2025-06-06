"use client";

import { TextInput } from "@repo/ui/text-input";
import { useRouter } from "next/navigation";
import { useState } from "react";

export default function Home() {
  const [value, setValue] = useState("");
  const router = useRouter();

  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        padding: 250,
      }}
    >
      <div
        style={{
          display: "flex",
          gap: 10,
        }}
      >
        <TextInput
          placeholder="RoomId"
          onChange={(e) => {
            setValue(e.target.value);
          }}
        />
        <button
          onClick={() => {
            router.push(`/chat/${value}`);
          }}
        >
          Join
        </button>
      </div>
    </div>
  );
}
