import React from "react";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { ScrollArea } from "@/components/ui/scroll-area";
import Image from "next/image";
import Link from "next/link";

function ProjectDialog({
  title,
  description,
  image,
  technologies,
  demoUrl,
  githubUrl,
}: ProjectProps) {
  return (
    <Dialog>
      <DialogTrigger className="absolute w-full h-full z-50 cursor-pointer" />
      <DialogContent className="max-w-lg p-6 rounded-lg shadow-lg">
        <Image
          src={image}
          alt={title}
          width={1980}
          height={1980}
          className="w-full aspect-video object-cover rounded-t-lg mt-4"
        />
        <DialogHeader>
          <DialogTitle className="text-2xl font-semibold text-primary">
            {title}
          </DialogTitle>
        </DialogHeader>
        <ScrollArea className="max-h-60 overflow-y-auto">
          <DialogDescription asChild>
            <p className="text-sm">{description}</p>
          </DialogDescription>
          <div className="mt-4 mb-2">
            <h3 className="text-lg font-semibold">Technologies Used</h3>
            <ul className="flex flex-wrap gap-2 mt-2">
              {technologies.map((tech) => (
                <li
                  key={tech}
                  className="px-3 py-1 border border-primary rounded-full text-sm font-medium"
                >
                  {tech}
                </li>
              ))}
            </ul>
          </div>
        </ScrollArea>
        <div className="flex justify-end gap-4 mt-4">
          {demoUrl && (
            <Link
              href={demoUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm font-medium px-3 py-1.5 rounded bg-primary text-primary-foreground hover:bg-primary/90 transition"
            >
              Live Demo
            </Link>
          )}

          {githubUrl && (
            <Link
              href={githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm font-medium px-3 py-1.5 rounded bg-muted hover:bg-muted/80 transition"
            >
              View Code
            </Link>
          )}
        </div>
      </DialogContent>
    </Dialog>
  );
}

export default ProjectDialog;
