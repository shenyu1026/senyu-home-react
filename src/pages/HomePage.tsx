// src/pages/HomePage.tsx
import { useState } from "react";
import { motion } from "framer-motion";

/**
 * Home Page – 沈屿 × 沈一
 * 小红书风格 · 蓝 #509DFF | 粉 #FF7EB9 | 绿 #4CD964 (已在全局 Tailwind 配色)
 */

export default function HomePage() {
  /* ------------------------------  组件状态  ------------------------------ */
  const [avatar, setAvatar] = useState<string>("🧸");
  const [mood, setMood] = useState<string>("😊");
  const [note, setNote] = useState<string>("");

  /* ------------------------------  头像区  ------------------------------ */
  const AvatarSection = () => (
    <section className="flex items-center gap-4">
      <button
        className="text-5xl"
        onClick={() => setAvatar(avatar === "🧸" ? "🐶" : "🧸")}
        aria-label="切换头像"
      >
        {avatar}
      </button>
      <h2 className="text-xl font-semibold">你好，宝宝！</h2>
    </section>
  );

  /* ------------------------------  心情区  ------------------------------ */
  const moods = ["😊", "🥰", "🤗", "😴", "😡", "😭", "🤩", "💕", "😆"];
  const MoodSection = () => (
    <section>
      <h3 className="mb-2 font-medium">今日心情</h3>
      <div className="grid grid-cols-3 gap-2 text-3xl">
        {moods.map((m) => (
          <button
            key={m}
            onClick={() => setMood(m)}
            className={`rounded-lg p-2 ${m === mood ? "bg-blue-100" : ""}`}
          >
            {m}
          </button>
        ))}
      </div>
      <input
        placeholder="写一句今天的小情绪…"
        value={note}
        onChange={(e) => setNote(e.target.value)}
        className="mt-3 w-full rounded-lg border p-2 text-sm"
      />
      {/* 简单的同步进度条动画 */}
      <motion.div
        className="mt-2 h-2 rounded bg-pink-200"
        initial={{ width: "0%" }}
        animate={{ width: note ? "100%" : "50%" }}
      />
    </section>
  );
  /* ------------------------------  页面渲染  ------------------------------ */
return (
  <main className="mx-auto max-w-screen-sm space-y-8 p-4">
    <AvatarSection />
    <MoodSection />
  </main>
);
}
