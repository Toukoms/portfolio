import Link from "next/link";
import { FaGithub } from "react-icons/fa";
import { BsArrowUpRightSquare } from "react-icons/bs";
import ImageWithErrorHandler from "./ImageWithErrorHandler";

const Project = (props: Project) => {
  return (
    <div className="flex flex-col gap-2 p-4 overflow-hidden bg-card text-card-foreground border-2 rounded-md w-80 h-80 group">
      <Link href={props.linkDemo ?? props.linkSource} target="_blank" className="w-full h-48 overflow-hidden group">
        <ImageWithErrorHandler src={props.image} alt={props.name} unoptimized={props.image.includes(".gif")} className="object-cover object-center w-full h-full transition-transform duration-1000 ease-in-out scale-105 group-hover:scale-110" loading="eager"/>
      </Link>
      
      <div className="flex flex-gro h-max">
        <div>
          <h1 className="text-lg font-bold whitespace-nowrap">{props.name}</h1>
          <p className="text-sm">{props.description}</p>
        </div>
        <div className="flex gap-2 self-end">
          <Link href={props.linkSource} target="_blank">
            <FaGithub size={24} />
          </Link>
          {props.linkDemo && (
            <Link href={props.linkDemo} target="_blank">
              <BsArrowUpRightSquare size={24} />
            </Link>
          )}
        </div>
      </div>
    </div>
  );
};

export default Project;
