import CardWithForms from "@/components/Cards/CardWithForms";
import { Card } from "@/components/ui/card";

export default function Home() {
  return (
    <>
      <header className="bg-blue-600 flex-row flex justify-between">
        <h1 className="text-2xl p-2 block">TaskFLow</h1>
        <nav className="">
          <ul className="flex flex-row py-3 gap-4 ">
            <li className="hover:bg-cyan-900">
              <a href="/login">Login</a>
            </li>
            <li className="hover:bg-cyan-900">
              <a href="/register">Register</a>
            </li>
          </ul>
        </nav>
      </header>
      <div className="grid items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
        <main className="flex flex-row gap-8">
          <CardWithForms />
        </main>
      </div>
    </>
  );
}
