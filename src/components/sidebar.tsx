import Link from "next/link";

// 侧边栏分类数据
const categories = [
  { name: "AI热门工具", slug: "featured", icon: "🔥" },
  { name: "AI对话聊天", slug: "chat", icon: "💬" },
  { name: "AI文本写作", slug: "writing", icon: "📝" },
  { name: "AI绘画生成", slug: "art", icon: "🎨" },
  { name: "AI提示词库", slug: "prompts", icon: "📋" },
  { name: "AI搜索引擎", slug: "search", icon: "🔍" },
  { name: "AI应用集成", slug: "integration", icon: "🔄" },
  { name: "AI图像处理", slug: "image", icon: "🖼️" },
  { name: "AI视频制作", slug: "video", icon: "🎬" },
  { name: "AI音频处理", slug: "audio", icon: "🎵" },
  { name: "AI文档助手", slug: "docs", icon: "📄" },
  { name: "AI办公软件", slug: "office", icon: "💼" },
  { name: "AI编程开发", slug: "code", icon: "💻" },
  { name: "AI内容鉴别", slug: "content", icon: "🔎" },
  { name: "AI教育学习", slug: "education", icon: "📚" },
  { name: "AI算力平台", slug: "computing", icon: "⚙️" },
  { name: "AI工具教程", slug: "tutorials", icon: "📖" },
  { name: "AI资讯情报", slug: "news", icon: "📰" },
  { name: "AIGC资源", slug: "resources", icon: "🧰" },
  { name: "AI模型开源", slug: "models", icon: "🧩" },
  { name: "AI商业应用", slug: "business", icon: "💰" },
  { name: "AI学习社区", slug: "community", icon: "👥" },
  { name: "AI解决方案", slug: "solutions", icon: "🔧" }
];

export function Sidebar() {
  return (
    <aside className="w-64 hidden lg:block fixed top-[60px] bottom-0 left-0 border-r border-gray-200 p-4 bg-white overflow-y-auto">
      <div className="space-y-1">
        {categories.map((category) => (
          <Link
            key={category.slug}
            href={`/#${category.slug}`}
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
