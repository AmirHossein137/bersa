import {useTranslations} from 'next-intl';

export default function BlogPage() {
  const t = useTranslations('Blog');
  return (
    <section style={{padding: 16}}>
      <h2>{t('title')}</h2>
      <p>{t('description')}</p>
    </section>
  );
}