import { Badge } from "@/components/ui/badge";
import Image from "next/image";
import Link from "next/link";

interface SiteCardProps {
  title: string;
  description: string;
  imageUrl: string;
  url: string;
  isNew?: boolean;
}

export function SiteCard({ title, description, imageUrl, url, isNew = false }: SiteCardProps) {
  return (
    <Link
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      className="block bg-white rounded-lg border border-gray-200 hover:shadow-md transition-shadow overflow-hidden group"
    >
      <div className="p-4 flex flex-col h-full">
        <div className="flex items-start gap-3 mb-2">
          <div className="shrink-0">
            <Image
              src={imageUrl}
              alt={title}
              width={40}
              height={40}
              className="rounded w-10 h-10 object-contain bg-gray-50"
            />
          </div>
          <div className="flex-1 min-w-0">
            <div className="flex items-center gap-2">
              <h3 className="font-medium text-sm text-gray-900 truncate group-hover:text-blue-600">{title}</h3>
              {isNew && (
                <Badge variant="outline" className="bg-red-50 text-red-600 border-red-200 text-[10px] h-4 px-1">
                  NEW
                </Badge>
              )}
            </div>
            <p className="text-xs text-gray-500 line-clamp-2 mt-1">{description}</p>
          </div>
        </div>
      </div>
    </Link>
  );
}
