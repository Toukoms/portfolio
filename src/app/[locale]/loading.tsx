import { PacmanLoader } from "react-spinners";

export default function Loading() {
  return (
    <div className="flex items-center justify-center min-h-[86vh]">
      <PacmanLoader color="#00ffffcc" />
    </div>
  );
}
