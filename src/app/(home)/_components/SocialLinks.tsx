import Link from "next/link";
import { LuFacebook, LuGithub, LuLinkedin } from "react-icons/lu";

function SocialLinks() {
  return (
    <div className="mt-6 pt-6 border-t border-border">
      <h4 className="font-mono text-sm mb-3">SOCIAL LINKS</h4>
      <div className="flex space-x-4">
        <Link
          href="https://github.com/toukoms"
          target="_blank"
          className="w-10 h-10 rounded-full bg-muted hover:bg-muted/60 flex items-center justify-center transition-all hover:scale-110"
        >
          <LuGithub size={20} className="text-primary" />
        </Link>

        <Link
          href="https://www.linkedin.com/in/fanomezantsoa-tokiniaina/"
          target="_blank"
          className="w-10 h-10 rounded-full bg-muted hover:bg-muted/60 flex items-center justify-center transition-all hover:scale-110"
        >
          <LuLinkedin size={20} className="text-primary" />
        </Link>

        <Link
          href="https://www.facebook.com/toki.niana.39/"
          target="_blank"
          className="w-10 h-10 rounded-full bg-muted hover:bg-muted/60 flex items-center justify-center transition-all hover:scale-110"
        >
          <LuFacebook size={20} className="text-primary" />
        </Link>
      </div>
    </div>
  );
}

export default SocialLinks;
