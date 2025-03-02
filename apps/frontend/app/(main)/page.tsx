import { CourseCard } from "@/app/(main)/_components/course-card";
import { SearchBar } from "@/app/(main)/_components/search-bar";
import { Button } from "@/components/ui/button";
import { fetchCourses } from "@/lib/api";
import Image from "next/image";
import Link from "next/link";

export default async function Home() {
  const courses = await fetchCourses(6); // Server Componentでデータフェッチ

  return (
    <div className="min-h-screen bg-gray-50">
      {/* ヘッダー */}
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

      <main className="container mx-auto px-4 py-8">
        {/* ヒーローセクション */}
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

        {/* コース一覧セクション */}
        <section>
          <div className="mb-6 flex items-center justify-between">
            <h2 className="text-2xl font-bold">人気のコース</h2>
            <Button asChild variant="outline">
              <Link href="/courses">すべて見る</Link>
            </Button>
          </div>

          {courses.length === 0 ? (
            <div className="rounded-lg border border-dashed p-12 text-center">
              <p className="text-gray-500">現在利用可能なコースはありません</p>
            </div>
          ) : (
            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {courses.map((course) => (
                <CourseCard key={course.id} course={course} />
              ))}
            </div>
          )}
        </section>
      </main>

      {/* フッター */}
      <footer className="border-t bg-white py-8">
        <div className="container mx-auto px-4 text-center text-sm text-gray-600">
          <p>© 2024 コースプラットフォーム. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}
