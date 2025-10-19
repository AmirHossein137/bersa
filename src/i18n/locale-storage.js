'use client';

export function getStoredLocale() {
  return sessionStorage.getItem('locale');
}

export function setStoredLocale(locale) {
  sessionStorage.setItem('locale', locale);
}
