module.exports = {

"[project]/.next-internal/server/app/[slug]/page/actions.js [app-rsc] (server actions loader, ecmascript)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
}}),
"[project]/src/app/layout.tsx [app-rsc] (ecmascript, Next.js server component)": ((__turbopack_context__) => {

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.n(__turbopack_context__.i("[project]/src/app/layout.tsx [app-rsc] (ecmascript)"));
}}),
"[project]/src/app/not-found.tsx [app-rsc] (ecmascript, Next.js server component)": ((__turbopack_context__) => {

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.n(__turbopack_context__.i("[project]/src/app/not-found.tsx [app-rsc] (ecmascript)"));
}}),
"[project]/src/components/sidebar.tsx [app-rsc] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "Sidebar": (()=>Sidebar)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react-jsx-dev-runtime.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/client/app-dir/link.js [app-rsc] (ecmascript)");
;
;
// 侧边栏分类数据
const categories = [
    {
        name: "AI热门工具",
        slug: "featured",
        icon: "🔥"
    },
    {
        name: "AI对话聊天",
        slug: "chat",
        icon: "💬"
    },
    {
        name: "AI文本写作",
        slug: "writing",
        icon: "📝"
    },
    {
        name: "AI绘画生成",
        slug: "art",
        icon: "🎨"
    },
    {
        name: "AI提示词库",
        slug: "prompts",
        icon: "📋"
    },
    {
        name: "AI搜索引擎",
        slug: "search",
        icon: "🔍"
    },
    {
        name: "AI应用集成",
        slug: "integration",
        icon: "🔄"
    },
    {
        name: "AI图像处理",
        slug: "image",
        icon: "🖼️"
    },
    {
        name: "AI视频制作",
        slug: "video",
        icon: "🎬"
    },
    {
        name: "AI音频处理",
        slug: "audio",
        icon: "🎵"
    },
    {
        name: "AI文档助手",
        slug: "docs",
        icon: "📄"
    },
    {
        name: "AI办公软件",
        slug: "office",
        icon: "💼"
    },
    {
        name: "AI编程开发",
        slug: "code",
        icon: "💻"
    },
    {
        name: "AI内容鉴别",
        slug: "content",
        icon: "🔎"
    },
    {
        name: "AI教育学习",
        slug: "education",
        icon: "📚"
    },
    {
        name: "AI算力平台",
        slug: "computing",
        icon: "⚙️"
    },
    {
        name: "AI工具教程",
        slug: "tutorials",
        icon: "📖"
    },
    {
        name: "AI资讯情报",
        slug: "news",
        icon: "📰"
    },
    {
        name: "AIGC资源",
        slug: "resources",
        icon: "🧰"
    },
    {
        name: "AI模型开源",
        slug: "models",
        icon: "🧩"
    },
    {
        name: "AI商业应用",
        slug: "business",
        icon: "💰"
    },
    {
        name: "AI学习社区",
        slug: "community",
        icon: "👥"
    },
    {
        name: "AI解决方案",
        slug: "solutions",
        icon: "🔧"
    }
];
function Sidebar() {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("aside", {
        className: "w-64 hidden lg:block border-r border-gray-200 min-h-screen p-4 bg-white",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "space-y-1",
            children: categories.map((category)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"], {
                    href: `/#${category.slug}`,
                    className: "flex items-center gap-2 px-3 py-2 text-sm rounded-md hover:bg-gray-100 hover:text-blue-600 transition-colors",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                            children: category.icon
                        }, void 0, false, {
                            fileName: "[project]/src/components/sidebar.tsx",
                            lineNumber: 40,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                            children: category.name
                        }, void 0, false, {
                            fileName: "[project]/src/components/sidebar.tsx",
                            lineNumber: 41,
                            columnNumber: 13
                        }, this)
                    ]
                }, category.slug, true, {
                    fileName: "[project]/src/components/sidebar.tsx",
                    lineNumber: 35,
                    columnNumber: 11
                }, this))
        }, void 0, false, {
            fileName: "[project]/src/components/sidebar.tsx",
            lineNumber: 33,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/src/components/sidebar.tsx",
        lineNumber: 32,
        columnNumber: 5
    }, this);
}
}}),
"[project]/src/components/ui/badge.tsx [app-rsc] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "Badge": (()=>Badge),
    "badgeVariants": (()=>badgeVariants)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react-jsx-dev-runtime.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$class$2d$variance$2d$authority$2f$dist$2f$index$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/class-variance-authority/dist/index.mjs [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/utils.ts [app-rsc] (ecmascript)");
;
;
;
const badgeVariants = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$class$2d$variance$2d$authority$2f$dist$2f$index$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["cva"])("inline-flex items-center rounded-md border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2", {
    variants: {
        variant: {
            default: "border-transparent bg-primary text-primary-foreground shadow hover:bg-primary/80",
            secondary: "border-transparent bg-secondary text-secondary-foreground hover:bg-secondary/80",
            destructive: "border-transparent bg-destructive text-destructive-foreground shadow hover:bg-destructive/80",
            outline: "text-foreground"
        }
    },
    defaultVariants: {
        variant: "default"
    }
});
function Badge({ className, variant, ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["cn"])(badgeVariants({
            variant
        }), className),
        ...props
    }, void 0, false, {
        fileName: "[project]/src/components/ui/badge.tsx",
        lineNumber: 32,
        columnNumber: 5
    }, this);
}
;
}}),
"[project]/src/components/site-card.tsx [app-rsc] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "SiteCard": (()=>SiteCard)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react-jsx-dev-runtime.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$badge$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/ui/badge.tsx [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/image.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/client/app-dir/link.js [app-rsc] (ecmascript)");
;
;
;
;
function SiteCard({ title, description, imageUrl, url, isNew = false }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"], {
        href: url,
        target: "_blank",
        rel: "noopener noreferrer",
        className: "block bg-white rounded-lg border border-gray-200 hover:shadow-md transition-shadow overflow-hidden group",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "p-4 flex flex-col h-full",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex items-start gap-3 mb-2",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "shrink-0",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"], {
                            src: imageUrl,
                            alt: title,
                            width: 40,
                            height: 40,
                            className: "rounded w-10 h-10 object-contain bg-gray-50"
                        }, void 0, false, {
                            fileName: "[project]/src/components/site-card.tsx",
                            lineNumber: 24,
                            columnNumber: 13
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/src/components/site-card.tsx",
                        lineNumber: 23,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex-1 min-w-0",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex items-center gap-2",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                        className: "font-medium text-sm text-gray-900 truncate group-hover:text-blue-600",
                                        children: title
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/site-card.tsx",
                                        lineNumber: 34,
                                        columnNumber: 15
                                    }, this),
                                    isNew && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$badge$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["Badge"], {
                                        variant: "outline",
                                        className: "bg-red-50 text-red-600 border-red-200 text-[10px] h-4 px-1",
                                        children: "NEW"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/site-card.tsx",
                                        lineNumber: 36,
                                        columnNumber: 17
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/site-card.tsx",
                                lineNumber: 33,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "text-xs text-gray-500 line-clamp-2 mt-1",
                                children: description
                            }, void 0, false, {
                                fileName: "[project]/src/components/site-card.tsx",
                                lineNumber: 41,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/site-card.tsx",
                        lineNumber: 32,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/site-card.tsx",
                lineNumber: 22,
                columnNumber: 9
            }, this)
        }, void 0, false, {
            fileName: "[project]/src/components/site-card.tsx",
            lineNumber: 21,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/src/components/site-card.tsx",
        lineNumber: 15,
        columnNumber: 5
    }, this);
}
}}),
"[project]/src/components/category-section.tsx [app-rsc] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "CategorySection": (()=>CategorySection)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react-jsx-dev-runtime.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$site$2d$card$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/site-card.tsx [app-rsc] (ecmascript)");
;
;
function CategorySection({ title, sites }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
        className: "mb-8",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex items-center gap-2 mb-4",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                        className: "text-lg font-bold text-gray-900",
                        children: title
                    }, void 0, false, {
                        fileName: "[project]/src/components/category-section.tsx",
                        lineNumber: 19,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex-1 h-px bg-gray-200"
                    }, void 0, false, {
                        fileName: "[project]/src/components/category-section.tsx",
                        lineNumber: 20,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/category-section.tsx",
                lineNumber: 18,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4",
                children: sites.map((site)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$site$2d$card$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["SiteCard"], {
                        title: site.title,
                        description: site.description,
                        imageUrl: site.imageUrl,
                        url: site.url,
                        isNew: site.isNew
                    }, site.id, false, {
                        fileName: "[project]/src/components/category-section.tsx",
                        lineNumber: 25,
                        columnNumber: 11
                    }, this))
            }, void 0, false, {
                fileName: "[project]/src/components/category-section.tsx",
                lineNumber: 23,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/category-section.tsx",
        lineNumber: 17,
        columnNumber: 5
    }, this);
}
}}),
"[project]/src/data/sites.ts [app-rsc] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "aiArtSites": (()=>aiArtSites),
    "aiAudioSites": (()=>aiAudioSites),
    "aiChatSites": (()=>aiChatSites),
    "aiCodeSites": (()=>aiCodeSites),
    "aiOfficeSites": (()=>aiOfficeSites),
    "aiTools": (()=>aiTools),
    "aiVideoSites": (()=>aiVideoSites),
    "aiWritingSites": (()=>aiWritingSites),
    "featuredSites": (()=>featuredSites)
});
const featuredSites = [
    {
        id: "1",
        title: "AI助手精选",
        description: "内置GPT4、Claude3.5、Gemini-1.5等AI模型，可制作PPT，绘图Midjourney",
        imageUrl: "https://ext.same-assets.com/3456190305/1942649637.png",
        url: "https://www.aibox365.com",
        isNew: true
    },
    {
        id: "2",
        title: "Viggle AI",
        description: "Viggle AI 助手 JST-1 平台，加入 Discord 社区",
        imageUrl: "https://ext.same-assets.com/3456190305/3959325349.png",
        url: "https://www.ainav.cn/sites/4496.html",
        isNew: true
    },
    {
        id: "3",
        title: "MiniMax Audio",
        description: "MiniMaxAI新推出的语音对话AI服务",
        imageUrl: "https://ext.same-assets.com/3456190305/2617716884.png",
        url: "https://www.ainav.cn/sites/4492.html",
        isNew: true
    },
    {
        id: "4",
        title: "CLiB",
        description: "全球首个基于 195 亿参数规模大语言模型训练的AI绘画平台",
        imageUrl: "https://ext.same-assets.com/3456190305/3355701914.png",
        url: "https://www.ainav.cn/sites/4475.html"
    },
    {
        id: "5",
        title: "PPT智能助手",
        description: "官方出品PPT神器，完全免费的AIPPT生成工具",
        imageUrl: "https://ext.same-assets.com/3456190305/354466261.png",
        url: "https://www.ainav.cn/sites/4467.html"
    },
    {
        id: "6",
        title: "Claude 3.5 Sonnet",
        description: "Anthropic全新AI模型，各项能力全面提升",
        imageUrl: "https://www.anthropic.com/images/favicon.ico",
        url: "https://claude.ai",
        isNew: true
    },
    {
        id: "7",
        title: "GPT-4o",
        description: "OpenAI最新多模态AI模型，支持视觉、语音和文本输入",
        imageUrl: "https://openai.com/favicon.ico",
        url: "https://chat.openai.com",
        isNew: true
    },
    {
        id: "8",
        title: "文心一言",
        description: "百度推出的知识增强大语言模型，提供全面解决方案",
        imageUrl: "https://nlp-eb.cdn.bcebos.com/wxyy/favicon.ico",
        url: "https://yiyan.baidu.com/",
        isNew: true
    }
];
const aiChatSites = [
    {
        id: "chat1",
        title: "豆包AI",
        description: "AI-对话、写作、绘画、视频制作、AI办公一站式AI生产力工具",
        imageUrl: "https://ext.same-assets.com/3456190305/3919441126.png",
        url: "https://www.doubao.com?channel=ainav&source=hw_db_ainav"
    },
    {
        id: "chat2",
        title: "DeepSeek",
        description: "DeepSeek首创平替GPT4技术，支持中英文和编程",
        imageUrl: "https://ext.same-assets.com/3456190305/220991140.png",
        url: "https://www.ainav.cn/sites/3294.html"
    },
    {
        id: "chat3",
        title: "通义千问",
        description: "阿里巴巴自研的大语言模型，具备跨模态能力",
        imageUrl: "https://ext.same-assets.com/3456190305/3332033272.png",
        url: "https://www.ainav.cn/sites/1367.html"
    },
    {
        id: "chat4",
        title: "智谱清言 ChatGLM",
        description: "智谱AI与清华KEG实验室联合打造的大语言模型",
        imageUrl: "https://ext.same-assets.com/3456190305/11282093.png",
        url: "https://www.ainav.cn/sites/1400.html"
    },
    {
        id: "chat5",
        title: "Claude",
        description: "Anthropic的AI助手，擅长复杂推理和创意写作",
        imageUrl: "https://www.anthropic.com/images/favicon.ico",
        url: "https://claude.ai"
    },
    {
        id: "chat6",
        title: "Gemini",
        description: "Google的多模态AI模型，支持文字、图像和视频输入",
        imageUrl: "https://www.gstatic.com/lamda/images/favicon_v1_150160cddff7f294ce30.svg",
        url: "https://gemini.google.com"
    },
    {
        id: "chat7",
        title: "Perplexity",
        description: "基于AI的搜索引擎，提供准确的回答和引用来源",
        imageUrl: "https://www.perplexity.ai/favicon.ico",
        url: "https://www.perplexity.ai"
    },
    {
        id: "chat8",
        title: "月之暗面",
        description: "国内知名大语言模型，支持多种功能",
        imageUrl: "https://www.moonshot.cn/favicon.ico",
        url: "https://www.moonshot.cn"
    }
];
const aiWritingSites = [
    {
        id: "writing1",
        title: "讯飞星火",
        description: "科大讯飞出品的大语言模型，能力强大",
        imageUrl: "https://ext.same-assets.com/3456190305/3984156393.ico",
        url: "https://xinghuo.xfyun.cn/desk?ch=xhweb_NYw"
    },
    {
        id: "writing2",
        title: "灵笔AI",
        description: "专业文案创作工具，让写作更高效",
        imageUrl: "https://ext.same-assets.com/3456190305/795423676.png",
        url: "https://ilingban.com/chat/?type=pic&from=xyqd20"
    },
    {
        id: "writing3",
        title: "写作猫",
        description: "集成了200+写作场景的智能写作平台",
        imageUrl: "https://ext.same-assets.com/3456190305/4030467546.png",
        url: "https://www.ainav.cn/sites/4110.html"
    },
    {
        id: "writing4",
        title: "Notion AI",
        description: "Notion内置的AI写作助手，提升记录和创作效率",
        imageUrl: "https://www.notion.so/front-static/favicon.ico",
        url: "https://www.notion.so/product/ai"
    },
    {
        id: "writing5",
        title: "Jasper AI",
        description: "专业级AI内容创作平台，擅长营销文案创作",
        imageUrl: "https://assets-global.website-files.com/60e5f2de011b86acebc30db7/60e5f2de011b86c02fc30e5f_Jasper_Favicon_32x32.png",
        url: "https://www.jasper.ai"
    },
    {
        id: "writing6",
        title: "Rytr",
        description: "经济实惠的AI写作工具，支持多种内容类型和语言",
        imageUrl: "https://rytr.me/favicon.png",
        url: "https://rytr.me"
    }
];
const aiArtSites = [
    {
        id: "art1",
        title: "Shakker.AI",
        description: "Shakker.ai AI绘画平台让创作变得简单",
        imageUrl: "https://ext.same-assets.com/3456190305/761016957.png",
        url: "https://www.ainav.cn/sites/4436.html"
    },
    {
        id: "art2",
        title: "意绘",
        description: "意绘是一款强大的AI绘画工具，支持多种风格",
        imageUrl: "https://ext.same-assets.com/3456190305/28053457.ico",
        url: "https://www.ainav.cn/sites/4014.html"
    },
    {
        id: "art3",
        title: "Recraft V3",
        description: "Recraft AI推出Recraft V3引擎，和全新Flux 1.1 [pro]模型",
        imageUrl: "https://ext.same-assets.com/3456190305/1054362217.png",
        url: "https://www.ainav.cn/sites/3978.html"
    },
    {
        id: "art4",
        title: "百度绘画",
        description: "百度AI绘画平台，易用且功能强大",
        imageUrl: "https://ext.same-assets.com/3456190305/3314727025.png",
        url: "https://www.ainav.cn/sites/412.html"
    },
    {
        id: "art5",
        title: "Midjourney",
        description: "顶级AI绘画工具，通过文字生成精美图像",
        imageUrl: "https://www.midjourney.com/apple-touch-icon.png",
        url: "https://www.midjourney.com"
    },
    {
        id: "art6",
        title: "Stable Diffusion",
        description: "开源AI图像生成模型，支持本地部署",
        imageUrl: "https://stability.ai/favicon.ico",
        url: "https://stability.ai"
    },
    {
        id: "art7",
        title: "DALL·E 3",
        description: "OpenAI出品的AI绘画模型，创意与精度兼具",
        imageUrl: "https://openai.com/favicon.ico",
        url: "https://openai.com/dall-e-3"
    },
    {
        id: "art8",
        title: "Adobe Firefly",
        description: "Adobe推出的AI创意工具，专注于生成型AI",
        imageUrl: "https://www.adobe.com/favicon.ico",
        url: "https://www.adobe.com/products/firefly.html"
    }
];
const aiVideoSites = [
    {
        id: "video1",
        title: "Runway",
        description: "领先的AI视频生成和编辑平台，可实现文本生成视频",
        imageUrl: "https://runwayml.com/favicon.png",
        url: "https://runwayml.com"
    },
    {
        id: "video2",
        title: "Fliki",
        description: "AI驱动的文本转视频工具，带有逼真的AI配音",
        imageUrl: "https://fliki.ai/favicon.ico",
        url: "https://fliki.ai"
    },
    {
        id: "video3",
        title: "HeyGen",
        description: "AI数字人视频生成平台，快速创建高质量视频",
        imageUrl: "https://assets-global.website-files.com/63fcd79d397cbea96f1adc75/64654c4c4e59e15e255bbd48_favicon.png",
        url: "https://www.heygen.com"
    },
    {
        id: "video4",
        title: "Synthesia",
        description: "AI数字人视频平台，70+语言，无需摄像设备",
        imageUrl: "https://www.synthesia.io/favicon.ico",
        url: "https://www.synthesia.io"
    },
    {
        id: "video5",
        title: "Descript",
        description: "AI视频编辑工具，支持转录、克隆声音等功能",
        imageUrl: "https://assets-global.website-files.com/5d77259305f9e87d2715a99e/5fd274d0cedd7d0c077e0b5f_favicon_256.png",
        url: "https://www.descript.com"
    }
];
const aiAudioSites = [
    {
        id: "audio1",
        title: "ElevenLabs",
        description: "高质量AI语音合成，多种语言与情感表达",
        imageUrl: "https://elevenlabs.io/favicon.ico",
        url: "https://elevenlabs.io"
    },
    {
        id: "audio2",
        title: "Murf AI",
        description: "专业AI配音工具，支持120种语音和20种语言",
        imageUrl: "https://murf.ai/favicon.ico",
        url: "https://murf.ai"
    },
    {
        id: "audio3",
        title: "Resemble AI",
        description: "个性化AI语音克隆和合成工具",
        imageUrl: "https://www.resemble.ai/favicon.ico",
        url: "https://www.resemble.ai"
    },
    {
        id: "audio4",
        title: "Whisper",
        description: "OpenAI的开源自动语音识别系统",
        imageUrl: "https://openai.com/favicon.ico",
        url: "https://openai.com/research/whisper"
    }
];
const aiCodeSites = [
    {
        id: "code1",
        title: "GitHub Copilot",
        description: "AI编程助手，可根据注释生成代码",
        imageUrl: "https://github.githubassets.com/favicons/favicon.png",
        url: "https://github.com/features/copilot"
    },
    {
        id: "code2",
        title: "Cursor",
        description: "AI驱动的代码编辑器，基于VSCode开发",
        imageUrl: "https://cursor.sh/favicon.ico",
        url: "https://cursor.sh"
    },
    {
        id: "code3",
        title: "Tabnine",
        description: "本地运行的AI代码助手，保护代码隐私",
        imageUrl: "https://www.tabnine.com/favicon.ico",
        url: "https://www.tabnine.com"
    },
    {
        id: "code4",
        title: "CodeWhisperer",
        description: "亚马逊提供的AI编程助手",
        imageUrl: "https://aws.amazon.com/favicon.ico",
        url: "https://aws.amazon.com/codewhisperer"
    },
    {
        id: "code5",
        title: "Devin",
        description: "首个AI软件工程师，可独立完成复杂编程任务",
        imageUrl: "https://cdn.prod.website-files.com/6426a4755a610550f3e97866/6426a4755a61054ef3e97959_favicon.png",
        url: "https://www.cognition.ai"
    }
];
const aiOfficeSites = [
    {
        id: "office1",
        title: "Tome",
        description: "AI驱动的演示文稿创建工具，生成精美幻灯片",
        imageUrl: "https://tome.app/favicon.ico",
        url: "https://tome.app"
    },
    {
        id: "office2",
        title: "Beautiful.ai",
        description: "智能演示设计工具，自动排版和设计",
        imageUrl: "https://www.beautiful.ai/favicon.ico",
        url: "https://www.beautiful.ai"
    },
    {
        id: "office3",
        title: "Gamma",
        description: "AI驱动的演示工具，快速生成精美演示文稿",
        imageUrl: "https://gamma.app/favicons/favicon.svg",
        url: "https://gamma.app"
    },
    {
        id: "office4",
        title: "Mem.ai",
        description: "AI驱动的笔记和知识管理工具",
        imageUrl: "https://mem.ai/favicon.ico",
        url: "https://mem.ai"
    },
    {
        id: "office5",
        title: "Otter.ai",
        description: "AI会议记录和语音转文字工具",
        imageUrl: "https://otter.ai/favicon.ico",
        url: "https://otter.ai"
    },
    {
        id: "office6",
        title: "Dropbox AI",
        description: "AI驱动的内容组织和搜索功能",
        imageUrl: "https://www.dropbox.com/favicon.ico",
        url: "https://www.dropbox.com/ai"
    }
];
const aiTools = {
    featured: featuredSites,
    chat: aiChatSites,
    writing: aiWritingSites,
    art: aiArtSites,
    video: aiVideoSites,
    audio: aiAudioSites,
    code: aiCodeSites,
    office: aiOfficeSites
};
}}),
"[project]/src/app/[slug]/page.tsx [app-rsc] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": (()=>CategoryPage)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react-jsx-dev-runtime.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$header$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/header.tsx [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$sidebar$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/sidebar.tsx [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$category$2d$section$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/category-section.tsx [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$sites$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/data/sites.ts [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$api$2f$navigation$2e$react$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$module__evaluation$3e$__ = __turbopack_context__.i("[project]/node_modules/next/dist/api/navigation.react-server.js [app-rsc] (ecmascript) <module evaluation>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$components$2f$navigation$2e$react$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/client/components/navigation.react-server.js [app-rsc] (ecmascript)");
;
;
;
;
;
;
// 分类slug映射到数据
const categoryMapping = {
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
const categoryNames = {
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
function CategoryPage({ params }) {
    const { slug } = params;
    // 获取分类名称
    const categoryTitle = categoryNames[slug];
    if (!categoryTitle) {
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$components$2f$navigation$2e$react$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["notFound"])();
    }
    // 获取分类数据
    let categorySites = [];
    const categoryKey = categoryMapping[slug];
    if (categoryKey && __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$sites$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["aiTools"][categoryKey]) {
        categorySites = __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$sites$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["aiTools"][categoryKey];
    } else {
        // 对于尚未实现的分类，使用占位数据
        categorySites = placeholderSites;
    }
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "flex flex-col min-h-screen",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$header$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["Header"], {}, void 0, false, {
                fileName: "[project]/src/app/[slug]/page.tsx",
                lineNumber: 94,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex flex-1",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$sidebar$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["Sidebar"], {}, void 0, false, {
                        fileName: "[project]/src/app/[slug]/page.tsx",
                        lineNumber: 97,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("main", {
                        className: "flex-1 p-6",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "max-w-7xl mx-auto",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "mb-8",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                                            className: "text-2xl font-bold text-center mb-2",
                                            children: categoryTitle
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/[slug]/page.tsx",
                                            lineNumber: 102,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: "text-gray-600 text-center max-w-3xl mx-auto",
                                            children: [
                                                "探索",
                                                categoryTitle,
                                                "分类下的优质AI工具和资源"
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/app/[slug]/page.tsx",
                                            lineNumber: 103,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/app/[slug]/page.tsx",
                                    lineNumber: 101,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "py-4",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$category$2d$section$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["CategorySection"], {
                                        title: categoryTitle,
                                        sites: categorySites
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/[slug]/page.tsx",
                                        lineNumber: 109,
                                        columnNumber: 15
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/src/app/[slug]/page.tsx",
                                    lineNumber: 108,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/app/[slug]/page.tsx",
                            lineNumber: 100,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/src/app/[slug]/page.tsx",
                        lineNumber: 99,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/app/[slug]/page.tsx",
                lineNumber: 96,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("footer", {
                className: "bg-white py-6 border-t border-gray-200",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "container mx-auto px-4 text-center text-sm text-gray-500",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        children: [
                            "© ",
                            new Date().getFullYear(),
                            " AI导航网 - 收录优质AI工具"
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/app/[slug]/page.tsx",
                        lineNumber: 117,
                        columnNumber: 11
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/src/app/[slug]/page.tsx",
                    lineNumber: 116,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/app/[slug]/page.tsx",
                lineNumber: 115,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/app/[slug]/page.tsx",
        lineNumber: 93,
        columnNumber: 5
    }, this);
}
}}),
"[project]/src/app/[slug]/page.tsx [app-rsc] (ecmascript, Next.js server component)": ((__turbopack_context__) => {

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.n(__turbopack_context__.i("[project]/src/app/[slug]/page.tsx [app-rsc] (ecmascript)"));
}}),

};

//# sourceMappingURL=_d0c3b475._.js.map