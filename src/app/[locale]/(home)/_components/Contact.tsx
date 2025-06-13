"use client";
import React, { useState } from "react";
import { cn } from "@/lib/utils";
import { useInView } from "react-intersection-observer";
import Link from "next/link";
import Image from "next/image";
import SocialLinks from "./SocialLinks";

interface ContactProps {
  className?: string;
}

const Contact: React.FC<ContactProps> = ({ className }) => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [formStatus, setFormStatus] = useState<
    "idle" | "submitting" | "success" | "error"
  >("idle");
  const [currentLine, setCurrentLine] = useState(0);

  const [headerRef, headerInView] = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });

  const [leftColRef, leftColInView] = useInView({
    triggerOnce: true,
    threshold: 0.2,
    delay: 100,
  });

  const [rightColRef, rightColInView] = useInView({
    triggerOnce: true,
    threshold: 0.2,
    delay: 200,
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = () => {
    setFormStatus("submitting");

    // Simulate form submission
    setTimeout(() => {
      setFormStatus("success");
      setFormData({ name: "", email: "", message: "" });

      // Reset form status after a delay
      setTimeout(() => {
        setFormStatus("idle");
        setCurrentLine(0);
      }, 5000);
    }, 1500);
  };

  const dialogLines = [
    "Hello there! How can I help you today?",
    "Feel free to share your project ideas or questions.",
    "I'll get back to you as soon as possible!",
  ];

  // Move to next dialog line every 3 seconds
  React.useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentLine((prev) => (prev + 1) % dialogLines.length);
    }, 3000);

    return () => clearInterval(intervalId);
  }, [dialogLines.length]);

  return (
    <section id="contact" className={cn("py-20", className)}>
      <div className="container mx-auto px-4 md:px-6">
        <div
          ref={headerRef}
          className={cn(
            "space-y-2 text-center mb-12 transition-all duration-700 transform",
            headerInView
              ? "opacity-100 translate-y-0"
              : "opacity-0 translate-y-10"
          )}
        >
          <h2 className="text-sm font-mono text-primary">GET IN TOUCH</h2>
          <h3 className="text-3xl md:text-4xl font-bold">Let&apos;s Connect</h3>
          <div className="h-1 w-20 bg-gradient-to-r from-neon-cyan to-neon-purple rounded-full mx-auto"></div>
          <p className="text-muted-foreground max-w-2xl mx-auto mt-4">
            Ready to start a new project or just want to chat? Send me a
            message!
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div
              ref={leftColRef}
              className={cn(
                "glass-panel p-6 space-y-6 order-2 md:order-1 transition-all duration-700 transform",
                leftColInView
                  ? "opacity-100 translate-x-0"
                  : "opacity-0 -translate-x-10"
              )}
            >
              <h3 className="font-mono text-lg">CONTACT FORM</h3>

              {formStatus === "success" ? (
                <div className="py-8 text-center space-y-4">
                  <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary/20 text-primary mb-4 animate-pulse">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
                      <polyline points="22 4 12 14.01 9 11.01"></polyline>
                    </svg>
                  </div>
                  <h4 className="text-xl font-bold">Message Sent!</h4>
                  <p className="text-muted-foreground">
                    Thanks for reaching out. I&apos;ll get back to you soon.
                  </p>
                </div>
              ) : (
                <form
                  onSubmit={handleSubmit}
                  action="https://formspree.io/f/xzzedwbp"
                  method="POST"
                  className="space-y-4"
                >
                  <div>
                    <label
                      htmlFor="name"
                      className="block text-left text-sm font-medium mb-1"
                    >
                      Name :
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      className="w-full px-4 py-2 bg-muted border border-border rounded-md focus:outline-none focus:ring-1 focus:ring-primary"
                      required
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="email"
                      className="block text-left text-sm font-medium mb-1"
                    >
                      Email :
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      className="w-full px-4 py-2 bg-muted border border-border rounded-md focus:outline-none focus:ring-1 focus:ring-primary"
                      required
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="message"
                      className="block text-left text-sm font-medium mb-1"
                    >
                      Message :
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      rows={4}
                      className="w-full px-4 py-2 bg-muted border border-border rounded-md focus:outline-none focus:ring-1 focus:ring-primary resize-none"
                      required
                    ></textarea>
                  </div>

                  <button
                    type="submit"
                    disabled={formStatus === "submitting"}
                    className="w-full px-4 py-2 bg-primary text-primary-foreground rounded-md font-medium transition-all hover:bg-primary/90 focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 focus:ring-offset-background"
                  >
                    {formStatus === "submitting" ? (
                      <span className="inline-flex items-center">
                        <svg
                          className="animate-spin -ml-1 mr-2 h-4 w-4 text-primary-foreground"
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                        >
                          <circle
                            className="opacity-25"
                            cx="12"
                            cy="12"
                            r="10"
                            stroke="currentColor"
                            strokeWidth="4"
                          ></circle>
                          <path
                            className="opacity-75"
                            fill="currentColor"
                            d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                          ></path>
                        </svg>
                        Sending...
                      </span>
                    ) : (
                      "Send Message"
                    )}
                  </button>
                </form>
              )}
            </div>

            <div
              ref={rightColRef}
              className={cn(
                "space-y-6 order-1 md:order-2 transition-all duration-700 transform",
                rightColInView
                  ? "opacity-100 translate-x-0"
                  : "opacity-0 translate-x-10"
              )}
            >
              <div className="glass-panel p-6 mb-6">
                <h3 className="font-mono text-lg mb-4">DIALOG</h3>
                <div className="flex items-start space-x-4">
                  <div className="w-10 h-10 rounded-full bg-gradient-to-br from-neon-cyan to-neon-purple flex items-center justify-center flex-shrink-0">
                    <div className="w-9 h-9 overflow-hidden rounded-full bg-background flex items-center justify-center">
                      <Image
                        src={"/pdp.jpg"}
                        alt={"Avatar Image"}
                        width={1920}
                        height={1080}
                      />
                    </div>
                  </div>
                  <div className="py-2 px-4 bg-muted rounded-xl rounded-tl-none w-full">
                    <div className="relative min-h-[48px] h-full w-full flex items-center">
                      {dialogLines.map((line, index) => (
                        <p
                          key={index}
                          className={cn(
                            "text-wrap text-left transition-opacity duration-300 absolute",
                            currentLine === index ? "opacity-100" : "opacity-0"
                          )}
                        >
                          {line}
                        </p>
                      ))}
                    </div>
                  </div>
                </div>
              </div>

              <div className="glass-panel p-6">
                <h3 className="font-mono text-lg mb-4">CONTACT INFO</h3>
                <div className="space-y-4">
                  <div className="flex items-center space-x-3">
                    <div className="w-8 h-8 rounded-full bg-muted flex items-center justify-center">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="16"
                        height="16"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="text-primary"
                      >
                        <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
                      </svg>
                    </div>
                    <span>+261 32 48 995 32</span>
                  </div>

                  <div className="flex items-center space-x-3">
                    <div className="w-8 h-8 rounded-full bg-muted flex items-center justify-center">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="16"
                        height="16"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="text-primary"
                      >
                        <rect x="2" y="4" width="20" height="16" rx="2"></rect>
                        <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"></path>
                      </svg>
                    </div>
                    <Link
                      href="mailto:hei.tokiniaina.3@gmail.com"
                      className="text-accent underline"
                    >
                      hei.tokiniaina.3@gmail.com
                    </Link>
                  </div>

                  <div className="flex items-center space-x-3">
                    <div className="w-8 h-8 rounded-full bg-muted flex items-center justify-center">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="16"
                        height="16"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="text-primary"
                      >
                        <path d="M12 2a8 8 0 0 0-8 8c0 5.4 7.05 11.5 7.35 11.76a1 1 0 0 0 1.3 0C13 21.5 20 15.4 20 10a8 8 0 0 0-8-8z"></path>
                        <path d="M12 13a3 3 0 1 0 0-6 3 3 0 0 0 0 6z"></path>
                      </svg>
                    </div>
                    <span>Ivandry, Antananarivo, Madagascar</span>
                  </div>
                </div>

                <SocialLinks />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
