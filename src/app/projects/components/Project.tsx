import Link from "next/link";
import { FaGithub } from "react-icons/fa";
import { BsArrowUpRightSquare } from "react-icons/bs";
import ImageWithErrorHandler from "../../../components/ImageWithErrorHandler";
import { Project } from "@/types/project";

type Props = Project

const Project = (props: Props) => {
  return (
    <div className="
    w-full
    h-80
    overflow-hidden
    rounded-sm
    text-black
    flex
    flex-col
    group">
      <div className="w-full h-52 group">
        <ImageWithErrorHandler src={props.imageSrc} alt={props.title} className="object-cover object-center w-full h-full transition-transform duration-1000 scale-105 ease-in-out group-hover:scale-110" loading="eager"/>
      </div>
      
      <div className="flex justify-between h-max flex-grow items-end p-4 bg-slate-200">
        <div>
          <h1 className="font-bold text-lg whitespace-nowrap">{props.title}</h1>
          <p className="text-sm text-gray-800">{props.description}</p>
        </div>
        <div className="flex gap-2">
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
