import { useParams } from "react-router-dom";

export default function RoomPage() {
  const { roomId } = useParams();

  return (
    <main className="min-h-screen bg-slate-900 text-white flex items-center justify-center">
      <h1 className="text-4xl font-bold">
        Room: {roomId}
      </h1>
    </main>
  );
}