import Link from "next/link";
import { Header } from "@/components/header";

export default function NotFound() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      
      <main className="flex-1 flex items-center justify-center p-6">
        <div className="text-center max-w-md mx-auto">
          <h1 className="text-5xl font-bold text-gray-800 mb-4">404</h1>
          <h2 className="text-2xl font-semibold text-gray-700 mb-4">页面未找到</h2>
          <p className="text-gray-600 mb-8">
            您访问的页面不存在或已被移除。请确认URL是否正确。
          </p>
          <Link 
            href="/" 
            className="px-6 py-3 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors"
          >
            返回首页
          </Link>
        </div>
      </main>
      
      <footer className="bg-white py-6 border-t border-gray-200">
        <div className="container mx-auto px-4 text-center text-sm text-gray-500">
          <p>&copy; {new Date().getFullYear()} AI导航网 - 收录优质AI工具</p>
        </div>
      </footer>
    </div>
  );
} 