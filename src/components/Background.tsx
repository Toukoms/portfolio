"use client";
import React, { useEffect, useRef } from "react";
import { cn } from "@/lib/utils";

interface BackgroundProps {
  className?: string;
}

const Background: React.FC<BackgroundProps> = ({ className }) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const particlesRef = useRef<any[]>([]);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const handleResize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
      initParticles();
    };

    window.addEventListener("resize", handleResize);
    handleResize();

    // Initialize particles
    function initParticles() {
      particlesRef.current = [];
      const particleCount = Math.floor(window.innerWidth / 20); // Fewer particles on smaller screens

      for (let i = 0; i < particleCount; i++) {
        particlesRef.current.push({
          x: Math.random() * canvas!.width,
          y: Math.random() * canvas!.height,
          size: Math.random() * 2 + 0.5,
          speedX: Math.random() * 0.2 - 0.1,
          speedY: Math.random() * 0.2 - 0.1,
          color:
            i % 3 === 0
              ? "rgba(0, 255, 255, "
              : i % 3 === 1
              ? "rgba(240, 0, 255, "
              : "rgba(54, 177, 255, ",
          alpha: Math.random() * 0.5 + 0.1,
        });
      }
    }

    // Animation loop
    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      particlesRef.current.forEach((particle) => {
        // Update position
        particle.x += particle.speedX;
        particle.y += particle.speedY;

        // Wrap around canvas edges
        if (particle.x > canvas.width) particle.x = 0;
        if (particle.x < 0) particle.x = canvas.width;
        if (particle.y > canvas.height) particle.y = 0;
        if (particle.y < 0) particle.y = canvas.height;

        // Draw particle
        ctx.beginPath();
        ctx.arc(particle.x, particle.y, particle.size, 0, Math.PI * 2);
        ctx.fillStyle = `${particle.color}${particle.alpha})`;
        ctx.fill();
      });

      requestAnimationFrame(animate);
    };

    animate();

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className={cn(
        "fixed top-0 left-0 w-full h-full -z-10 pointer-events-none",
        className
      )}
    />
  );
};

export default Background;
