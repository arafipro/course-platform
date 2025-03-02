export interface Course {
  id: string;
  title: string;
  description: string;
  imageUrl: string;
  instructor: string;
  price: number;
  category: string;
  level: "beginner" | "intermediate" | "advanced";
}

// モックデータを使用（実際の実装ではAPIからデータを取得）
export async function fetchCourses(limit: number = 6): Promise<Course[]> {
  // 実際の実装ではここでAPIリクエストを行う
  // const res = await fetch('https://api.example.com/courses');
  // return res.json();

  // モックデータを返す
  const allCourses: Course[] = [
    {
      id: "1",
      title: "Next.js入門コース",
      description: "モダンなReactフレームワークであるNext.jsの基礎を学びます。",
      imageUrl:
        "https://images.unsplash.com/photo-1498050108023-c5249f4df085?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2072&q=80",
      instructor: "山田太郎",
      price: 12800,
      category: "フロントエンド",
      level: "beginner",
    },
    {
      id: "2",
      title: "TypeScript実践コース",
      description: "TypeScriptを使った実践的なアプリケーション開発を学びます。",
      imageUrl:
        "https://images.unsplash.com/photo-1555949963-ff9fe0c870eb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
      instructor: "佐藤花子",
      price: 15800,
      category: "プログラミング言語",
      level: "intermediate",
    },
    {
      id: "3",
      title: "GraphQL APIマスターコース",
      description: "GraphQLを使ったAPIの設計と実装について学びます。",
      imageUrl:
        "https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2015&q=80",
      instructor: "鈴木一郎",
      price: 18800,
      category: "バックエンド",
      level: "advanced",
    },
    {
      id: "4",
      title: "React Hooksマスターコース",
      description: "React Hooksを使った効率的なコンポーネント開発を学びます。",
      imageUrl:
        "https://images.unsplash.com/photo-1561070791-2526d30994b5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2064&q=80",
      instructor: "高橋次郎",
      price: 14800,
      category: "フロントエンド",
      level: "intermediate",
    },
    {
      id: "5",
      title: "Node.jsバックエンド開発",
      description: "Node.jsを使ったスケーラブルなバックエンド開発を学びます。",
      imageUrl:
        "https://images.unsplash.com/photo-1432888498266-38ffec3eaf0a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2074&q=80",
      instructor: "伊藤三郎",
      price: 16800,
      category: "バックエンド",
      level: "intermediate",
    },
    {
      id: "6",
      title: "TailwindCSSデザインコース",
      description: "TailwindCSSを使った効率的なUIデザインを学びます。",
      imageUrl:
        "https://images.unsplash.com/photo-1579468118864-1b9ea3c0db4a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
      instructor: "中村四郎",
      price: 11800,
      category: "デザイン",
      level: "beginner",
    },
  ];

  // limitパラメータを使用して、指定された数のコースのみを返す
  return allCourses.slice(0, limit);
}
