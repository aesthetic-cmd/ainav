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
            <div className="mb-12 py-8 text-center">
              <h1 className="text-3xl font-bold mb-4 bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
                AInav - AI导航网 | 发现优质AI工具，为你导航未来
              </h1>
              <p className="text-gray-600 max-w-2xl mx-auto text-lg">
                收录<span className="font-bold text-blue-600">1000+</span>优质AI工具，涵盖AI对话、绘画、视频制作、写作等多个领域
              </p>
              <div className="mt-6 inline-flex items-center text-sm text-gray-500 bg-gray-50 px-4 py-2 rounded-full">
                <span className="animate-pulse mr-2 h-2 w-2 rounded-full bg-green-500"></span>
                持续更新中，每周添加新工具
              </div>
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

      <footer className="bg-white py-8 border-t border-gray-200 lg:ml-64">
        <div className="container mx-auto px-4 text-center">
          <div className="mb-4 flex justify-center space-x-6">
            <a href="#" className="text-gray-500 hover:text-blue-600 transition-colors">
              关于我们
            </a>
            <a href="#" className="text-gray-500 hover:text-blue-600 transition-colors">
              联系方式
            </a>
            <a href="#" className="text-gray-500 hover:text-blue-600 transition-colors">
              免责声明
            </a>
            <a href="#" className="text-gray-500 hover:text-blue-600 transition-colors">
              隐私政策
            </a>
          </div>
          <p className="text-sm text-gray-500">
            &copy; {new Date().getFullYear()} AI导航网 - 精选全球优质AI工具，提供专业导航服务
          </p>
          <p className="text-xs text-gray-400 mt-2">
            本站仅提供AI工具导航服务，所有工具版权归原作者所有
          </p>
        </div>
      </footer>
    </div>
  );
}
