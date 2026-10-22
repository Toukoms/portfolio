"use client";
import { useScopedI18n } from "@/locales/client";

function Footer() {
  const t = useScopedI18n("footer");
  const year = new Date().getFullYear();

  return (
    <footer className="py-8 border-t border-border">
      <div className="container mx-auto px-4 md:px-6 text-center text-muted-foreground">
        <p>{t("rights", { year })}</p>
        <p className="text-xs mt-2">{t("built")}</p>
      </div>
    </footer>
  );
}

export default Footer;
