"use client";

import Image, { ImageProps } from "next/image";
import React from "react";
import { MdErrorOutline } from "react-icons/md";

type Props = {
  src: string;
  alt: string;
  errorIcon?: any;
  errorMessage?: string;
} & ImageProps;

const ImageWithErrorHandler = (props: Props) => {
  const [onError, setOnError] = React.useState(false);

  return (
    <>
      {onError ? (
        <div className="w-full h-full bg-gray-50 bg-opacity-25 flex flex-col justify-center items-center">
          {props.errorIcon || <MdErrorOutline size={32} />}
          <p className="text-sm text-gray-200 text-center w-1/2 font-light">
            {props.errorMessage || "Error"}
          </p>
        </div>
      ) : (
        <Image
          {...props}
          width="0"
          height="0"
          sizes="100vw"
          src={props.src}
          alt={props.alt}
          loading="lazy"
          onError={(e) => {
            e.currentTarget.onerror = null;
            setOnError(true);
          }}
        />
      )}
    </>
  );
};

export default ImageWithErrorHandler;
