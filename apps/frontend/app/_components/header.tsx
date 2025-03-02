import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";
import { SearchBar } from "./search-bar";

export default function Header() {
  return (
    <header className="sticky top-0 z-10 bg-white shadow">
      <div className="container mx-auto flex items-center justify-between p-4">
        <Link href="/" className="flex items-center gap-2">
          <Image
            src="/next.svg"
            alt="コースプラットフォームロゴ"
            width={120}
            height={30}
            className="dark:invert"
          />
        </Link>

        <div className="hidden md:block">
          <SearchBar />
        </div>

        <div className="flex items-center gap-4">
          <Button asChild variant="outline" className="hidden sm:inline-flex">
            <Link href="/register">登録</Link>
          </Button>
          <Button asChild>
            <Link href="/login">ログイン</Link>
          </Button>
        </div>
      </div>

      {/* モバイル用検索バー */}
      <div className="border-t p-2 md:hidden">
        <SearchBar />
      </div>
    </header>
  );
}
