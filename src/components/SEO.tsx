import { useEffect } from 'react';

interface SEOProps {
  title: string;
  description: string;
  canonicalPath?: string;
  ogType?: 'website' | 'article';
}

export const SEO: React.FC<SEOProps> = ({
  title,
  description,
  canonicalPath = '',
  ogType = 'website'
}) => {
  useEffect(() => {
    // Update Page Title
    const fullTitle = title.includes('Infinity Advertising') 
      ? title 
      : `${title} | Infinity Advertising Pvt. Ltd.`;
    document.title = fullTitle;

    // Update Meta Description
    let metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute('content', description);
    } else {
      metaDescription = document.createElement('meta');
      metaDescription.setAttribute('name', 'description');
      metaDescription.setAttribute('content', description);
      document.head.appendChild(metaDescription);
    }

    // Update Canonical URL
    const canonicalUrl = `https://www.infinityadv.com.np${canonicalPath}`;
    let linkCanonical = document.querySelector('link[rel="canonical"]');
    if (linkCanonical) {
      linkCanonical.setAttribute('href', canonicalUrl);
    }

    // Update Open Graph Tags
    const updateOg = (property: string, content: string) => {
      let tag = document.querySelector(`meta[property="${property}"]`);
      if (tag) {
        tag.setAttribute('content', content);
      }
    };

    updateOg('og:title', fullTitle);
    updateOg('og:description', description);
    updateOg('og:url', canonicalUrl);
    updateOg('og:type', ogType);

  }, [title, description, canonicalPath, ogType]);

  return null;
};
