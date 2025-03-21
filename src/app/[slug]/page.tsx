import { Header } from "@/components/header";
import { Sidebar } from "@/components/sidebar";
import { CategorySection } from "@/components/category-section";
import { aiTools } from "@/data/sites";
import { notFound } from "next/navigation";

// 分类slug映射到数据
const categoryMapping: Record<string, keyof typeof aiTools> = {
  "term-699": "featured",
  "term-258": "chat",
  "term-250": "writing",
  "term-221": "art",
  "term-235": "video",
  "term-345": "audio",
  "term-284": "code",
  "term-371": "office"
};

// 分类名称映射
const categoryNames: Record<string, string> = {
  "term-699": "AI热门工具",
  "term-258": "AI对话聊天",
  "term-250": "AI文本写作",
  "term-221": "AI绘画生成",
  "term-235": "AI视频制作",
  "term-345": "AI音频处理",
  "term-284": "AI编程开发",
  "term-371": "AI办公软件",
  "term-367": "AI提示词库",
  "term-1282": "AI搜索引擎",
  "term-1257": "AI应用集成",
  "term-241": "AI图像处理",
  "term-272": "AI文档助手",
  "term-1130": "AI内容鉴别",
  "term-24": "AI教育学习",
  "term-1373": "AI算力平台",
  "term-3": "AI工具教程",
  "term-167": "AI资讯情报",
  "term-156": "AIGC资源",
  "term-129": "AI模型开源",
  "term-95": "AI商业应用",
  "term-82": "AI学习社区",
  "term-935": "AI解决方案"
};

// 临时数据，用于未实现的分类
const placeholderSites = [
  {
    id: "placeholder1",
    title: "示例工具1",
    description: "这是一个示例工具，该分类的真实内容正在开发中",
    imageUrl: "https://placehold.co/400x400?text=AI",
    url: "#"
  },
  {
    id: "placeholder2",
    title: "示例工具2",
    description: "这是一个示例工具，该分类的真实内容正在开发中",
    imageUrl: "https://placehold.co/400x400?text=AI",
    url: "#"
  },
  {
    id: "placeholder3",
    title: "示例工具3",
    description: "更多工具即将上线，敬请期待",
    imageUrl: "https://placehold.co/400x400?text=Coming+Soon",
    url: "#"
  }
];

export default function CategoryPage({ params }: { params: { slug: string } }) {
  const { slug } = params;
  
  // 获取分类名称
  const categoryTitle = categoryNames[slug];
  
  if (!categoryTitle) {
    notFound();
  }
  
  // 获取分类数据
  let categorySites = [];
  const categoryKey = categoryMapping[slug];
  
  if (categoryKey && aiTools[categoryKey]) {
    categorySites = aiTools[categoryKey];
  } else {
    // 对于尚未实现的分类，使用占位数据
    categorySites = placeholderSites;
  }

  return (
    <div className="flex flex-col min-h-screen">
      <Header />

      <div className="flex flex-1">
        <Sidebar />

        <main className="flex-1 p-6">
          <div className="max-w-7xl mx-auto">
            <div className="mb-8">
              <h1 className="text-2xl font-bold text-center mb-2">{categoryTitle}</h1>
              <p className="text-gray-600 text-center max-w-3xl mx-auto">
                探索{categoryTitle}分类下的优质AI工具和资源
              </p>
            </div>

            <div className="py-4">
              <CategorySection title={categoryTitle} sites={categorySites} />
            </div>
          </div>
        </main>
      </div>

      <footer className="bg-white py-6 border-t border-gray-200">
        <div className="container mx-auto px-4 text-center text-sm text-gray-500">
          <p>&copy; {new Date().getFullYear()} AI导航网 - 收录优质AI工具</p>
        </div>
      </footer>
    </div>
  );
} 