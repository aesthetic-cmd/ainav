import Link from "next/link";

const categories = [
  { name: "AI热门工具", slug: "term-699", icon: "🔥" },
  { name: "AI对话聊天", slug: "term-258", icon: "💬" },
  { name: "AI文本写作", slug: "term-250", icon: "📝" },
  { name: "AI绘画生成", slug: "term-221", icon: "🎨" },
  { name: "AI提示词库", slug: "term-367", icon: "📋" },
  { name: "AI搜索引擎", slug: "term-1282", icon: "🔍" },
  { name: "AI应用集成", slug: "term-1257", icon: "🔄" },
  { name: "AI图像处理", slug: "term-241", icon: "🖼️" },
  { name: "AI视频制作", slug: "term-235", icon: "🎬" },
  { name: "AI音频处理", slug: "term-345", icon: "🎵" },
  { name: "AI文档助手", slug: "term-272", icon: "📄" },
  { name: "AI办公软件", slug: "term-371", icon: "💼" },
  { name: "AI编程开发", slug: "term-284", icon: "💻" },
  { name: "AI内容鉴别", slug: "term-1130", icon: "🔎" },
  { name: "AI教育学习", slug: "term-24", icon: "📚" },
  { name: "AI算力平台", slug: "term-1373", icon: "⚙️" },
  { name: "AI工具教程", slug: "term-3", icon: "📖" },
  { name: "AI资讯情报", slug: "term-167", icon: "📰" },
  { name: "AIGC资源", slug: "term-156", icon: "🧰" },
  { name: "AI模型开源", slug: "term-129", icon: "🧩" },
  { name: "AI商业应用", slug: "term-95", icon: "💰" },
  { name: "AI学习社区", slug: "term-82", icon: "👥" },
  { name: "AI解决方案", slug: "term-935", icon: "🔧" }
];

export function Sidebar() {
  return (
    <aside className="w-64 hidden lg:block border-r border-gray-200 min-h-screen p-4 bg-white">
      <div className="space-y-1">
        {categories.map((category) => (
          <Link
            key={category.slug}
            href={`/${category.slug}`}
            className="flex items-center gap-2 px-3 py-2 text-sm rounded-md hover:bg-gray-100 hover:text-blue-600 transition-colors"
          >
            <span>{category.icon}</span>
            <span>{category.name}</span>
          </Link>
        ))}
      </div>
    </aside>
  );
}
