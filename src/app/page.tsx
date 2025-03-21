import { Header } from "@/components/header";
import { Sidebar } from "@/components/sidebar";
import { CategorySection } from "@/components/category-section";
import { aiTools } from "@/data/sites";

// 占位数据，用于展示示例
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

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />

      <div className="flex flex-1 pt-[60px]">
        <Sidebar />

        <main className="flex-1 p-6 overflow-y-auto lg:ml-64">
          <div className="max-w-7xl mx-auto">
            <div className="mb-8">
              <h1 className="text-2xl font-bold text-center mb-2">AInav - AI导航网 | 发现优质AI工具，为你导航未来</h1>
              <p className="text-gray-600 text-center max-w-3xl mx-auto">
                AI导航网收录了国内外1000+AI工具，AI绘画、AI对话聊天、AI视频制作等多个领域
              </p>
            </div>

            <div className="py-4 space-y-10">
              {/* 已实现的分类 */}
              <div id="featured">
                <CategorySection title="AI热门工具" sites={aiTools.featured} />
              </div>
              
              <div id="chat">
                <CategorySection title="AI对话聊天" sites={aiTools.chat} />
              </div>
              
              <div id="writing">
                <CategorySection title="AI文本写作" sites={aiTools.writing} />
              </div>
              
              <div id="art">
                <CategorySection title="AI绘画生成" sites={aiTools.art} />
              </div>
              
              <div id="video">
                <CategorySection title="AI视频制作" sites={aiTools.video} />
              </div>
              
              <div id="audio">
                <CategorySection title="AI语音工具" sites={aiTools.audio} />
              </div>
              
              <div id="code">
                <CategorySection title="AI编程开发" sites={aiTools.code} />
              </div>
              
              <div id="office">
                <CategorySection title="AI办公软件" sites={aiTools.office} />
              </div>
              
              {/* 其他分类（未实现的，使用占位数据） */}
              <div id="prompts">
                <CategorySection title="AI提示词库" sites={placeholderSites} />
              </div>
              
              <div id="search">
                <CategorySection title="AI搜索引擎" sites={placeholderSites} />
              </div>
              
              <div id="integration">
                <CategorySection title="AI应用集成" sites={placeholderSites} />
              </div>
              
              <div id="image">
                <CategorySection title="AI图像处理" sites={placeholderSites} />
              </div>
              
              <div id="docs">
                <CategorySection title="AI文档助手" sites={placeholderSites} />
              </div>
              
              <div id="content">
                <CategorySection title="AI内容鉴别" sites={placeholderSites} />
              </div>
              
              <div id="education">
                <CategorySection title="AI教育学习" sites={placeholderSites} />
              </div>
            </div>
          </div>
        </main>
      </div>

      <footer className="bg-white py-6 border-t border-gray-200 lg:ml-64">
        <div className="container mx-auto px-4 text-center text-sm text-gray-500">
          <p>&copy; {new Date().getFullYear()} AI导航网 - 收录优质AI工具</p>
        </div>
      </footer>
    </div>
  );
}
