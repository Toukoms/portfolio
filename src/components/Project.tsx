import Link from "next/link";
import { FaGithub } from "react-icons/fa";
import { BsArrowUpRightSquare } from "react-icons/bs";
import ImageWithErrorHandler from "./ImageWithErrorHandler";
import { Badge } from "./ui/badge";
import { cn } from "@/lib/utils";

const Project = (props: ProjectProps) => {
  return (
    <div className="relative flex flex-col sm:flex-row gap-4 p-4 overflow-hidden bg-card text-card-foreground border rounded-lg shadow-md w-full h-fit sm:aspect-video sm:max-h-80 group max-w-4xl">
      <Badge
        variant="outline"
        className={cn("absolute top-6 right-6 sm:top-4 sm:right-4 z-30", {
          "bg-yellow-500": props.type === "team",
          "bg-indigo-500": props.type === "solo",
        })}
      >
        {props.type}
      </Badge>

      <Link
        href={props.linkDemo ?? props.linkSource}
        target="_blank"
        className="h-72 sm:h-full sm:w-1/3 rounded-md overflow-hidden group"
      >
        <ImageWithErrorHandler
          src={props.image}
          alt={props.name}
          unoptimized={props.image.includes(".gif")}
          className="object-cover object-center w-full h-full transition-transform duration-500 ease-in-out scale-100 group-hover:scale-105"
          loading="eager"
        />
      </Link>

      <div className="sm:w-2/3 flex flex-col justify-between h-full">
        <div>
          <h1 className="text-xl font-semibold mb-2">{props.name}</h1>
          <p className="text-sm text-secondary-foreground mb-4">
            {props.description}
          </p>
          <div className="flex flex-wrap gap-2">
            {props.techno.map((tech, index) => (
              <Badge key={index} variant="secondary">
                {tech}
              </Badge>
            ))}
          </div>
        </div>
        <div className="flex gap-3 mt-4">
          <Link
            href={props.linkSource}
            target="_blank"
            className="text-gray-500 hover:text-gray-700"
          >
            <FaGithub size={24} />
          </Link>
          {props.linkDemo && (
            <Link
              href={props.linkDemo}
              target="_blank"
              className="text-gray-500 hover:text-gray-700"
            >
              <BsArrowUpRightSquare size={24} />
            </Link>
          )}
        </div>
      </div>
    </div>
  );
};

export default Project;
