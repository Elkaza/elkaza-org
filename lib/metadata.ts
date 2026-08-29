import { Metadata } from 'next';
import { getAlternates } from '@/lib/i18nPaths';
import { robotsForRoute } from '@/lib/routePolicy';

export function createLocalizedMetadata({
  title,
  description,
  path,
}: {
  title: string;
  description: string;
  path: string;
}): Metadata {
  const { dePath, enPath } = getAlternates(path);

  return {
    title,
    description,
    alternates: {
      canonical: path,
      languages: {
        'de-AT': dePath,
        en: enPath,
        'x-default': dePath,
      },
    },
    openGraph: {
      title,
      description,
      url: path,
      locale: path === '/en' || path.startsWith('/en/') ? 'en_US' : 'de_AT',
      type: 'website',
    },
    robots: robotsForRoute(path),
  };
}
