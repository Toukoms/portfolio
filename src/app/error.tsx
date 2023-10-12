"use client";
import Link from "next/link";
import { useEffect } from "react";

const Error = ({ error, reset }: { error: Error; reset: () => void }) => {
  useEffect(() => {
    console.error(error.message);
  }, [error]);

  return (
    <div className="h-full flex flex-col justify-center items-center">
      <div>
        <h1>Something went wrong :-(</h1>
        <div className="w-full p-4 flex gap-8 justify-center items-center">
          <button
            onClick={() => reset()}
            className="duration-300
        bg-yellow-600 hover:bg-yellow-400
        text-gray-800
        font-semibold
        p-4
        rounded-md"
          >
            Try again
          </button>
          <Link href={"/"} className="go-back">
            Go back HOME
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Error;
