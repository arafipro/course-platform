import { Skeleton } from "@/components/ui/skeleton";
import VideoPlayer from "@/components/video-player";
import { Suspense } from "react";

// APIからコース情報を取得する関数
async function fetchCourse(id: string) {
  // 本番環境では実際のAPIエンドポイントを使用
  // 開発用のモックデータ
  return {
    id,
    title: `コースタイトル ${id}`,
    description:
      "このコースでは、最新のWeb開発技術について学びます。React、Next.js、TailwindCSSなどのモダンなフロントエンド技術を使って、実際のプロジェクトを構築する方法を学びましょう。",
    videoId: "2d6a5ab795a4b5a9a79a6e9b380f65db", // Cloudflare Stream videoId
    price: 19800,
    instructor: "山田太郎",
    duration: "8時間30分",
    level: "中級者",
  };
}

// VideoPlayerコンポーネントをラップしたSuspenseコンポーネント
function CourseVideo({ videoId }: { videoId: string }) {
  return (
    <div className="w-full aspect-video">
      <VideoPlayer videoId={videoId} />
    </div>
  );
}

// 購入ボタンをクライアントコンポーネントとして分離
import { PurchaseButton } from "./purchase-button";

export default async function CoursePage({
  params,
}: {
  params: { id: string };
}) {
  const course = await fetchCourse(params.id);

  return (
    <div className="max-w-4xl mx-auto p-6">
      <div className="mb-8">
        <h1 className="text-3xl font-bold mb-2">{course.title}</h1>
        <div className="flex items-center text-sm text-gray-500 mb-4">
          <span className="mr-4">講師: {course.instructor}</span>
          <span className="mr-4">レベル: {course.level}</span>
          <span>時間: {course.duration}</span>
        </div>
      </div>

      {/* 動画プレイヤー */}
      <div className="mb-8">
        <Suspense
          fallback={<Skeleton className="h-[480px] w-full rounded-lg" />}
        >
          <CourseVideo videoId={course.videoId} />
        </Suspense>
      </div>

      {/* コース説明 */}
      <div className="mb-8">
        <h2 className="text-xl font-semibold mb-4">コース概要</h2>
        <p className="text-gray-700 leading-relaxed">{course.description}</p>
      </div>

      {/* 購入ボタン */}
      <div className="flex justify-center">
        <PurchaseButton courseId={course.id} price={course.price} />
      </div>
    </div>
  );
}
