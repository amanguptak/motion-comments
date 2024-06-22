import Image from "next/image";

import Comments from "@/components/comments";

export default function Home() {
  return (
  <main className="  min-h-screen bg-slate-600 text-white p-10">
      <h2 className="text-2xl text-center m-3 font-bold">Motion-comments-system</h2>
          <Comments/>
  </main>
  );
}
