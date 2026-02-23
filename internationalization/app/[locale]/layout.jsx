import { ReactNode } from "react";
import { locales } from "../../i18n-config";

export async function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}

export default async function LocaleLayout({ children, params }) {
  const { locale } = await params;

  return (
    // <html lang={params.locale}>
    <html lang={locale}>
      <body>{children}</body>
    </html>
  );
}
