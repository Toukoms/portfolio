"use client";

import Image from "next/image";
import React from "react";
import { MdErrorOutline } from "react-icons/md";

type Props = {
  src: string;
  alt: string;
  errorIcon?: any;
  errorMessage?: string;
};

const ImageWithErrorHandler = (props: Props) => {
  const [onError, setOnError] = React.useState(false);

  return (
    <div className="overflow-hidden w-full h-48 rounded-sm">
      {onError ? (
        <div className="w-full h-full bg-gray-50 bg-opacity-25 flex flex-col justify-center items-center">
          {props.errorIcon || <MdErrorOutline size={32} />}
          <p className="text-sm text-gray-200 text-center w-1/2 font-light">{props.errorMessage || 'Something went wrong, please reload the page!'}</p>
        </div>
      ) : (
        <Image
          width="0"
          height="0"
          sizes="100vw"
          className="object-cover object-center w-full h-full duration-1000 ease-out group-hover:scale-110"
          src={props.src}
          alt={props.alt}
          onLoadingComplete={(img) => {
            if (!img.complete || img.naturalWidth == 0) {
              setOnError(true);
            }
          }}
          onError={(e) => {
            e.currentTarget.onerror = null;
            setOnError(true);
          }}
        />
      )}
    </div>
  );
};

export default ImageWithErrorHandler;
