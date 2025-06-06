import { TextInput } from "@repo/ui/text-input";

export default function Home() {
  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        padding: 250,
      }}
    >
      <div style={{
        display: "flex",
        gap: 10
      }}>
        <TextInput placeholder="RoomId" />
        <button>Join</button>
      </div>
    </div>
  );
}
