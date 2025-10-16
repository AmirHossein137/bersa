import LanguageSwitcher from '@/components/LanguageSwitcher';
import { Link } from '@/i18n/navigation';
import {useTranslations} from 'next-intl';

export default function Home() {
  const t = useTranslations('HomePage');
  return (
    <div className="text-red-600">
      <LanguageSwitcher />
      <h1>{t('title')}</h1>;
      <Link href={"/blog"}>{t('blog')}</Link>
    </div>
  );
}
