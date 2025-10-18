import {useTranslations} from 'next-intl';
import {Link} from '@/i18n/navigation';

export default function Home() {
  const t = useTranslations('HomePage');
  return (
    <main style={{padding: 16}}>
      <h1>{t('title')}</h1>
      <p>{t('intro')}</p>
      <Link href="/blog">{t('blog')}</Link>
    </main>
  );
}
