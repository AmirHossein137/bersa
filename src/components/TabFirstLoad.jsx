'use client';
import { useEffect } from 'react';
import { setStoredLocale } from '@/i18n/locale-storage';
import { routing } from '@/i18n/routing';

export default function TabFirstLoad() {
  useEffect(() => {
    const visited = sessionStorage.getItem('visited');
    if (!visited) {
      const defaultLocale = routing.defaultLocale;
      sessionStorage.setItem('visited', 'true');
      setStoredLocale(defaultLocale);
      document.cookie = `locale=${defaultLocale}; path=/; max-age=31536000; SameSite=Lax`;
      
    }
  }, []);

  return null;
}
