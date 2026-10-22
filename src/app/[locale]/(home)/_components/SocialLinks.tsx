import Link from "next/link";
import { useScopedI18n } from "@/locales/client";
import { LuFacebook, LuGithub, LuLinkedin } from "react-icons/lu";

function SocialLinks({
  social,
}: {
  social: { github: string; linkedin: string; facebook: string };
}) {
  const t = useScopedI18n("contact");

  return (
    <div className="mt-6 pt-6 border-t border-border">
      <h4 className="font-mono text-sm mb-3">{t("socialLinks")}</h4>
      <div className="flex space-x-4">
        <Link
          href={social.github}
          target="_blank"
          rel="noopener noreferrer"
          aria-label="GitHub"
          className="w-10 h-10 rounded-full bg-muted hover:bg-muted/60 flex items-center justify-center transition-all hover:scale-110"
        >
          <LuGithub size={20} className="text-primary" />
        </Link>

        <Link
          href={social.linkedin}
          target="_blank"
          rel="noopener noreferrer"
          aria-label="LinkedIn"
          className="w-10 h-10 rounded-full bg-muted hover:bg-muted/60 flex items-center justify-center transition-all hover:scale-110"
        >
          <LuLinkedin size={20} className="text-primary" />
        </Link>

        <Link
          href={social.facebook}
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Facebook"
          className="w-10 h-10 rounded-full bg-muted hover:bg-muted/60 flex items-center justify-center transition-all hover:scale-110"
        >
          <LuFacebook size={20} className="text-primary" />
        </Link>
      </div>
    </div>
  );
}

export default SocialLinks;
