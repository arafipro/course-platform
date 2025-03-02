import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function Hero() {
  return (
    <section className="mb-12 rounded-xl bg-gradient-to-r from-blue-600 to-indigo-700 p-8 text-white">
      <div className="mx-auto max-w-3xl text-center">
        <h1 className="mb-4 text-3xl font-bold sm:text-4xl md:text-5xl">
          あなたのスキルを次のレベルへ
        </h1>
        <p className="mb-6 text-lg opacity-90">
          最高の講師陣による厳選されたコースで、新しいスキルを習得しましょう
        </p>
        <Button
          asChild
          size="lg"
          className="bg-white text-blue-700 hover:bg-gray-100"
        >
          <Link href="/courses">すべてのコースを見る</Link>
        </Button>
      </div>
    </section>
  );
}
