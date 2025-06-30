
import { useState } from "react";
import { motion } from "framer-motion";

const moodIcons = ["😊","🥰","😴","😡","😭","🤣","💖","🤪","😎"];

export default function HomePage() {
  const [avatar, setAvatar] = useState<string>("🐻");
  const [mood, setMood] = useState<string>("");
  const [note, setNote] = useState<string>("");

  const progress = mood ? (note ? 100 : 50) : 0;

  const handleFile = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const url = URL.createObjectURL(file);
      setAvatar(url);
    }
  };

  return (
    <main className="max-w-screen-sm mx-auto p-4 space-y-8">
      {/* 头像区 */}
      <section className="flex items-center gap-4">
        <div>
          {avatar.startsWith("blob:")
            ? <img src={avatar} className="w-16 h-16 rounded-full object-cover" />
            : <span className="text-4xl">{avatar}</span>}
        </div>
        <div className="space-x-2">
          <button
            className="text-sm border px-2 py-1 rounded"
            onClick={() => setAvatar("🐻")}
          >
            Emoji
          </button>
          <label className="text-sm border px-2 py-1 rounded cursor-pointer">
            Upload
            <input type="file" accept="image/*" className="hidden" onChange={handleFile} />
          </label>
        </div>
      </section>

      <h1 className="text-2xl font-bold">你好，宝宝！</h1>

      {/* 心情区 */}
      <section>
        <h2 className="font-semibold mb-2">今日心情</h2>
        <div className="grid grid-cols-3 gap-2 text-2xl">
          {moodIcons.map((ic) => (
            <button
              key={ic}
              onClick={() => setMood(ic)}
              className={\`rounded-lg p-2 \${mood === ic ? "bg-blue-100" : ""}\`}
            >
              {ic}
            </button>
          ))}
        </div>
        <input
          placeholder="写一句今天的小情绪…"
          value={note}
          onChange={(e) => setNote(e.target.value)}
          className="mt-3 w-full border rounded p-2 text-sm"
        />
        <motion.div
          className="h-4 bg-pink-200 mt-2 rounded"
          initial={{ width: 0 }}
          animate={{ width: progress + "%" }}
        />
      </section>

      {/* 纪念照 */}
      <section>
        <h2 className="font-semibold mb-2">纪念照</h2>
        <p className="text-sm text-gray-500">（稍后放轮播）</p>
      </section>

      {/* 语录墙 */}
      <section>
        <h2 className="font-semibold mb-2">我们记录</h2>
        <p className="text-sm text-gray-500">（稍后放语录墙）</p>
      </section>
    </main>
  );
}
