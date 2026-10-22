"use client";

import { useScopedI18n } from "@/locales/client";
import { CaseStudiesContent, PortfolioLocale } from "@/types/portfolio-content";

function CaseStudies({
  content,
  locale,
}: {
  content: CaseStudiesContent;
  locale: PortfolioLocale;
}) {
  const t = useScopedI18n("caseStudies");

  return (
    <section id="case-studies" className="py-20">
      <div className="container mx-auto px-4 md:px-6">
        <div className="mx-auto mb-12 max-w-3xl space-y-3 text-center">
          <p className="font-mono text-sm text-primary">
            {content.eyebrow[locale]}
          </p>
          <h2 className="text-3xl font-bold md:text-4xl">
            {content.title[locale]}
          </h2>
          <div className="mx-auto h-1 w-20 rounded-full bg-primary" />
          <p className="text-muted-foreground">{content.description[locale]}</p>
        </div>

        <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">
          {content.items.map((study) => (
            <article
              key={study.id}
              className="glass-panel flex flex-col gap-5 rounded-xl p-6 md:p-8"
            >
              <header>
                <h3 className="text-2xl font-bold">{study.name[locale]}</h3>
                <p className="mt-1 text-sm text-primary">
                  {study.type[locale]}
                </p>
              </header>

              <dl className="space-y-4">
                <div>
                  <dt className="font-semibold">{t("labels.context")}</dt>
                  <dd className="mt-1 text-sm leading-relaxed text-muted-foreground">
                    {study.context[locale]}
                  </dd>
                </div>
                <div>
                  <dt className="font-semibold">{t("labels.role")}</dt>
                  <dd className="mt-1 text-sm leading-relaxed text-muted-foreground">
                    {study.role[locale]}
                  </dd>
                </div>
                <div>
                  <dt className="font-semibold">{t("labels.constraint")}</dt>
                  <dd className="mt-1 text-sm leading-relaxed text-muted-foreground">
                    {study.constraint[locale]}
                  </dd>
                </div>
                <div>
                  <dt className="font-semibold">{t("labels.decision")}</dt>
                  <dd className="mt-1 text-sm leading-relaxed text-muted-foreground">
                    {study.decision[locale]}
                  </dd>
                </div>
                <div>
                  <dt className="font-semibold">{t("labels.outcome")}</dt>
                  <dd className="mt-1 text-sm leading-relaxed text-muted-foreground">
                    {study.outcome[locale]}
                  </dd>
                </div>
                <div>
                  <dt className="font-semibold">{t("labels.next")}</dt>
                  <dd className="mt-1 text-sm leading-relaxed text-muted-foreground">
                    {study.next[locale]}
                  </dd>
                </div>
              </dl>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export default CaseStudies;
