"use client";

import { linkState } from "@/states/active-link";
import { useEffect } from "react";
import { useSnapshot } from "valtio";

function ScrollViewProvider() {
  const { setLinkActive, deactivateLinks } = useSnapshot(linkState);
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const sectionId = entry.target.getAttribute("id");
            if (sectionId) {
              deactivateLinks(); // Deactivate all links first
              setLinkActive(sectionId); // Activate the current section
            }
          }
        });
      },
      { threshold: 0.5 }
    );

    const sections = document.querySelectorAll("section");
    sections.forEach((section) => {
      observer.observe(section);
    });

    return () => {
      observer.disconnect();
    };
  }, [setLinkActive, deactivateLinks]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("anime_show");
            setTimeout(() => {
              observer.unobserve(entry.target);
            }, 1200);
          }
        });
      },
      { threshold: 0.4, rootMargin: "420px" }
    );

    const hiddenSections = document.querySelectorAll("section .anime_hidden");
    hiddenSections.forEach((section) => {
      observer.observe(section);
    });

    return () => {
      observer.disconnect();
    };
  }, []);

  return null;
}

export default ScrollViewProvider;
