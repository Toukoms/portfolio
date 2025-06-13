import { I18nProviderClient } from "@/locales/client";
import NavigationProvider from "./NavigationProvider";

export default async function Providers({
  children,
  locale,
}: {
  children: React.ReactNode;
  locale: string
}) {
  return (
    <I18nProviderClient locale={locale}>
      <NavigationProvider>{children}</NavigationProvider>
    </I18nProviderClient>
  );
}
