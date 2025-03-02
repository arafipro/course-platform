import { CourseCard } from "@/app/(main)/_components/course-card";
import Footer from "@/app/_components/footer";
import Header from "@/app/_components/header";
import { fetchCourses } from "@/lib/api";

export default async function Home() {
  const courses = await fetchCourses(6); // Server Componentでデータフェッチ

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
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
      <Footer />
    </div>
  );
}
