import { Helmet } from 'react-helmet-async';

interface SEOProps {
  title?: string;
  description?: string;
  keywords?: string;
  image?: string;
  url?: string;
}

const SEO = ({ 
  title = 'Web-Artisan | Création de sites web pour artisans et commerces en France',
  description = 'Web-Artisan crée des sites web modernes, élégants et sur-mesure pour les artisans, petits commerces et indépendants en France. Devis gratuit.',
  keywords = 'création site web artisan, site vitrine commerce, agence web France, développement site internet, site e-commerce artisan',
  image = 'https://web-artisan.fr/og-image.jpg',
  url = 'https://web-artisan.fr/'
}: SEOProps) => {
  return (
    <Helmet>
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />
      
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={image} />
      <meta property="og:url" content={url} />
      <meta property="og:type" content="website" />
      
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={image} />
      
      <link rel="canonical" href={url} />
    </Helmet>
  );
};

export default SEO;