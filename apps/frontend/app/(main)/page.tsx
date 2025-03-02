import { CourseCard } from "@/app/(main)/_components/course-card";
import { Button } from "@/components/ui/button";
import { fetchCourses } from "@/lib/api";
import Link from "next/link";
import Footer from "../_components/footer";
import Header from "../_components/header";

export default async function Home() {
  const courses = await fetchCourses(6); // Server Componentでデータフェッチ

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
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
      <Footer />
    </div>
  );
}
