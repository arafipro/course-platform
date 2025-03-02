"use client";

import { useEffect, useRef } from "react";

interface VideoPlayerProps {
  videoId: string;
}

export default function VideoPlayer({ videoId }: VideoPlayerProps) {
  const videoRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!videoRef.current || !videoId) return;

    // Cloudflare Stream埋め込みプレイヤーの設定
    const script = document.createElement("script");
    script.src = "https://embed.cloudflarestream.com/embed/sdk.latest.js";
    script.async = true;

    const video = document.createElement("stream");
    video.setAttribute("src", videoId);
    video.setAttribute("controls", "true");
    video.setAttribute("responsive", "true");
    video.style.width = "100%";
    video.style.height = "100%";

    // 既存の要素をクリアして新しいプレイヤーを追加
    if (videoRef.current.firstChild) {
      videoRef.current.innerHTML = "";
    }
    videoRef.current.appendChild(video);
    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, [videoId]);

  return (
    <div
      ref={videoRef}
      className="w-full aspect-video bg-black rounded-lg overflow-hidden"
    />
  );
}
