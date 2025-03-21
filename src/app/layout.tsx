import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import ClientBody from "./ClientBody";
import { cn } from "@/lib/utils";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "AI导航网官网 - 国内外1000+AI工具,发现好用AI,为你导航未来",
  description: "AI导航网，收录了国内外1000+AI工具，该导航收录了AI绘画、AI对话聊天、AI视频制作、AI音乐生成、AI图片处理、AI音频处理、AI办公软件、AI辅助编程、AI开放平台、AI资讯、AI算力平台等多个领域，每日AI资讯更新，精选实用AI神器，帮助你高效工作、学习，AI爱好者必备的工具导航站点！",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="zh-CN">
      <head>
        <link rel="icon" href="https://ext.same-assets.com/3456190305/1158758323.png" />
      </head>
      <body className={cn(inter.className, "bg-[#fafafa] min-h-screen")}>
        {children}
      </body>
    </html>
  );
}
