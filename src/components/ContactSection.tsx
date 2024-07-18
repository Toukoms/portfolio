import React from "react";
import { Button, buttonVariants } from "./ui/button";
import {
  BsFacebook,
  BsGithub,
  BsLinkedin,
  BsMailbox,
  BsTwitterX,
  BsX,
} from "react-icons/bs";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { MailIcon, Phone } from "lucide-react";

const ContactSection = () => {
  return (
    <section id="contact" className="w-full mb-0">
      <div>
        <h2 className="mb-2 text-4xl text-secondary-foreground font-oswald">
          Contacts
        </h2>
        <p className="mb-4 description">
          Call me, send me an email or locate me on my social media accounts.
        </p>
        <div className="w-fit flex items-center gap-8">
          <div className="flex items-center gap-2 p-0 text-primary text-lg font-oswald">
            <Phone size={20} />
            <span>032 48 995 32</span>
          </div>
          <div className="flex items-center gap-2 p-0 text-primary text-lg font-oswald">
            <Phone size={20} />
            <span>038 07 188 69</span>
          </div>
        </div>
        <div className="w-fit flex items-center flex-wrap gap-0 sm:gap-8 my-2">
          <Link
            href={"mailto:tokiniaina090605@gmail.com"}
            className={cn(
              buttonVariants({ variant: "link" }),
              "flex gap-1 p-0 h-2"
            )}
          >
            <MailIcon size={16} />
            <span>tokiniaina090605@gmail.com</span>
          </Link>
          <Link
            href={"mailto:tokiniaina.rahajanirina@student.passerellesnumeriques.org"}
            className={cn(
              buttonVariants({ variant: "link" }),
              "flex gap-1 p-0"
            )}
          >
            <MailIcon size={16} />
            <span>
              tokiniaina.rahajanirina@student.passerellesnumeriques.org
            </span>
          </Link>
        </div>
        <div className="flex items-center gap-4">
          <Link
            href={"https://github.com/Toukoms"}
            target="_blank"
            className={cn(
              buttonVariants({ variant: "outline" }),
              "w-10 h-10 p-2 rounded-sm hover:text-primary"
            )}
          >
            <BsGithub size={24} />
          </Link>
          <Link
            href={"https://www.linkedin.com/in/fanomezantsoa-tokiniaina-rahajanirina-6a2420237/"}
            target="_blank"
            className={cn(
              buttonVariants({ variant: "outline" }),
              "w-10 h-10 p-2 rounded-sm hover:text-primary"
            )}
          >
            <BsLinkedin size={24} />
          </Link>
          <Link
            href={"https://www.facebook.com/toki.niana.39"}
            target="_blank"
            className={cn(
              buttonVariants({ variant: "outline" }),
              "w-10 h-10 p-2 rounded-sm hover:text-primary"
            )}
          >
            <BsFacebook size={24} />
          </Link>
          <Link
            href={"https://x.com/Tokiniaina09"}
            target="_blank"
            className={cn(
              buttonVariants({ variant: "outline" }),
              "w-10 h-10 p-2 rounded-sm hover:text-primary"
            )}
          >
            <BsTwitterX size={24} />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
