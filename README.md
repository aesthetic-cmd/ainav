# AI导航网站 (AInav)

一个仿 [ainav.cn](http://www.ainav.cn) 风格的AI资源导航网站，使用Next.js和React构建，提供了丰富的AI工具、资源分类和搜索功能。

## 项目简介

AI导航网站是一个集成了国内外各类AI工具、资源的导航平台。项目旨在为用户提供一站式AI工具发现体验，涵盖AI聊天、AI写作、AI绘画、AI视频等多个领域的优质工具。

## 功能特点

- **分类导航**：将AI工具按照功能分类展示，便于用户快速找到所需工具
- **热门推荐**：首页展示热门和新上线的AI工具
- **响应式设计**：适配桌面和移动设备的界面布局
- **搜索功能**：支持搜索特定AI工具
- **外部链接**：所有工具卡片支持点击跳转到对应网站
- **新品标记**：对新上线的AI工具进行特殊标记

## 技术栈

- **框架**: Next.js 15.x (React框架)
- **样式**: Tailwind CSS + shadcn/ui组件库
- **语言**: TypeScript
- **部署**: 支持Netlify部署

## 项目结构

```
├── src/                  # 源代码目录
│   ├── app/              # Next.js应用目录
│   │   ├── page.tsx      # 首页
│   │   ├── layout.tsx    # 应用布局
│   │   ├── globals.css   # 全局样式
│   │   ├── blog/         # 博客页面
│   │   └── news/         # 资讯页面
│   ├── components/       # React组件
│   │   ├── category-section.tsx  # 分类区块组件
│   │   ├── header.tsx            # 页头组件
│   │   ├── sidebar.tsx           # 侧边栏组件 
│   │   ├── site-card.tsx         # 网站卡片组件
│   │   └── ui/                   # UI通用组件
│   ├── data/             # 数据文件
│   │   └── sites.ts      # 网站数据
│   └── lib/              # 工具库和辅助函数
├── public/               # 静态资源
├── package.json          # 项目依赖配置
└── next.config.mjs       # Next.js配置
```

## 数据结构

网站数据存储在`src/data/sites.ts`文件中，按照以下结构组织：

```typescript
{
  id: string;           // 唯一标识符
  title: string;        // 网站名称
  description: string;  // 简短描述
  imageUrl: string;     // 图标/图片URL
  url: string;          // 网站链接
  isNew?: boolean;      // 是否为新上线(可选)
}
```

## 运行项目

### 开发环境

```bash
# 安装依赖
npm install
# 或
bun install

# 启动开发服务器
npm run dev
# 或
bun run dev
```

开发服务器将在 [http://localhost:3000](http://localhost:3000) 启动。

### 构建部署

```bash
# 构建生产版本
npm run build
# 或
bun run build

# 运行生产版本
npm start
# 或
bun start
```

## 自定义与扩展

要添加新的AI工具分类或网站：

1. 在`src/data/sites.ts`中添加新的网站数据
2. 根据需要在`src/app/page.tsx`中添加新的`<CategorySection>`组件

## 贡献指南

欢迎提交Pull Request或Issue来改进这个项目。

## 许可证

MIT
