import React from "react";
import { ExternalLink } from "lucide-react";

interface UrlMetadata {
  title?: string;
  description?: string;
  image?: string;
  url: string;
  type: string;
  siteName?: string;
  embedUrl?: string;
  // Add other properties as needed
}

interface UrlPreviewProps {
  metadata: UrlMetadata;
}

export function UrlPreview({ metadata }: UrlPreviewProps) {
  if (metadata.type === "image" && metadata.image) {
    return (
      <div className="p-2 md:w-full w-3/4 max-w-xs rounded-lg mt-2 hover:bg-gray-200 transition-colors">
        <img
          src={metadata.image}
          alt={metadata.title || "Image preview"}
          className="w-full h-auto object-cover rounded-md"
        />
      </div>
    );
  }

  return (
    <div className="bg-gray-100 p-2 md:w-full w-4/5 max-w-sm rounded-lg mt-2 hover:bg-gray-200 transition-colors">
      {metadata.embedUrl ? (
        <div className="sm:block aspect-video w-full">
          <iframe
            src={metadata.embedUrl}
            className="md:w-full w-3/4 h-full rounded-md"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            title={metadata.title || "Embedded content"}
          ></iframe>
        </div>
      ) : (
        <a
          href={metadata.url}
          target="_blank"
          rel="noopener noreferrer"
          className="no-underline block"
        >
          {metadata.image && (
            <img
              src={metadata.image}
              alt={metadata.title || "Link preview"}
              className="w-full h-auto max-h-32 object-cover mb-2 rounded-md"
            />
          )}
          {metadata.title && (
            <h4 className="font-bold text-blue-600 text-sm">
              {metadata.title}
            </h4>
          )}
          {metadata.description && (
            <p className="text-xs text-gray-600 mt-1 line-clamp-2">
              {metadata.description}
            </p>
          )}
          {metadata.siteName && (
            <p className="text-xs text-gray-500 mt-1 flex items-center">
              <ExternalLink size={12} className="mr-1" />
              {metadata.siteName}
            </p>
          )}
        </a>
      )}
    </div>
  );
}
