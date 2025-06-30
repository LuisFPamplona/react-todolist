import { Wind, BrushCleaning } from "lucide-react";

function EmptyTaskAdvice() {
  return (
    <>
      <div className="flex flex-col justify-center align-middle items-center gap-4 mb-40">
        <div className="flex">
            <BrushCleaning />
            <Wind />
        </div>
        <p className="text-2xl">Está vazio por aqui</p>
      </div>
    </>
  );
}

export default EmptyTaskAdvice;
