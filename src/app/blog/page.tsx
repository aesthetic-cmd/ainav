import { Header } from "@/components/header";
import { Sidebar } from "@/components/sidebar";
import Link from "next/link";
import Image from "next/image";

// Mock data for blog posts
const blogPosts = [
  {
    id: "1",
    title: "AI大模型的未来发展：趋势与挑战",
    excerpt: "随着大模型技术的快速发展，AI领域正经历前所未有的变革。本文探讨了大模型未来发展的关键趋势和面临的挑战...",
    author: "李明",
    date: "2025-03-18",
    imageUrl: "https://ext.same-assets.com/3456190305/2375844796.png",
    url: "/blog/ai-large-models-future"
  },
  {
    id: "2",
    title: "如何高效使用ChatGPT提升工作效率",
    excerpt: "ChatGPT作为一款强大的AI助手，能够在各种工作场景中提供帮助。本文分享了使用ChatGPT的最佳实践和技巧...",
    author: "王芳",
    date: "2025-03-15",
    imageUrl: "https://ext.same-assets.com/3456190305/2629653201.png",
    url: "/blog/chatgpt-productivity-tips"
  },
  {
    id: "3",
    title: "AI绘画工具大比拼：Midjourney vs DALL-E vs Stable Diffusion",
    excerpt: "AI绘画工具正在彻底改变创意产业。本文对比了三款主流AI绘画工具的特点、优势和适用场景...",
    author: "张伟",
    date: "2025-03-10",
    imageUrl: "https://ext.same-assets.com/3456190305/1339143858.png",
    url: "/blog/ai-art-tools-comparison"
  },
  {
    id: "4",
    title: "企业如何有效落地AI技术：从战略到实施",
    excerpt: "许多企业希望借助AI技术提升竞争力，但落地过程常常面临挑战。本文提供了一套实用的AI落地框架...",
    author: "陈晓",
    date: "2025-03-05",
    imageUrl: "https://ext.same-assets.com/3456190305/3876589996.png",
    url: "/blog/ai-implementation-for-business"
  }
];

export default function BlogPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />

      <div className="flex flex-1">
        <Sidebar />

        <main className="flex-1 p-6">
          <div className="max-w-4xl mx-auto">
            <div className="mb-6">
              <h1 className="text-2xl font-bold mb-2">AI技术专栏</h1>
              <p className="text-gray-600">探索AI技术前沿，分享实用AI应用经验</p>
            </div>

            <div className="grid gap-6">
              {blogPosts.map((post) => (
                <Link
                  key={post.id}
                  href={post.url}
                  className="block bg-white rounded-lg border border-gray-200 overflow-hidden hover:shadow-md transition-shadow"
                >
                  <div className="flex flex-col md:flex-row">
                    <div className="md:w-1/3 h-48 md:h-auto relative">
                      <Image
                        src={post.imageUrl}
                        alt={post.title}
                        fill
                        className="object-cover"
                      />
                    </div>
                    <div className="p-5 md:w-2/3">
                      <h3 className="text-xl font-semibold mb-2 text-gray-900 hover:text-blue-600">{post.title}</h3>
                      <p className="text-gray-600 mb-4 line-clamp-2">{post.excerpt}</p>
                      <div className="flex items-center text-sm text-gray-500">
                        <span className="mr-3">{post.author}</span>
                        <span>{post.date}</span>
                      </div>
                    </div>
                  </div>
                </Link>
              ))}
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
