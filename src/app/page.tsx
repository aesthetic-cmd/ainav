import { Header } from "@/components/header";
import { Sidebar } from "@/components/sidebar";
import { CategorySection } from "@/components/category-section";
import { aiTools } from "@/data/sites";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />

      <div className="flex flex-1">
        <Sidebar />

        <main className="flex-1 p-6">
          <div className="max-w-7xl mx-auto">
            <div className="mb-8">
              <h1 className="text-2xl font-bold text-center mb-2">AInav - AI导航网 | 发现优质AI工具，为你导航未来</h1>
              <p className="text-gray-600 text-center max-w-3xl mx-auto">
                AI导航网收录了国内外1000+AI工具，AI绘画、AI对话聊天、AI视频制作等多个领域
              </p>
            </div>

            <div className="py-4">
              <CategorySection title="AI热门工具" sites={aiTools.featured} />
              <CategorySection title="AI对话聊天" sites={aiTools.chat} />
              <CategorySection title="AI文本写作" sites={aiTools.writing} />
              <CategorySection title="AI绘画生成" sites={aiTools.art} />

              {/* More categories can be added as needed */}
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
