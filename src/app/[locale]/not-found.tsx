"use client";
import { useEffect } from "react";
import Link from "next/link";
import { useCurrentLocale, useScopedI18n } from "@/locales/client";
import { usePathname } from "next/navigation";

const NotFound = () => {
  const pathname = usePathname();
  const locale = useCurrentLocale();
  const t = useScopedI18n("notFound");

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      pathname
    );
  }, [pathname]);

  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="text-center">
        <p className="text-4xl font-bold mb-4">404</p>
        <p className="text-xl text-gray-600 mb-4">{t("title")}</p>
        <Link
          href={`/${locale}`}
          className="text-blue-500 hover:text-blue-700 underline"
        >
          {t("backHome")}
        </Link>
      </div>
    </div>
  );
};

export default NotFound;
