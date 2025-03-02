import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Course } from "@/lib/api";
import Image from "next/image";
import Link from "next/link";

interface CourseCardProps {
  course: Course;
}

export function CourseCard({ course }: CourseCardProps) {
  return (
    <Link href={`/courses/${course.id}`} className="block h-full">
      <Card className="h-full transition-all hover:shadow-md">
        <div className="relative aspect-video w-full overflow-hidden rounded-t-lg">
          <Image
            src={course.imageUrl}
            alt={course.title}
            fill
            className="object-cover"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          />
        </div>
        <CardHeader className="pb-2">
          <div className="flex items-center justify-between">
            <span className="inline-block rounded-full bg-blue-100 px-2 py-1 text-xs font-medium text-blue-800">
              {course.category}
            </span>
            <span className="inline-block rounded-full bg-gray-100 px-2 py-1 text-xs font-medium text-gray-800">
              {course.level}
            </span>
          </div>
          <CardTitle className="line-clamp-1 text-lg">{course.title}</CardTitle>
        </CardHeader>
        <CardContent className="pb-2">
          <p className="line-clamp-2 text-sm text-gray-600">
            {course.description}
          </p>
        </CardContent>
        <CardFooter className="flex items-center justify-between">
          <div className="text-sm text-gray-500">講師: {course.instructor}</div>
          <div className="font-bold text-blue-600">
            ¥{course.price.toLocaleString()}
          </div>
        </CardFooter>
      </Card>
    </Link>
  );
}
