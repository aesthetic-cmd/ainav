import Link from "next/link";
import Image from "next/image";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Search } from "lucide-react";

export function Header() {
  return (
    <header className="w-full bg-white border-b border-gray-200 sticky top-0 z-50">
      <div className="container mx-auto px-4 py-3 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <Link href="/" className="flex items-center gap-2">
            <Image
              src="https://ext.same-assets.com/3456190305/1117858943.png"
              alt="AI导航网"
              width={40}
              height={40}
              className="h-10 w-auto"
            />
            <Image
              src="https://ext.same-assets.com/3456190305/3123139570.png"
              alt="AI导航网"
              width={120}
              height={40}
              className="h-10 w-auto hidden sm:block"
            />
          </Link>
        </div>

        <div className="flex-1 max-w-xl mx-4 hidden md:flex">
          <div className="relative w-full">
            <Input
              type="text"
              placeholder="探索国内外AI应用，找到适合你的AI工具..."
              className="w-full pr-10 rounded-full"
            />
            <Button
              size="icon"
              variant="ghost"
              className="absolute right-0 top-0 h-full rounded-r-full"
            >
              <Search className="h-4 w-4" />
            </Button>
          </div>
        </div>

        <nav className="hidden md:flex items-center gap-6">
          <Link href="/" className="text-sm font-medium hover:text-blue-600">首页</Link>
          <Link href="/news" className="text-sm font-medium hover:text-blue-600">AI资讯</Link>
          <Link href="/blog" className="text-sm font-medium hover:text-blue-600">专栏</Link>
          <Link href="https://www.doubao.com/?channel=ainav&source=hw_db_ainav" target="_blank" className="text-sm font-medium hover:text-blue-600">AI写作-豆包</Link>
          <Link href="https://www.youyan3d.com/platform/?utm_source=zhanwaidaoliu&utm_campaign=zwj&utm_content=ainav&from=ainav" target="_blank" className="text-sm font-medium hover:text-blue-600">AI 3D</Link>
          <Link href="https://www.aipaperpass.com/?pic=24qA" target="_blank" className="text-sm font-medium hover:text-blue-600">AI论文检测</Link>
        </nav>

        <button className="md:hidden">
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <line x1="4" x2="20" y1="12" y2="12"/>
            <line x1="4" x2="20" y1="6" y2="6"/>
            <line x1="4" x2="20" y1="18" y2="18"/>
          </svg>
        </button>
      </div>
    </header>
  );
}
