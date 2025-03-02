"use client";

import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";

interface PurchaseButtonProps {
  courseId: string;
  price: number;
}

export function PurchaseButton({ courseId, price }: PurchaseButtonProps) {
  const router = useRouter();

  const handlePurchase = () => {
    router.push(`/courses/${courseId}/purchase`);
  };

  return (
    <Button size="lg" className="px-8 py-6 text-lg" onClick={handlePurchase}>
      ¥{price.toLocaleString()}で購入する
    </Button>
  );
}
