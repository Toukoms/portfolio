"use client";
import { cn } from "@/lib/utils";
import { useScopedI18n } from "@/locales/client";
import React, { useEffect, useState } from "react";

interface SplashScreenProps {
  onComplete: () => void;
  className?: string;
}

const SplashScreen: React.FC<SplashScreenProps> = ({
  onComplete,
  className,
}) => {
  const t = useScopedI18n("splashScreen")
  const [loadingProgress, setLoadingProgress] = useState(0);
  const [loadingText, setLoadingText] = useState("Initializing...");
  const [showSplash, setShowSplash] = useState(true);

  useEffect(() => {
    const loadingTexts = [
      t("init"),
      t("load"),
      t("connect"),
      t("render"),
      t("optimize"),
      t("prepare"),
    ];

    let currentIndex = 0;
    let progress = 0;

    const interval = setInterval(() => {
      progress += Math.random() * 15;

      if (progress >= 100) {
        progress = 100;
        clearInterval(interval);

        // After loading completes, wait a moment before hiding
        setTimeout(() => {
          setShowSplash(false);
          setTimeout(() => onComplete(), 500); // Wait for fade out animation
        }, 1000);
      } else if (progress > currentIndex * (100 / loadingTexts.length)) {
        currentIndex = Math.min(currentIndex + 1, loadingTexts.length - 1);
        setLoadingText(loadingTexts[currentIndex]);
      }

      setLoadingProgress(progress);
    }, 300);

    return () => clearInterval(interval);
  }, [onComplete]);

  return (
    <div
      className={cn(
        "fixed inset-0 z-50 flex flex-col items-center justify-center bg-background text-foreground transition-opacity duration-500",
        showSplash ? "opacity-100" : "opacity-0 pointer-events-none",
        className
      )}
    >
      <div className="w-full max-w-md px-4 space-y-8">
        <div className="text-center mb-8">
          <p className="text-3xl md:text-4xl font-mono font-bold mb-2 animate-neon-pulse">
            <span className="text-neon-cyan">TOKINIAINA</span>
            <span className="text-neon-pink">/</span>
            <span className="text-neon-purple">PORTFOLIO</span>
          </p>
          <div className="h-[2px] w-full bg-gradient-to-r from-neon-cyan via-neon-blue to-neon-purple mb-4"></div>
          <p className="font-mono text-sm opacity-80">Version 1.1.0</p>
        </div>

        <div className="space-y-4">
          <div className="loading-progress-container">
            <div
              className="loading-progress-bar"
              style={{ width: `${loadingProgress}%` }}
            />
          </div>

          <div className="flex justify-between items-center">
            <p className="font-mono text-xs text-neon-cyan animate-pulse">
              {loadingText}
            </p>
            <p className="font-mono text-xs">{Math.round(loadingProgress)}%</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SplashScreen;
