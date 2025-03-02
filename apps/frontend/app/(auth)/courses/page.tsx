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
        {/* コース一覧セクション */}
        <section>
          <div className="mb-6 flex items-center justify-between">
            <h2 className="text-2xl font-bold">すべてのコース</h2>
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
