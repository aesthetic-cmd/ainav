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
    <section className="mb-8">
      <div className="flex items-center gap-2 mb-4">
        <h2 className="text-lg font-bold text-gray-900">{title}</h2>
        <div className="flex-1 h-px bg-gray-200"></div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
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
