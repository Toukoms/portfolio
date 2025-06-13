"use client";
import { CSSProperties } from "react";
import { PacmanLoader } from "react-spinners";

const override: CSSProperties = {
  display: "block",
  margin: "0 auto",
  borderColor: "var(--primary)",
  color: "var(--primary)",
};

export default function Loading() {
  return (
    <div className="flex items-center justify-center min-h-[86vh]">
      <PacmanLoader
        color="var(--primary)"
        cssOverride={override}
        size={32}
        aria-label="Loading Spinner"
        />
    </div>
  );
}
