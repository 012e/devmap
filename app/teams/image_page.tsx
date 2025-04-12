import { Button } from "@/components/ui/button";
import React, { ReactNode } from "react";
type TypeImgPage = {
  content: ReactNode;
  image: string | undefined;
  descr?: string;
};
export default function ImagePage({ content, image, descr }: TypeImgPage) {
  return (
    <div className="grid grid-cols-1 grid-rows-2 rounded-2xl border-gray-300 bg-gray-50 border-1">
      <div className="row-[span_16_/_span_16] p-3">{content}</div>
      <hr />
      <div>
        {image && <img className="rounded-b-2xl w-full" src={image}></img>}
        {descr && (
          <div className="p-3">
            <p className="py-3">{descr}</p>
            <Button className="hover:bg-gray-600 hover:cursor-pointer   ">
              Claim gay
            </Button>
          </div>
        )}
      </div>
    </div>
  );
}
