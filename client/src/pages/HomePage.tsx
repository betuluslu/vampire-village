import { useNavigate } from "react-router-dom";
import { supabase } from "../lib/supabase";

export default function HomePage() {
  const navigate = useNavigate();

  return (
    <main className="min-h-screen bg-slate-950 flex items-center justify-center">
      <div className="flex flex-col gap-4">
        <h1 className="text-5xl font-bold text-white text-center">
          Vampire Village
        </h1>

        <button
          onClick={() => navigate("/room/demo")}
          className="rounded-lg bg-red-600 px-6 py-3 text-white hover:bg-red-700"
        >
          Oyun Oluştur
        </button>

        <button
          className="rounded-lg border border-white px-6 py-3 text-white"
        >
          Odaya Katıl
        </button>
      </div>
    </main>
  );
}