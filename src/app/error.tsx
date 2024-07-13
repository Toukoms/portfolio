"use client";
import Link from "next/link";
import { useEffect } from "react";

const Error = ({ error, reset }: { error: Error; reset: () => void }) => {
  useEffect(() => {
    console.error(error.message);
  }, [error]);

  return (
    <div className="h-[90vh] flex flex-col justify-center items-center">
      <div>
        <h1>Something went wrong :-(</h1>
        <div className="flex items-center justify-center w-full gap-8 p-4">
          <button
            onClick={() => reset()}
            className="p-4 font-semibold text-gray-800 duration-300 bg-yellow-600 rounded-md hover:bg-yellow-400"
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
