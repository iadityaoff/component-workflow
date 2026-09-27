import { useEffect } from "react";

interface MetaHeadProps {
  title?: string;
  description?: string;
  image?: string;
  canonical?: string;
}

import { REGISTRY_COUNT } from "../../data/registry";

/**
 * MetaHead — Native SEO manager.
 * Updates document head properties for dynamic component pages.
 */
export function MetaHead({ 
  title = "UIForge — The living library of interfaces", 
  description = `12,000+ crafted React components, templates, and shadcn themes. Built by real design engineers.`,
  image = "/og-image.png",
  canonical 
}: MetaHeadProps) {
  
  const siteName = "UIForge";
  const fullTitle = title.includes(siteName) ? title : `${title} | ${siteName}`;

  useEffect(() => {
    // 1. Update Document Title
    document.title = fullTitle;

    // 2. Helper to update/create meta tags
    const updateMeta = (selector: string, attr: string, value: string) => {
      let element = document.querySelector(selector);
      if (!element) {
        element = document.createElement("meta");
        // Handle different selectors (name= vs property=)
        if (selector.includes("property")) {
          element.setAttribute("property", selector.match(/"([^"]+)"/)?.[1] || "");
        } else {
          element.setAttribute("name", selector.match(/"([^"]+)"/)?.[1] || "");
        }
        document.head.appendChild(element);
      }
      element.setAttribute(attr, value);
    };

    // 3. Update Standard Meta
    updateMeta('meta[name="description"]', "content", description);

    // 4. Update OpenGraph Tags
    updateMeta('meta[property="og:title"]', "content", fullTitle);
    updateMeta('meta[property="og:description"]', "content", description);
    updateMeta('meta[property="og:image"]', "content", image);
    updateMeta('meta[property="og:type"]', "content", "website");

    // 5. Update Twitter Tags
    updateMeta('meta[name="twitter:card"]', "content", "summary_large_image");
    updateMeta('meta[name="twitter:title"]', "content", fullTitle);
    updateMeta('meta[name="twitter:description"]', "content", description);
    updateMeta('meta[name="twitter:image"]', "content", image);

    // 6. Update Canonical Link
    if (canonical) {
      let link: HTMLLinkElement | null = document.querySelector('link[rel="canonical"]');
      if (!link) {
        link = document.createElement("link");
        link.setAttribute("rel", "canonical");
        document.head.appendChild(link);
      }
      link.setAttribute("href", canonical);
    }
  }, [fullTitle, description, image, canonical]);

  return null; // This component doesn't render anything to the DOM
}
