import Image from "next/image";
import Link from "next/link";
import { FaGithub } from "react-icons/fa";
import { FiArrowUpRight } from "react-icons/fi";

type Props = {
  imageSrc: string;
  title: string;
  description: string;
  linkDemo?: string;
  linkSource: string;
};

const Project = (props: Props) => {
  return (
    <div className="w-full h-80 border-2 border-cyan-200 p-8 rounded-xl flex flex-col justify-between gap-2 md:gap-4">
      <div className="overflow-hidden w-full h-38 rounded-sm">
        <Image
          src={props.imageSrc}
          alt={props.title}
          width={1000}
          height={1000}
          loading="eager"
          className="object-scale-down object-center duration-1000 ease-out hover:scale-110"
        />
      </div>
      <div className="flex justify-between items-end">
        <div>
          <h1 className="font-bold text-lg whitespace-nowrap">{props.title}</h1>
          <p className="text-sm text-gray-400">{props.description}</p>
        </div>
        <div className="flex gap-2">
          <Link href={props.linkSource}>
            <FaGithub size={24} />
          </Link>
          {props.linkDemo && (
            <Link href={props.linkDemo}>
              <FiArrowUpRight size={24} />
            </Link>
          )}
        </div>
      </div>
    </div>
  );
};

export default Project;
