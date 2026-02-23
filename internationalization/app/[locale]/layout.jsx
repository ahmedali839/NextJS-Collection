import { ReactNode } from 'react';
import { locales } from '../../i18n-config';

export async function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}

export default function LocaleLayout({
  children,
  params,
}: {
  children: ReactNode;
  params: { locale: string };
}) {
  return (
    <html lang={params.locale}>
      <body>{children}</body>
    </html>
  );
}