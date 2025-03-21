import { SiteCard } from "@/components/site-card";

interface CategorySectionProps {
  title: string;
  sites: Array<{
    id: string;
    title: string;
    description: string;
    imageUrl: string;
    url: string;
    isNew?: boolean;
  }>;
}

export function CategorySection({ title, sites }: CategorySectionProps) {
  return (
    <section className="mb-12 pb-4 rounded-xl">
      <div className="flex items-center gap-3 mb-6">
        <h2 className="text-xl font-bold text-gray-900 flex items-center">
          <div className="w-1.5 h-6 bg-blue-500 rounded-full mr-2"></div>
          {title}
        </h2>
        <div className="flex-1 h-px bg-gray-200"></div>
        <span className="text-sm text-gray-500">{sites.length}个工具</span>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5">
        {sites.map((site) => (
          <SiteCard
            key={site.id}
            title={site.title}
            description={site.description}
            imageUrl={site.imageUrl}
            url={site.url}
            isNew={site.isNew}
          />
        ))}
      </div>
    </section>
  );
}
