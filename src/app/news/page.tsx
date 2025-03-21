import { Header } from "@/components/header";
import { Sidebar } from "@/components/sidebar";
import Link from "next/link";

// Mock data for AI news
const newsItems = [
  {
    id: "1",
    title: "ICLR 2025 纳入最新半监督学习解决PDF的标题识别，为模型理解出版物提供新方法",
    source: "机器之心",
    date: "03-20 10:44",
    url: "https://www.jiqizhixin.com/articles/2025-03-20-13"
  },
  {
    id: "2",
    title: "谷歌机器人模型再成为顶会座上宾，「让我想想」平替RT-2，PaLM-E增长不少",
    source: "机器之心",
    date: "03-20 10:32",
    url: "https://www.jiqizhixin.com/articles/2025-03-20-12"
  },
  {
    id: "3",
    title: "国内外大模型接连爆发，大模型的8个关键技术要点，这个木星级模型开发了7个月",
    source: "机器之心",
    date: "03-20 10:05",
    url: "https://www.jiqizhixin.com/articles/2025-03-20-11"
  },
  {
    id: "4",
    title: "开发者福音！通过AI和区块链技术，轻松创业并获得技术支持",
    source: "机器之心",
    date: "03-20 10:02",
    url: "https://www.jiqizhixin.com/articles/2025-03-20-10"
  },
  {
    id: "5",
    title: "2024年大模型各方向发展预测，预计今年将有更多创新功能在2025呈现",
    source: "机器之心",
    date: "03-20 09:17",
    url: "https://www.jiqizhixin.com/articles/2025-03-20-9"
  },
  {
    id: "6",
    title: "宝玉：杀手级功能是「和」，不是「替」，全球学术界的顶尖AI研究人才在哪家公司",
    source: "机器之心",
    date: "03-20 06:42",
    url: "https://www.jiqizhixin.com/articles/2025-03-20-8"
  },
  {
    id: "7",
    title: "LLM和AI多模态研究方向，前景是什么？知乎网友才认为真正的AI已经来了",
    source: "机器之心",
    date: "03-20 06:37",
    url: "https://www.jiqizhixin.com/articles/2025-03-20-7"
  },
  {
    id: "8",
    title: "车工AI行业：生成式AI如何帮助用户体验提升？",
    source: "机器之心",
    date: "03-20 06:33",
    url: "https://www.jiqizhixin.com/articles/2025-03-20-6"
  },
  {
    id: "9",
    title: "元宇宙又火了，又是文本生成GAN，除了tokenizer功能令人惊叹",
    source: "机器之心",
    date: "03-20 06:30",
    url: "https://www.jiqizhixin.com/articles/2025-03-20-5"
  },
  {
    id: "10",
    title: "优秀的DNA序列表达和RNA语言模型分析，AI大大加快了药物研发",
    source: "机器之心",
    date: "03-20 06:12",
    url: "https://www.jiqizhixin.com/articles/2025-03-20-4"
  }
];

export default function NewsPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />

      <div className="flex flex-1">
        <Sidebar />

        <main className="flex-1 p-6">
          <div className="max-w-4xl mx-auto">
            <div className="mb-6">
              <h1 className="text-2xl font-bold mb-2">每日最新AI 新闻&文章，9\12\15\17\20\23点更新</h1>
              <p className="text-gray-500 text-sm">当前时间：{new Date().toLocaleString('zh-CN')}</p>
            </div>

            <div className="bg-white rounded-lg border border-gray-200 overflow-hidden">
              <div className="divide-y divide-gray-200">
                {newsItems.map((item) => (
                  <Link
                    key={item.id}
                    href={item.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block p-4 hover:bg-gray-50 transition-colors"
                  >
                    <div className="flex items-start gap-2">
                      <span className="text-gray-500 shrink-0 text-sm mt-0.5">{item.id}</span>
                      <div className="flex-1">
                        <h3 className="font-medium text-gray-900 mb-1 hover:text-blue-600">{item.title}</h3>
                        <div className="flex items-center text-xs text-gray-500">
                          <span className="mr-3">{item.source}</span>
                          <span>{item.date}</span>
                        </div>
                      </div>
                    </div>
                  </Link>
                ))}
              </div>
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
